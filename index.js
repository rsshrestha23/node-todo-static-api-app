const express = require('express');
const cors = require('cors');



const app = express();

//middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }))


//cors setup
const corsOptions = {
    origin: "*"
}

app.use(cors(corsOptions))



const PORT = 3005


let todos = [
    {
        id: 1,
        title: "Learn React",
        completed: true
    },
    {
        id: 2,
        title: "Learn Node.js",
        completed: false
    },
    {
        id: 3,
        title: "Learn Express.js",
        completed: false
    },
    {
        id: 4,
        title: "Learn MongoDB",
        completed: false
    }
]





app.get('/', (req, res) => {
    res.send('Todo App API v1.0.0')
})



/**
 * @API Stucture
 * @API Versioning
 */
app.get('/api/v1/todos', (req, res) => {
    res.json(todos);
})


//added today (april 23, 2025)
app.get('/api/v1/todo/:id', (req, res) => {
    let { id } = req.params;
    let _getTodoListById = todos.find(x => x.id === parseInt(id))
    res.json(_getTodoListById)
})


app.delete('/api/v1/todo/:id', (req, res) => {
    let { id } = req.params;
    let _filterbyidToRemoveFromList = todos.filter(x => x.id !== parseInt(id))

    res.json(_filterbyidToRemoveFromList)

})

//added today (april 23, 2025)


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})




//receipe app pdf ()
// api completion -> post, patch (tomorrow)