const exp = require('constants');
const express = require('express')
const app = express()
const port = 3000
const path=require("path");
const { v4: uuidv4 } = require('uuid');
var methodOverride = require('method-override')

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static(path.join(__dirname,"public")));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));


app.get('/', (req, res) => {
  res.send('Hello World!')
})
let posts=[
    {
        username:"sandeep",
        content:"i love coding",
        id:uuidv4()

    },
    {
        username:"savitha",
        content:"i love coding tooo..",
        id:uuidv4()
        
    }
];
// get : /posts : home page of all posts ->quora.ejs
app.get('/posts', (req, res) => {
    res.render("quora.ejs",{posts});
  })
// create a  new post using [form]->new.ejs
  app.get('/posts/new', (req, res) => {
    res.render("new.ejs",{posts});
  })
// post : /post : to add new post 
  app.post('/posts', (req, res) => {
    let id= uuidv4();
    let {username, content}=req.body;
    posts.push({username,content,id});
    res.redirect("/posts")
  });
// get : /post:id  : to get 1 post  -> show.ejs
  app.get('/posts/:id', (req, res) => {
    let {id}=req.params;
    let post=posts.find((p) => id === p.id);
    res.render("show.ejs",{post})
  })

//  get : /posts/:id/edit : edit specific post  -> edit.ejs

  app.get('/posts/:id/edit', (req, res) => {
    let {id}=req.params;
    let post=posts.find((p) => id === p.id);
    res.render("edit.ejs",{post})
  })

 // patch: update the post and redirect to home page
  app.patch('/posts/:id', (req, res) => {
    let {id}=req.params;
    let post=posts.find((p) => id === p.id); 
    let newcontent=req.body.content;
    post.content=newcontent;
    console.log(post)
    res.redirect("/posts")
  });

  // delete : post/:id : delete specific post
  app.delete('/posts/:id',(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p) => id !== p.id); 
    res.redirect("/posts")
  });

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
}) 