import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());

app.get('/',(req,res)=>{
    res.cookie("testCookie",{name:"Mauricio",email:"correo@correo.com"});
})

app.get('/set-display-name', (req, res) => {
  const displayName = req.query.displayName;
  if (displayName) {
    // Check if the display name is within an acceptable range, e.g., 3 to 20 characters.
    if (displayName.length >= 3 && displayName.length <= 20) {
      res.cookie('displayName', displayName, { maxAge: 86400000 }); // Cookie expires in 1 day.
      res.send('Display name has been set successfully.');
    } else {
      res.status(400).send('Display name must be between 3 and 20 characters.');
    }
  } else {
    res.status(400).send('Invalid display name.');
  }
});


app.get('/set-anonymous-display-name', (req, res) => {
    // Generate an anonymous version of the display name.
    const anonymousName = 'User' + Math.floor(Math.random() * 10000);
  
    res.cookie('displayName', anonymousName, { maxAge: 86400000 });
    res.send('Display name has been set successfully.');
  });

app.listen(8080,()=>console.log("Listening"));