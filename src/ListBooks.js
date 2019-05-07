import React, { Component } from 'react'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

class ListBooks extends Component {
    static propTypes = {
        bookInfo: PropTypes.array.isRequired,
        navigateToSearch: PropTypes.func.isRequired
    }
    render() {
        const { bookInfo, navigateToSearch } = this.props;
        const currentlyReading = bookInfo.filter((book) => {
            return book.shelf === 'currentlyReading';
        });
        const wantToRead = bookInfo.filter((book) => {
            return book.shelf === 'wantToRead';
        });
        const read = bookInfo.filter((book) => {
            return book.shelf === 'read';
        });
        console.log(bookInfo);
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <BookShelf shelfData={ currentlyReading } shelfTitle="Currently Reading" />
                    <BookShelf shelfData={ wantToRead } shelfTitle="Want to Read" />
                    <BookShelf shelfData={ read } shelfTitle="Read" />
                </div>
                <div className="open-search">
                    <button onClick={()=> navigateToSearch()}>Add a book</button>
                </div>
            </div>
        )
    }
}

export default ListBooks