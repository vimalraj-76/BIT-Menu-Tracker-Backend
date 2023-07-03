const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const app=express()
app.use(express.json())

const cors = require('cors');
app.use(cors());

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(() => console.log("MongoDB Atlas connected"))
    .catch((error) => console.log("MongoDB Atlas could not connect: ", error));

    const port = process.env.PORT || 5050;

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
      
      const menusRouter = require("./routes/menus");
      app.use("/api/menus", menusRouter);
