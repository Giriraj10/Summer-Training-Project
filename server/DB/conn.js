const mongoose = require('mongoose');
const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false
}).then(() => {
    console.log('Connected Successfully To MongoDB');
}).catch((err)=> console.log('not connected'));