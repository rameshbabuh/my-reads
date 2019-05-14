import React from 'react'

function PageNotFound(props){
    const { navigateToHome } = props;
    return(
        <div>
            <div className="search-books-bar">
                <button className="close-search" onClick={navigateToHome}>Home</button>
                <p class="go-home-label">Go Back Home</p>
            </div>
            <div className="page-not-found">
                Page Not Found
            </div>
        </div>
    )
}

export default PageNotFound