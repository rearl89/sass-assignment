import React from "react";
import "../styles/MainPage.css"

export default function MainPage() {
    return (
        <div className="mainPage">
            <h1>Welcome to the site</h1>
            <button className="mainBtn">Click Here</button>
            <div className="otherLinks">
                <a href="/movies">Movies</a>
                <a href="/music">Music</a>
                <a href="/books">Books</a>
            </div>
        </div>
    )
}