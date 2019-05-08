import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
    state = {
        bookInfo: []
    }
    componentDidMount() {
        BooksAPI.getAll().then((bookInfo) => {
            this.setState(() => ({
                bookInfo
            }))
        })
    }
    updateShelfChange = (book, newShelf) => {
        BooksAPI.update(book, newShelf).then(() => {
            this.setState(currentState => {
                currentState.bookInfo.forEach((item) => {
                    if(item.id === book.id){
                        item.shelf = newShelf;
                    }
                })
                return {bookInfo: currentState.bookInfo}
            })
        })
    }
    render() {
        return (
            <div className="app">
                <Route 
                    exact 
                    path="/" 
                    render={({history})=>(
                        <ListBooks
                            bookInfo = { this.state.bookInfo }
                            navigateToSearch = { () => { history.push("/search") }} 
                            onShelfChange = {(book, newShelf) => {
                                this.updateShelfChange(book, newShelf);
                            }}
                        />
                    )}
                />
                <Route 
                    path="/search" 
                    render={({history}) => (
                      <SearchBooks
                        navigateToHome = {()=>{history.push("/")}}
                      />
                    )}
                />
            </div>
        )
    }
}

export default BooksApp
