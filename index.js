const express = require("express")
const mongoose = require("mongoose")
const recipeRoute = require("./routes/recipe.route")

require("dotenv").config()

const app = express()


const port = process.env.PORT || 9099
const dbURL = process.env.MONGO_URL;

// Middleware
app.use(express.json())
app.use("/api/recipes", recipeRoute)

app.get("/", (req, res) => {
    res.send("This is from node API")
})


app.listen(port, () => {
    mongoose.connect(dbURL)
        .then(() => console.log(`DB connecter...!!`))
        .catch((err) => console.log(err));
    console.log(`server start..http://localhost:${port}`);
})