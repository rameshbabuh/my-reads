import React, { Component } from 'react'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

class ListBooks extends Component{
    static propTypes = {
        bookInfo: PropTypes.array.isRequired
    }
    render(){
        const { bookInfo } = this.props;
        return(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <BookShelf bookInfo = { bookInfo }/>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )
    }
}

export default ListBooks