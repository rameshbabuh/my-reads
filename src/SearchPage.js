import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchResults from './SearchResults'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component{
    static propTypes = {
        navigateToHome: PropTypes.func.isRequired
    }
    state = {
        searchList: []
    }
    filterResults = (e) => {
        var searchStr = (e.target.value).trim();
        if(searchStr !== ''){
            BooksAPI.search(searchStr).then((searchList)=>{
                if(!searchList.error){
                    this.setState(() => ({
                        searchList
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
    updateState = (searchListCopy) => {
        this.setState(()=>({
            searchList: searchListCopy
        }))
    }
    render(){
        const { currentShelf, navigateToHome } = this.props;
        const { searchList } = this.state;
        var searchListCopy = searchList;
        searchListCopy.length !== 0 && searchListCopy.map((searchedItem)=>{
            var commonItem = currentShelf.filter((currentShelfItem)=>(currentShelfItem.id === searchedItem.id))
            if(commonItem && commonItem.length){
                searchedItem.shelf = commonItem[0].shelf;
            }
            console.log(searchListCopy);
            return searchListCopy;
        })
        this.updateState(searchListCopy);
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={()=> {this.clearSearchList(); navigateToHome()}}>Close</button>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" autoFocus onChange={this.filterResults}/>

                    </div>
                </div>
                <SearchResults SearchList={this.state.searchList} onShelfChange={this.props.onShelfChange} />
            </div>
        )
    }
}

export default SearchBooks