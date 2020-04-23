const express = require('express')
const config = require('config')
const mongoose = require('mongoose')

const PORT = config.get('port') || 5000;

const app = express();

async function expressStart () { 
    try  { 
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology : true,
            useCreateIndex : true,
        })
    }

    catch(e) { 
        console.log('Server Error:', e.message)
        process.exit(1)
    }
}
expressStart();
app.listen(PORT, () => { console.log('server started!'); })