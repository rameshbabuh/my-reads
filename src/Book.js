import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookShelfChanger from './BookShelfChanger'

class Book extends Component{
    static propTypes = {
        styles: PropTypes.object.isRequired,
        bookTitle: PropTypes.string.isRequired,
        bookAuthors: PropTypes.string.isRequired,
        currentShelf: PropTypes.string.isRequired
    }
    render(){
        const { styles, bookTitle, bookAuthors, currentShelf } = this.props;
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: styles.backgroundImageURL }}></div>
                    <BookShelfChanger currentShelf={currentShelf} onShelfChange = {this.props.onShelfChange} />
                </div>
                <div className="book-title">{bookTitle}</div>
                <div className="book-authors">{bookAuthors}</div>
            </div>
        )
    }
}

export default Book