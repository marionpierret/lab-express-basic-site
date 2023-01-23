const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
const port = 3002

//pour afficher le css
app.use(express.static(__dirname))

// route home
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html')
})

// route about
app.get('/about', (req, res)=> {
    res.sendFile(__dirname + '/views/about.html')
})

// route work
app.get('/works', (req, res)=>{
    res.sendFile(__dirname + '/views/works.html')
})

// route gallery
app.get('/gallery', (req, res) => {
    res.sendFile(__dirname + '/views/gallery.html')
})


app.listen(3002, () => {
    console.log(`welcome to my server running on port 3002`)
})