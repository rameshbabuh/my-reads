import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BookShelf extends Component{
    static propTypes = {
        shelfData: PropTypes.array.isRequired,
        shelfTitle: PropTypes.string.isRequired
    }
    render(){
        const { shelfData, shelfTitle } = this.props;
        return(
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{shelfTitle}</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {shelfData.map( book => (
                                <li key={book.id}>
                                    <Book
                                        backgroundImageURL = {book.imageLinks.smallThumbnail}
                                        bookTitle = {book.title} 
                                        bookAuthors = {book.authors}
                                        currentShelf = {book.shelf}
                                        onShelfChange = {(newShelf) =>{ this.props.onShelfChange(book, newShelf) }}
                                    />
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookShelf