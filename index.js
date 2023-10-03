const express=require("express")
const bodyParser=require("body-parser");
const { productRouter } = require("./routes/productRoute");
const path=require("path");
const { shopRouter } = require("./routes/shopRoute");


const app=express();
app.set('view engine','pug');
app.set('views', 'pages');

app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))

 app.use("/addProduct", productRouter)
 app.use("/shop", shopRouter )

//response for home route
 app.use("/",(req,res)=>{
    res.render('home')
})

app.use((req,res)=>{
    res.sendFile(path.join(__dirname,"pages/404.html"))
})



app.listen(8055,()=>{
    console.log("server running...");
})