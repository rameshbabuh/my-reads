# MyReads Project

MyReads project helps the user to create a bookshelf app that allows to select and categorize books that have been read, currently reading and want to read. It also lets the user search for books using keywords and add them to any section of the bookshelf. The changes and additions are persisted as the user interacts with the application.

## Quick Start

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

You can also access the app using this link: [My-Reads-App](http://direful-gun.surge.sh/)

## Directory structure
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── BookShelf.js
    ├── BookShelfChanger.js
    ├── ListBooks.js
    ├── SearchPage.js
    ├── SearchResults.js
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## About Search terms
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Screenshots

![image](/src/screenshots/MyReads-BookShelf.png?raw=true "MyReads-BookShelf")

![image](/src/screenshots/MyReads-Search.png?raw=true "MyReads-Search")

## License

MIT