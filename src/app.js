const express = require('express');
const app = express();
const path =require("path");
//const hbs = require('hbs');


require("./db/conn");

const student_details = require("./models/studentModel");

const static_path = path.join(__dirname , "../public");
//const template_path = path.join(__dirname , "../template/views");
//const partials_path = path.join(__dirname , "../template/partials");


app.use(express.static(static_path));
app.set("view engine", "hbs");
//app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.set("views", template_path);
//hbs.registerPartials(partials_path);    

app.get("/", (req,res) => {
    res.render("index");

})

app.get("/login", (req,res) => {
    res.render("login");

})

//login validation
app.post("/login", async (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;
      
      const user = await student_details.findOne({ email: email });
  
      if (user) {
        console.log(`${email} and password is ${password}`);
        console.log(user);
  
        if (user.password === password) {
          res.status(201).render('index');
        } else {
          res.send('Incorrect username or password');
        }
      } else {
        res.status(404).send('User not found');
      }
    } catch (error) {
      res.status(500).send('An error occurred');
    }
  });
  


app.listen(3000);