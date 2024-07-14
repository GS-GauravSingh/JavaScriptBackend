import React, { useEffect, useState } from 'react'
import axios from "axios"

function App() {

    const [jokes, setJokes] = useState([]);

    // Let's fetch data for our own backend using fetch.
    // useEffect(() => {

    //     fetch("http://localhost:3000/api/jokes")
    //     .then((res) => res.json())
    //     .then((data) => setJokes(data))
    // }, [])

    // Let's fetch data for our own backend using Axios.
    // useEffect(() => {
    //     axios.get("http://localhost:3000/api/jokes")
    //     .then((res) => setJokes(res.data))
    // }, [])

    // Proxy Example
    useEffect(() => {
        axios.get("/api/jokes") // Notice the URL starts with "/api"
        .then((res) => setJokes(res.data))
    }, [])

    return (
        <>
            <h1>Full Stack</h1>
            <p>JOKES: {jokes.length}</p>
            {
                jokes.map((joke) => (
                    <div key={joke.id}>
                        <h3>{joke.title}</h3>
                        <p>{joke.content}</p>
                    </div>
                ))
            }
        </>
    )
}

export default App