const express = require('express')
const app = express()
const port = 3000

const todos =[
    {
        id:"1",
        title: 'todo 1',
        desc: 'This is my first todo',
        completed: true,
    },
    {
        title: 'todo 2',
        desc: 'This is my second todo',
        completed: true,
    },
    {
        title: 'todo 3',
        desc: 'This is my third todo',
        completed: true,
    },
    {
        title: 'todo 4',
        desc: 'This is my fourth todo',
        completed: true,
    },
    {
        title: 'todo 5',
        desc: 'This is my fifth todo',
        completed: true,
    },
];


app.get('/',(req,res)=>{
    res.status(200).json(todos);
});

app.get('/todos',(req,res)=>{
    res.status(200).json(todos);
});

app.get('/todos/:id',(req,res)=>{
    res.status(200)
    .json({ data: todos.find((todo)=> todo.id ===req.params.id)});
});

app.post('/todos',(req,res)=>{
    todos.push(req.body);
    res.status(201).json({msg: 'todo created successfully'});
});

app.get('/todos/:id/delete',(req,res)=>{
    for(let i=0;i<todos.length;i++){
        if (todos[i].id===req.params.id)
        {
            todos.splice(i,1);
            return res.send('successfully deleted');
            
        }
    }
    res.send('not deleted')
})

app.listen(port, ()=>{
    console.log(`we are using :${port}`)
})