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
                console.log(searchList);
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
    render(){
        const { navigateToHome } = this.props;
        const { searchList } = this.state;
        return(
            <div className="search-books">
                <div className="search-books-bar">
                    <button className="close-search" onClick={()=> {this.clearSearchList(); navigateToHome()}}>Close</button>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" placeholder="Search by title or author" autoFocus onChange={this.filterResults}/>

                    </div>
                </div>
                <SearchResults SearchList={searchList} onShelfChange={this.props.onShelfChange} />
            </div>
        )
    }
}

export default SearchBooks