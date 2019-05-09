import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './ListBooks'
import SearchPage from './SearchPage'
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
    updateShelfChange = (newBookItem, newShelf) => {
        BooksAPI.update(newBookItem, newShelf).then(() => {
            newBookItem.shelf = newShelf;
            this.setState(currentState => ({
                bookInfo: currentState.bookInfo.filter((oldBookItem) => (newBookItem.id !== oldBookItem.id)).concat([newBookItem])
            }))
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
                      <SearchPage
                        currentShelf = {this.state.bookInfo}
                        navigateToHome = {()=>{history.push("/")}}
                        onShelfChange = {(book, newShelf) => {
                            this.updateShelfChange(book, newShelf);
                        }}
                      />
                    )}
                />
            </div>
        )
    }
}

export default BooksApp
