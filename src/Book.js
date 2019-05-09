import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component{
    static propTypes = {
        backgroundImageURL: PropTypes.string.isRequired,
        bookTitle: PropTypes.string.isRequired,
        bookAuthors: PropTypes.array.isRequired
    }
    render(){
        const { backgroundImageURL, bookTitle, bookAuthors, currentShelf } = this.props;
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${backgroundImageURL})` }}></div>
                    <BookShelfChanger currentShelf={currentShelf?currentShelf:'none'} onShelfChange = {this.props.onShelfChange} />
                </div>
                <div className="book-title">{bookTitle}</div>
                <div className="book-authors">{bookAuthors.join(", ")}</div>
            </div>
        )
    }
}

export default Book