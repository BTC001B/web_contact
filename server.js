const sequelize = require("./config/db"); // Sequelize config
const dotenv = require("dotenv");
const cors = require('cors');
const express = require("express");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); // handles JSON bodies
app.use(express.urlencoded({ extended: true })); 
app.use("/api/",userRoutes);



app.get("/",(req,res)=>{
    res.send("server is Rendering ...");
});

const PORT = process.env.PORT || 3012;

sequelize
  .sync({alter:true})
  .then(() => {
    console.log("✅ Database connected & synced");
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("❌ DB connection failed:", err);
  });   
