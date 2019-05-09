import React, { Component } from 'react'
import Book from './Book'

class SearchResults extends Component{
    render(){
        const { SearchList } = this.props;
        return(
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        SearchList && SearchList.length !== 0 && SearchList.map((book)=>(
                            <li key={book.id}>
                                <Book
                                    backgroundImageURL = {book.imageLinks?(book.imageLinks.smallThumbnail):''} 
                                    bookTitle = {book.title} 
                                    bookAuthors = {book.authors?book.authors:[]}
                                    onShelfChange = {(newShelf) =>{ this.props.onShelfChange(book, newShelf) }}
                                    currentShelf = {book.shelf}
                                />
                            </li>
                        ))
                    }
                </ol>
            </div>
        )
    }
}

export default SearchResults