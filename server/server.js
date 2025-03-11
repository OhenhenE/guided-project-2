import express from "express";
import cors from "cors";
const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies
const PORT = 3000;
app.listen(PORT,() => console.log() )

app.get('/api/planets', async (req,res) => {
    try{
        return res.status(200).send("It Worked");
    }
    catch (err) {
        console.error("Error:", err);
        return res.status(404).send("Did Not Work");
    }
})