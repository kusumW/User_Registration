
const express =require('express');
const app = express();
const router =require ( './src/routes/web.js');
const path = require('path');
const PORT=8081;
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/src/views'))
app.use('/', router);
app.use(express.static(path.join(__dirname , '/public')));
app.listen(PORT, () => {
 console.log(`App listening at port ${PORT}`)
 })