import express from "express";
import fetch from 'node-fetch';
const router = express.Router();

router.get('/todo', (req, res) => {

let url = "https://jsonplaceholder.typicode.com/todos";

let settings = { method: "Get"};

fetch(url, settings)
    .then(res => res.json())
    .then((json) => {

        // do something with JSON
        json.map((obj) => {
            delete obj.completed;
        })

        res.send(json)
    })

})

router.get('/user/:id', (req, res) => {

    let todoUrl = "https://jsonplaceholder.typicode.com/todos";

    let userUrl = `https://jsonplaceholder.typicode.com/users/${id}`
    
    let settings = { method: "Get" };
    
    fetch(userUrl, settings)
        .then(res => res.json())
        .then((data => {

            data.todos = [];
            delete data.company;
            delete data.address;
            delete data.username;
            delete data.website;


            fetch(todoUrl, settings)
            .then(res => res.json())
            .then((json) => {
                    data.todos.push(json.filter(obj => obj.userId == id));           
                res.send(data)
            })
    }))
    

})

export default router;