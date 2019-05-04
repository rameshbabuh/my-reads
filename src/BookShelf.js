import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BookShelf extends Component{
    static propTypes = {
        bookInfo: PropTypes.array.isRequired
    }
    render(){
        const { bookInfo } = this.props;
        console.log(bookInfo);
        const currentlyReading = bookInfo.filter((book)=>{
            return book.shelf === 'currentlyReading';
        });
        const wantToRead = bookInfo.filter((book)=>{
            return book.shelf === 'wantToRead';
        });
        const read = bookInfo.filter((book)=>{
            return book.shelf === 'read';
        });
        console.log(currentlyReading);
        return(
            <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {currentlyReading.map( book => (
                                <li key={book.id}>
                                    <Book
                                        styles = {{
                                            width: 128,
                                            height: 193,
                                            backgroundImageURL: `url(${book.imageLinks.smallThumbnail})`
                                        }} 
                                        bookTitle = {book.title} 
                                        bookAuthors = {book.authors[0]}
                                    />
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                        {wantToRead.map( book => (
                            <li key={book.id}>
                                <Book
                                    styles = {{
                                        width: 128,
                                        height: 193,
                                        backgroundImageURL: `url(${book.imageLinks.smallThumbnail})`
                                    }} 
                                    bookTitle = {book.title} 
                                    bookAuthors = {book.authors[0]}
                                />
                            </li>
                        ))}
                    </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                        {read.map( book => (
                            <li key={book.id}>
                                <Book
                                    styles = {{
                                        width: 128,
                                        height: 193,
                                        backgroundImageURL: `url(${book.imageLinks.smallThumbnail})`
                                    }} 
                                    bookTitle = {book.title} 
                                    bookAuthors = {book.authors[0]}
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