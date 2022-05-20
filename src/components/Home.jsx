import React, { useState } from "react";
import img from '../images/pngegg.png';
import Card from "./Card";
import axios from "axios";

export default function Home() {

    const [search, setSearch] = useState('');
    const [bookData, setData] = useState([]);

    function searchBook(e) {
        if (e.key === "Enter") {
            axios.get(`https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBlLE3VO7-9U3oGh-xTHTbU60YYLA7kf8A&maxResults=40`)
                .then(res => setData(res.data.items))
                .catch(error => console.log(error))
        }
    }


    return (
        <>
            <div className="header">
                <div className="row1">
                    <h1>A room without books is like<br /> a body without a soul.</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter your book name..."
                            value={search} onChange={e => setSearch(e.target.value)}
                            onKeyPress={searchBook} />
                        <button><i class="fa-solid fa-paper-plane-top"></i></button>
                    </div>
                    <img src={img} alt="children reading" />
                </div>
            </div>
            <div className="container">
                {
                    bookData !== undefined ?
                        <Card book={bookData} /> :
                        (
                            <>
                                <br /><br /><br /><br />
                                <h3>Book not found</h3>
                            </>
                        )
                }
                <br />
            </div>
        </>
    )
}