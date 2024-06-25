http = require('http')
url = require('url')
pt = require('querystring')

let user="a";
let em="b";
let ps="d";

function onRequest(request,response)
{
    var path=url.parse(request.url).pathname;
    console.log("Request for "+path+" recieved");
    var query=url.parse(request.url).query;

    var username=pt.parse(query)["username"];
    user=username;

    var email=pt.parse(query)["email"];
    em=email;
   
    var msg=pt.parse(query)["psw"];
    ps=msg;

    response.write("Hello!! " +username+ ", your email is " +email+ " \n your password is " +msg );
    response.end();
    
    insertdata();
}
http.createServer(onRequest).listen(6666);
console.log("Server is running now....");


const mongoose =require("mongoose")
const urla = "mongodb://localhost:27017/local";
const name1 = new mongoose.Schema({ name: String, email: String, password: String});
const Name= mongoose.model('Name',name1)

const db = async() =>{
    try{    
    console.log("entered")    
    const data=await mongoose.connect(urla,    
    {    
        useNewUrlParser: true,    
        useUnifiedTopology: true,    
        family: 4,    
    }
    )
    console.log("connected")
    }    
    catch(err){    
    console.log(err)    
    }    
}
db()
    


    const insertdata=async()=>{
        const cat = new Name({ name: user, email: em, password: ps});        
        cat.save().then(() => console.log('Saved in db'));        
        }