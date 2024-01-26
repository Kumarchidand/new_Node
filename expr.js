// server
const express = require("express");
const app = express();
const db = require("./db");// export db


const bodyParser = require("body-parser");
app.use(bodyParser.json()); // req.body
const Person = require("./models/Person"); // yaha pe Person name ka models ko export kiya gya he
const MenuItem = require("./models/menu");
// ./mtlbb folder ke ader me he / file name ,,mtlb us file me he

app.get("/", function (req, res) {
  res.send("welcome to my hotel how i help you");
});
// yaha pe get ek method he jis ke through hum apna kam excute karenge .us ke ander / use hua he ,koi vi address ke bad  forward / use hua to data milega next is function (request,respond) after that what is respond to server
// create another menu
// app.get('/chicken',(req,res)=>{
//   res.send("i would like to order chicken curry");
// })
// app.get('/idili',(req,res)=>{
//   var customized_idli={
//     name:'rave idli',
//     size:'10cm diameter',
//     is_sambhar:true,
//     is_chatni:false,
//   }
//   res.send(customized_idli)
//   // res.send("is there available of any south-indian item ")
// })
// app.post('/items',(req,res)=>{
//   res.send("data is saved");
// })

// post route to add a person  ,POST MEANS SAVE DATA
app.post("/person", async (req, res) => {
  try {
    const data = req.body; // assume the req.body contains person data
    //  create a new Person doc using Mongoose model
    const newPerson = new Person(data);
    // save the new person to the database
    const response = await newPerson.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

// app.post('/menu', async (req, res) => {
//   try {
//   const menuItemData = req.body; // Assuming the request
//   // body contains menu item data
//   // Create a new menu item using the Mongoose model
//   const menuItem = new MenuItem(menuItemData);
//   // Save the new menu item to the database
//   const menu_data = await menuItem.save();
//   console.log('Menu item saved');
//   res.status(201).json(menu_data);
//   } catch (error) {
//   console.error('Error creating menu item:', error);
//   res.status(500).json({ error: 'Internal server error' });
//   }
//   });
  app.get('/person/:workType',async(req,res)=>{

  try{
    const workType=req.params.workType;// extract the work type from the URL
    if(workType=='chef'||workType=='manager'||workType=='waiter'){
    const response=await Person.find({work:workType});
    console.log('response fetched');
    res.status(200).json(response);
    }
    {
      res.status(404).json({error:'Invalid work type'});
    }
  }
  catch(err){
    {
      console.log(err);
      res.status(500).json({ error: "internal server error" });
    }
  }
    


  })

app.listen(3000, () => {
  console.log(`listing on port 3000`);
}); // it refers that at 3000 address our server activrly running
