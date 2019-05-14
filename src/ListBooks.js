import React from 'react'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

function ListBooks(props){
    ListBooks.propTypes = {
        bookInfo: PropTypes.array.isRequired,
        navigateToSearch: PropTypes.func.isRequired
    }
    const { bookInfo, navigateToSearch } = props;
    const currentlyReading = bookInfo.filter((book) => {
        return book.shelf === 'currentlyReading';
    });
    const wantToRead = bookInfo.filter((book) => {
        return book.shelf === 'wantToRead';
    });
    const read = bookInfo.filter((book) => {
        return book.shelf === 'read';
    });
    return (
        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf shelfData={ currentlyReading } shelfTitle="Currently Reading" onShelfChange = {props.onShelfChange} />
                <BookShelf shelfData={ wantToRead } shelfTitle="Want to Read" onShelfChange = {props.onShelfChange} />
                <BookShelf shelfData={ read } shelfTitle="Read" onShelfChange = {props.onShelfChange} />
            </div>
            <div className="open-search">
                <button onClick={()=> navigateToSearch()}>Add a book</button>
            </div>
        </div>
    )
}

export default ListBooks