http = require('http')
url = require('url')
qs = require('querystring')


let dem="c";
let name="g";
function onRequest(request,response)
{
    var path=url.parse(request.url).pathname;
    console.log("Request for "+path+" recieved");
    var query=url.parse(request.url).query;
    var email=qs.parse(query)["email"];
    dem=email;
    var ps=qs.parse(query)["psw"];
    name=ps;
   // response.write("Hello "+name+" "+lname+"\n"+"Your email: "+email+"\n"+"Mobile number: "+phno+"\n"+"Gender: "+gend+"\n");
    response.write(" your appointment has been cancelled successfully\n"+"With email:"+email)
    response.end();
    
    //insertdata();
    deletedata()
}
http.createServer(onRequest).listen(5555);
console.log("Server is running now....");
const mongoose =require("mongoose")
const urla = "mongodb://localhost:27017/local";
const name1 = new mongoose.Schema({ name: String, email: String, patid: String, password: String });

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
const deletedata=async() => {

    await Name.deleteMany({email:dem});
    
    }