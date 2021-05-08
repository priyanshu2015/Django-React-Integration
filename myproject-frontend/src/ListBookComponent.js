import React, { useEffect, useState } from 'react'
import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'x-csrftoken'

//axios.defaults.baseURL = 'http://127.0.0.2:8000/';
function ListBookComponent() {
    const [bookList, setBookList] = useState([]);
    useEffect(() => {
        setCSRF();
        login();
        fetchData();
    }, []);

    const setCSRF = async () => {
        let csrfURL = "http://127.0.0.1:8000/api/setcsrf/";
        const response = await axios.get(csrfURL);
    }


    const login = async () => {
        let loginURL = "http://127.0.0.1:8000/api/login/";
        const response = await axios.post(loginURL, { 
            "username": "priyanshugupta", "password": "1234" });
        }

    const apiURL = "http://127.0.0.1:8000/api/listbooks/";
    const fetchData = async () => {
        const response = await axios.get(apiURL,
            {'withCredentials': true });
        console.log(response)
        setBookList(response.data);
        console.log(bookList);
        console.log(response.data);
    }
    return (
        <div className="main-section">
            <h1>All Books</h1>
            <div className="book-list">
                {bookList.map((book, index) => (
                    <ul>
                        <li>Book: {book.name}</li>
                        <li>Author: {book.author}</li>
                    </ul>
                ))}
            </div>
        </div>
    );
}
export default ListBookComponent;






    //document.cookie = "sessionid=56dq69nm9zw1whvitra80ymuqxvuta36"; //expires=Thu, 19 May 2021 12:00:00 UTC";
    
    


    //import Cookies from 'js-cookie';
// axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
// axios.defaults.xsrfCookieName = "XCSRF-TOKEN";
// axios.defaults.withCredentials = true;