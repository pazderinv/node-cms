const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.use(express.static(__dirname + '/public'));
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))
app.listen(3000)



app.get('/', (request, response) => {
    response.render('home', {
        name: 'John'
    })
})

app.get('/cpanel/addcat', (request, response) => {
    response.render('add_cat', {
        name: 'John'
    })
})

app.get('/cpanel/addpost', (request, response) => {

    response.render('add_post', {
        name: 'John'
    })
})