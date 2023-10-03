const express=require("express")
const path=require("path")
const productRouter=express.Router()

const products=[]

productRouter.get("/", (req,res)=>{
    res.render('addProduct')
})

productRouter.post("/product",(req,res)=>{
    console.log(req.body)
    products.push({title:req.body.title})
    res.redirect("/")
})



module.exports={
    productRouter,products
}