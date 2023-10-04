const express=require("express")
const path=require("path")
const { products } = require("./productRoute")
const shopRouter=express.Router()

shopRouter.get("/",(req,res)=>{
    console.log(products)
    res.render("shop", {prods : products, path:'/shop'})
})


module.exports={
    shopRouter
}