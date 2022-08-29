// Dependecies
const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const bodyparser = require("body-parser");
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set("view engine" , "ejs");
mongoose.connect("mongodb+srv://admin-RahulKandaswamy:Test123@cluster0.w9ew7ye.mongodb.net/cookingDB");
// Category
const categorySchema = new mongoose.Schema({
    name:{
        type:String,
    },
    img:{
        type:String,
    }
})
const categoryModel = mongoose.model("category",categorySchema);
const recipe1 = new categoryModel({
    name:"Indian",
    img:"indian-food.jpg",
})
const recipe2 = new categoryModel({
    name:"American",
    img:"american-food.jpg",
})
const recipe3 = new categoryModel({
    name:"Thai",
    img:"thai-food.webp",
})
const recipe4 = new categoryModel({
    name:"Mexican",
    img:"mexican-food.webp",
})
const recipe5 = new categoryModel({
    name:"Chinese",
    img:"chinese-food.jpeg",
})
const recipe6 = new categoryModel({
    name:"Spanish",
    img:"Spanish-food.jpg",
})
// categoryModel.insertMany([recipe1,recipe2,recipe3,recipe4,recipe5,recipe6]);


// lastest-recipe
const lastest_recipeSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true,
    },
    des:{
        type : String,
    },
    ingredient : {
        type:[String],
        required : true,
    },
    Author : {
        type:String,
        required : true,
    },
    email : {
        type:String,
        required : true,
    },
    img:{
        type:String,
    },
    category:{
        type:String,
    }

});
const lastest_recipemodel = mongoose.model("Latest_recipe", lastest_recipeSchema);

const lastest_recipe1 = new lastest_recipemodel({
    name:"Daniel's Sweet and sour chicken",
    des:"",
    ingredient:["1 pound boneless, skinless chicken thighs or breasts, cut into 1-inch chunks",
                    "1 large egg white",
                    "1/2 teaspoon kosher salt or 1/4 teaspoon table salt",
                    "2 teaspoons cornstarch",
                    "1 (10-ounce) can pineapple chunks, drained, juice reserved",
                    "1/4 cup juice from the canned pineapple",
                    "1/4 cup white vinegar",
                    "1/4 cup ketchup",
                    "1/2 teaspoon kosher salt or 1/4 teaspoon table salt",
                    "2 to 3 tablespoons brown sugar",
                    "4 teaspoons cooking oil",
                    "1 red bell pepper, cut into 1-inch chunks",
                    "1 yellow bell pepper, cut into 1-inch chunks",
                    "1 teaspoon grated fresh ginger"],
    Author:"Daniel",
    email:"dani@123",
    img:"sweet-and-sour-chicken.jpg",
    category: "Thai"

})
const lastest_recipe2 = new lastest_recipemodel({
    name:"Pinch Salad",
    des:"",
    ingredient:["1 pound boneless, skinless chicken thighs or breasts, cut into 1-inch chunks",
                    "1 large egg white",
                    "1/2 teaspoon kosher salt or 1/4 teaspoon table salt",
                    "2 teaspoons cornstarch",
                    "1 (10-ounce) can pineapple chunks, drained, juice reserved",
                    "1/4 cup juice from the canned pineapple",
                    "1/4 cup white vinegar",
                    "1/4 cup ketchup",
                    "1/2 teaspoon kosher salt or 1/4 teaspoon table salt",
                    "2 to 3 tablespoons brown sugar",
                    "4 teaspoons cooking oil",
                    "1 red bell pepper, cut into 1-inch chunks",
                    "1 yellow bell pepper, cut into 1-inch chunks",
                    "1 teaspoon grated fresh ginger"],
    Author:"Daniel",
    email:"dani@123",
    img:"pinch-salad.jpg",
    category: "American"

})
const lastest_recipe3 = new lastest_recipemodel({
    name:"Spring Roll",
    des:"",
    ingredient:["1 pound boneless, skinless chicken thighs or breasts, cut into 1-inch chunks",
                    "1 large egg white",
                    "1/2 teaspoon kosher salt or 1/4 teaspoon table salt",
                    "2 teaspoons cornstarch",
                    "1 (10-ounce) can pineapple chunks, drained, juice reserved",
                    "1/4 cup juice from the canned pineapple",
                    "1/4 cup white vinegar",
                    "1/4 cup ketchup",
                    "1/2 teaspoon kosher salt or 1/4 teaspoon table salt",
                    "2 to 3 tablespoons brown sugar",
                    "4 teaspoons cooking oil",
                    "1 red bell pepper, cut into 1-inch chunks",
                    "1 yellow bell pepper, cut into 1-inch chunks",
                    "1 teaspoon grated fresh ginger"],
    Author:"Daniel",
    email:"dani@123",
    img:"Spring-Roll.jpg",
    category: "Mexican"

})
const lastest_recipe4 = new lastest_recipemodel({
    name:"Fried Veg",
    des:"",
    ingredient:["1 pound boneless, skinless chicken thighs or breasts, cut into 1-inch chunks",
                    "1 large egg white",
                    "1/2 teaspoon kosher salt or 1/4 teaspoon table salt",
                    "2 teaspoons cornstarch",
                    "1 (10-ounce) can pineapple chunks, drained, juice reserved",
                    "1/4 cup juice from the canned pineapple",
                    "1/4 cup white vinegar",
                    "1/4 cup ketchup",
                    "1/2 teaspoon kosher salt or 1/4 teaspoon table salt",
                    "2 to 3 tablespoons brown sugar",
                    "4 teaspoons cooking oil",
                    "1 red bell pepper, cut into 1-inch chunks",
                    "1 yellow bell pepper, cut into 1-inch chunks",
                    "1 teaspoon grated fresh ginger"],
    Author:"Daniel",
    email:"dani@123",
    img:"fried-veg.jpg",
    category:"Chinese"


})
const lastest_recipe5 = new lastest_recipemodel({
    name:"Chocolate Cake",
    des:"",
    ingredient:["1 pound boneless, skinless chicken thighs or breasts, cut into 1-inch chunks",
                    "1 large egg white",
                    "1/2 teaspoon kosher salt or 1/4 teaspoon table salt",
                    "2 teaspoons cornstarch",
                    "1 (10-ounce) can pineapple chunks, drained, juice reserved",
                    "1/4 cup juice from the canned pineapple",
                    "1/4 cup white vinegar",
                    "1/4 cup ketchup",
                    "1/2 teaspoon kosher salt or 1/4 teaspoon table salt",
                    "2 to 3 tablespoons brown sugar",
                    "4 teaspoons cooking oil",
                    "1 red bell pepper, cut into 1-inch chunks",
                    "1 yellow bell pepper, cut into 1-inch chunks",
                    "1 teaspoon grated fresh ginger"],
    Author:"Daniel",
    email:"dani@123",
    img:"chocolate_cake.jpg",
    category:"Indian",

})
// lastest_recipemodel.insertMany([lastest_recipe1,lastest_recipe2,lastest_recipe3,lastest_recipe4,lastest_recipe5]);
// homepage
app.get("/",async function(req,res)
{
    const items = await categoryModel.find({}).limit(5);
    const latest_items = await lastest_recipemodel.find({}).limit(5);
    res.render("index",{
        title:"Home Page",
        categories_t :items,
        latest : latest_items,
    });
   
   
    

});
app.post("/",async (req,res)=>
{
    let devalue= req.body.RecipeName;
    lastest_recipemodel.findByIdAndDelete(devalue,function(err)
    {
        if(!err)
        {
            console.log("deleted");
        }
    });
    res.redirect("/");
    

})

// categories
app.get("/categories",function(req,res)
{   
    categoryModel.find(function(err,categoryitems)
    {
        if(err){
            console.log(err);
        }
        else{
                res.render("categories",{
                title : "Categories",
                img_src :categoryitems,
                name_title : categoryitems,
            });
          }  
    });

});


// lastest
app.get("/latest/:recipeOf",function(req,res)
{
    let par=req.params.recipeOf;
    lastest_recipemodel.findOne({name : par},function(err,found)
    {
        if(err)
        {
            console.log("not found");
        }
        else{
            res.render("latest",{
                id:found._id,
                title : found.name ,
                item_name:found.name,
                image:found.img,
                ingredient : found.ingredient,
                author:found.Author,
                email_author:found.email,
            })
        }
    })

    
})
// category/:topic

app.get("/categories/:c_item",async function(req,res)
{
    const category_c = req.params.c_item;
    const found_c = await lastest_recipemodel.find({category : category_c});
    
    res.render("categoryitems",{
        title : found_c.category,
        c_items: found_c,
        heading : found_c.category,
    })
})
app.get("/categories/:c_cont/:c_items",async (req,res) =>{
    c_items_de = req.params.c_items;
    lastest_recipemodel.findOne({name : c_items_de},function(err,found)
    {
        if(err)
        {
            console.log("notFound");
        }
        else{
            res.render("latest",{
                title : found.name ,
                item_name:found.name,
                image:found.img,
                ingredient : found.ingredient,
                author:found.Author,
                email_author:found.email,
            })
        }
    }) 
})

app.get("/random-recipe",async (req,res)=>{
    lastest_recipemodel.find((err,findall)=>{
        if(err){
            console.log(err);
        }
        else{
            const length = findall.length;
            const random = Math.floor((Math.random()*length)+1);
            
            res.render("latest",{
                id:findall[random]._id,
                title : findall[random].name ,
                item_name:findall[random].name,
                image:findall[random].img,
                ingredient : findall[random].ingredient,
                author:findall[random].Author,
                email_author:findall[random].email,
            })
        }
    })
    
})
let items=[];
app.get("/submit-recipe",(req,res)=>{
    
   
        res.render("submit-form",{
            title:"submit-form",
            Items : items,
        });
   
    

});
app.post("/submit-form",(req,res)=>{
    let item = req.body.recipe_items;
    items.push(item);
    res.redirect("/submit-recipe");
    
    
    
    
    
})
let nameofRecipeEdit;
let updateid;
let ingredientarry=[];
app.post("/submit",async (req,res)=>
{
    let btnvalue = req.body.submit;
    if(btnvalue === "Success")
    {
        let item_Name =req.body.item_name;
        let author = req.body.Author;
        let e = req.body.email;
        let d = req.body.des;
        let c =req.body.category;
        
        const Latest_recipe = new lastest_recipemodel({
        name:item_Name,
        des:d,
        ingredient:items,
        Author:author,
        email:e,
        img:"",
        category:c,
    
        });
        Latest_recipe.save();
        items=[];
        res.redirect("/");
    }
    else if(btnvalue==="cancel"){
        items=[];
        res.redirect("/");
    }
    else if(btnvalue==="Success_update")
    {
        let item_Name =req.body.item_name;
        let author = req.body.Author;
        let e = req.body.email;
        let d = req.body.des;
        let c =req.body.category;
        lastest_recipemodel.findByIdAndUpdate(updateid,{
            name:item_Name,
            des:d,
            ingredient:ingredientarry,
            Author:author,
            email:e,
            img:"",
            category:c,
        },function(err,updated){
            if(err){
                console.log(err);
            }
            else{
                res.redirect("/");
            }
        })

    }
    
})

app.get("/latestItems",async (req,res)=>{
    const latestall = await lastest_recipemodel.find({});
    res.render("latest_items",{
        title : "latest",
        latest : latestall,
    })
})

app.get("/editRecipe/:recipename" , async (req,res)=>
{
    
     nameofRecipeEdit = req.params.recipename;
    
        const editItem = await lastest_recipemodel.findOne({name:nameofRecipeEdit});
        updateid = editItem._id;
        ingredientarry = editItem.ingredient;
        console.log(ingredientarry.length);
    res.render("edit_recipe",{
        title : editItem.name,
        Items:ingredientarry,
        item_name:editItem.name,
        Author:editItem.Author,
        email:editItem.email,
        des:editItem.des,
        category:editItem.category,
    })
    

})
app.post("/edit_recipe_ingredient",async (req,res) => {
    let updateitem = req.body.recipe_items;
    ingredientarry.push(updateitem);
    
    res.render("edit_recipe",{

    })
    
    
});



// Server
app.listen(3000,function(){
    console.log("up and on the port 3000");
})
