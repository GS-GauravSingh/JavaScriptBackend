import express from "express"
import cors from "cors"

const app = express();

// If the environment variable file exists, then it will take the PORT value from the environment variable file, otherwise, the hard codded value i.e., 3000 will be taken.
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Server is ready')
})

// Get a List of 5 Jokes.
app.get('/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "A joke",
            content: "This is a joke"
        },
        {
            id: 2,
            title: "Another joke",
            content: "This is another joke"
        },
        {
            id: 3,
            title: "A third joke",
            content: "This is a third joke"
        },
        {
            id: 4,
            title: "A fourth joke",
            content: "This is a fourth joke"
        },
        {
            id: 5,
            title: "A fifth joke",
            content: "This is a fifth joke"
        },
    ];

    res.json(jokes);
})

// A Good Practice to provide route to serve API data.
app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "A joke",
            content: "This is a joke"
        },
        {
            id: 2,
            title: "Another joke",
            content: "This is another joke"
        },
        {
            id: 3,
            title: "A third joke",
            content: "This is a third joke"
        },
        {
            id: 4,
            title: "A fourth joke",
            content: "This is a fourth joke"
        },
        {
            id: 5,
            title: "A fifth joke",
            content: "This is a fifth joke"
        },
    ];

    res.json(jokes);
})


// CORS
app.use(
    cors({
        origin: "http://localhost:5173"
    })
)

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
})
