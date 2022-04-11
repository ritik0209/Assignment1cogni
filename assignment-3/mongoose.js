const mongoose = require('mongoose')
const validator = require('validator')

//connecting to azure cosmosDB
var url =
"mongodb://cosmoskratos:eqlEFQpslUpb8emhkOrPnMuT6L0QVIZpTGlNTnJbNkdLG9RPXHuLYIX3G3YOMAQMzYixltkWVsimZQN3MwHKww==@cosmoskratos.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@cosmoskratos@"
mongoose.connect(url,{
    //useNewUrlParser:true,
    //useCreateindex :true 
})



