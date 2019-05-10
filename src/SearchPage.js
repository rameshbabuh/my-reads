import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchResults from './SearchResults'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component{
    static propTypes = {
        navigateToHome: PropTypes.func.isRequired
    }
    state = {
        searchList: [],
        query: ''
    }
    filterResults = (e) => {
        var searchStr = (e.target.value).trim();
        this.setState(()=>({
            query: searchStr
        }))
        if(searchStr !== ''){
            BooksAPI.search(searchStr).then((searchList)=>{
                if(!searchList.error && searchStr === this.state.query){
                    const updatedSearchList = this.updateShelfAttr(searchList);
                    this.setState(() => ({
                        searchList: updatedSearchList
                    }))
                } else{
                    this.clearSearchList();
                }
            })
        } else{
            this.clearSearchList();
        }
    }
    clearSearchList = () => {
        this.setState(() => ({
            searchList: []
        })) 
    }
    updateShelfAttr = (searchList) => {
        const currentShelfList = this.props.currentShelf;
        searchList.length !== 0 && searchList.map((searchedItem)=>{
            var commonItem = currentShelfList.filter((currentShelfItem)=>(currentShelfItem.id === searchedItem.id))
            if(commonItem && commonItem.length){
                searchedItem.shelf = commonItem[0].shelf;
            }
            return searchList;
        })
        return searchList;
    }
    render(){
        const { navigateToHome } = this.props;
        const { query, searchList } = this.state;
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={()=> {this.clearSearchList(); navigateToHome()}}>Close</button>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={query} autoFocus onChange={this.filterResults}/>
                    </div>
                </div>
                <SearchResults SearchList={searchList} onShelfChange={this.props.onShelfChange} />
            </div>
        )
    }
}

export default SearchBooks