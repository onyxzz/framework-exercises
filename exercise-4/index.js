const express = require('express')
const app = express()
const port = 4000
var fs = require("fs")
const cors = require('cors');
const data = require('./data.json');
const data_users=require('./users.json');
const data_invoices=require("./invoices.json");
const { v4: uuidv4 } = require('uuid');
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})





app.get('/products', async (req, res) => {
    res.json(data.items);
});
app.get('/product/:id', async (req, res) => {
    res.json(  data.items.filter(item => item.id == req.params.id));

});

app.get('/products/search', (req, res) => {
  
 const condition = req.query
   
   for(var key in condition)
   {
        console.log(key)
   
   }
  filtered_data= data.items.filter(item =>{
    for(var key in condition)
    {
      if(item[key] === undefined || item[key] != condition[key])
      {
        
        return false;
      }
      return true;
    
    }
  
  })
 res.json(filtered_data)

});


app.post('/products/add', (req, res) => {
  if(req.body.id== undefined ||
     req.body.name == undefined || 
    req.body.manufacturer == undefined || 
    req.body.category == undefined|| 
    req.body.description == undefined || 
    req.body.image == undefined || 
    req.body.price == undefined )
    { 
    
    res.send("Input again, lack of information");
    
   
  }
  else{
    data.items[data.items.length]= req.body;
    fs.writeFile('data.json', JSON.stringify(data),  function(err) {
      if (err) {
          return console.error(err);
      }});
     res.send("Successful!")
  }
   


});

app.patch('/products/edit/:product_id', (req, res) => {
  if(req.body.name == undefined || 
    req.body.manufacturer == undefined || 
    req.body.category == undefined|| 
    req.body.description == undefined || 
    req.body.image == undefined || 
    req.body.price == undefined  )
  { 
   
    res.send("Input again, lack of information");
    
   
  }
  else{
  var update_item=
  {
    "id": req.params.product_id,
    "name": req.body.name,
    "manufacturer": req.body.manufacturer,
    "category": req.body.category,
    "description": req.body.description,
    "price":req.body.price,
    "image": req.body.image
  }
  
  for(let i=0 ; i <data.items.length;i++)
  {
    if(data.items[i].id == req.params.id)
    {
      data.items[i]= update_item;
    }
  }
  
 
  fs.writeFile('data.json', JSON.stringify(data),  function(err) {
    if (err) {
        return console.error(err);
    }});

  res.send("successful !!!");
  }

});


app.delete('/products/delete/:id', (req, res) => {
 
 
 data.items=data.items.filter(item => item.id != req.params.id)
    
    fs.writeFile('data.json', JSON.stringify(data),  function(err) {
      if (err) {
          return console.error(err);
      }});
    res.json(data);
     return("Successful !!!")
});


app.post('/users/add', (req, res) => {
  
  if(req.body.id == undefined ||
     req.body.name == undefined ||
    req.body.address == undefined || 
    req.body.phone == undefined || 
    req.body.email== undefined)
  {
  
    res.send("Input again, lack of information");
  }
  else{
    data_users.users[data_users.users.length]=req.body;
    fs.writeFile('users.json', JSON.stringify(data_users),  function(err) {
      if (err) {
          return console.error(err);
      }});
  res.send("Successful!")
  }
  
  
});


app.post('/check-out', (req, res) => {
  if(req.body.user_id == undefined ||
     req.body.product_id == undefined ||
     req.body.qty == undefined ||
     req.body.price == undefined )
  {
   
    res.send("Input again, lack of information");
  }
  else{
    var new_invoice={
      "user_id":req.body.user_id,
      "invoice_id":uuidv4(),
      "product_id":req.body.product_id,
      "qty":req.body.qty,
      "price":req.body.price,
      "total":req.body.qty*req.body.price
      
    }
    data_invoices.invoices[data_invoices.invoices.length]=new_invoice;
   
    fs.writeFile('invoices_a_user.json', JSON.stringify(data_invoices),  function(err) {
      if (err) {
          return console.error(err);
      }});
    
  res.send("Successful !!!");
  }
     
});

app.get('/users/invoices', (req, res) => {


    filtered_data=data_invoices.invoices 
    
    res.json(filtered_data)
});

app.get('/users/invoice/:invoice_id', (req, res) => {

    filtered_data=data_invoices.invoices.filter(item => item.invoice_id == req.params.invoice_id)

 
    res.json(filtered_data)
});

app.delete('/invoices/delete/:id', (req, res) => {
  
  const id_invoice= req.params.id

   data_invoices.invoices=data_invoices.invoices.filter(item =>item.invoice_id != id_invoice)
  fs.writeFile('invoices_a_user.json', JSON.stringify(data_invoices),  function(err) {
    if (err) {
        return console.error(err);
    }});
  
     res.json( data_invoices)
    res.send("successful !")
 });

 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})