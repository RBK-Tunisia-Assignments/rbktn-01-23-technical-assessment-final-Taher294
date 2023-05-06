const express = require("express");
const app = express();
const PORT = 4000;


app.use(express.json()) 

app.get("/",(req,res)=>{
    res.json("this is the back end ")
})


app.post("/client", (req, res) => {
  const q = "INSERT INTO client (username,email,password) VALUES (?, ?, ?)";
  const values = [req.body.username, req.body.email, req.body.password];
  db.query(q, values, (err, data) => {
    if (err) return res.status(500).json({ error: err.message });
    return res.json("client has been created ");
  });
});

app.delete("client/:user_Id",(req,res)=>{
    const user_Id = req.params.user_Id;
    const q = "DELETE FROM client where user_Id =? " 
    db.query(q,[clientid],(err,data)=>{
        if (err) return res.status(500).json({ error: err.message });
    return res.json("client has been deleted");
    })
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});


