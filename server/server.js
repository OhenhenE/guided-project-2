import express from "express";
import cors from "cors";
import {MongoClient, ObjectId} from "mongodb";
const app = express();
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies
const PORT = 3000;
app.listen(PORT,() => console.log() )

const MONGO_DB_URL = 'mongodb://localhost:27017';
const MONGO_DB = 'swapi';

//todo organize endpoints

app.get('/api/planets', async (req,res) => {
    try{
        const client = await MongoClient.connect(MONGO_DB_URL);
        const db = client.db(MONGO_DB);
        const collection = db.collection('planets');
        const planets = await collection.find({}).toArray();
        res.json(planets);
    }
    catch (err) {
        console.error("Error:", err);
        return res.status(404).send("Did Not Work");
    }
});

//adding /api/character
app.get('/api/characters', async (req,res) => {
    try{
        const client = await MongoClient.connect(MONGO_DB_URL);
        const db = client.db(MONGO_DB);
        const collection = db.collection('characters');
        const characters = await collection.find({}).toArray();
        res.json(characters);
    }
    catch (err) {
        console.error("Error:", err);
        return res.status(404).send("Did Not Work");
    }
});

//adding /api/films
app.get('/api/films', async (req,res) => {
    try{
        const client = await MongoClient.connect(MONGO_DB_URL);
        const db = client.db(MONGO_DB);
        const collection = db.collection('films');
        const films = await collection.find({}).toArray();
        res.json(films);
    }
    catch (err) {
        console.error("Error:", err);
        return res.status(404).send("Did Not Work");
    }
});

//adding /api/films_characters
app.get('/api/films_characters', async (req,res) => {
    try{
        const client = await MongoClient.connect(MONGO_DB_URL);
        const db = client.db(MONGO_DB);
        const collection = db.collection('films_characters');
        const films_characters = await collection.find({}).toArray();
        res.json(films_characters);
    }
    catch (err) {
        console.error("Error:", err);
        return res.status(404).send("Did Not Work");
    }
});

//adding /api/films_planets
app.get('/api/films_planets', async (req,res) => {
    try{
        const client = await MongoClient.connect(MONGO_DB_URL);
        const db = client.db(MONGO_DB);
        const collection = db.collection('films_planets');
        const films_planets = await collection.find({}).toArray();
        res.json(films_planets);
    }
    catch (err) {
        console.error("Error:", err);
        return res.status(404).send("Did Not Work");
    }
});

//adding /api/characters/:id
app.get('/api/characters/:id', async (req,res) => {
    try{
        const {id} = req.params;
        const client = await MongoClient.connect(MONGO_DB_URL);
        const db = client.db(MONGO_DB);
        const collection = db.collection('characters');
        const character = await collection.find({id:+id}).toArray();
        res.json(character);
    }
    catch (err) {
        console.error("Error:", err);
        return res.status(404).send("Did Not Work");
    }
});


//adding /api/planets/:id
app.get('/api/planets/:id', async (req,res) => {
    try{
        const {id} = req.params;
        const client = await MongoClient.connect(MONGO_DB_URL);
        const db = client.db(MONGO_DB);
        const collection = db.collection('planets');
        const planet = await collection.find({id:+id}).toArray();
        res.json(planet);
    }
    catch (err) {
        console.error("Error:", err);
        return res.status(404).send("Did Not Work");
    }
});


//adding /api/films/:id
app.get('/api/films/:id', async (req,res) => {
    try{
        const {id} = req.params;
        const client = await MongoClient.connect(MONGO_DB_URL);
        const db = client.db(MONGO_DB);
        const collection = db.collection('films');
        const films = await collection.find({id:+id}).toArray();
        res.json(films);
    }
    catch (err) {
        console.error("Error:", err);
        return res.status(404).send("Did Not Work");
    }
});


//adding /api/films/:id/characters
app.get('/api/films/:id/characters', async (req,res) => {
    try{
        const {id} = req.params;
        const client = await MongoClient.connect(MONGO_DB_URL);
        const db = client.db(MONGO_DB);
        const collection = db.collection('films_characters');
        const characters = await collection.find({film_id:+id}).toArray();
        res.json(characters);
    }
    catch (err) {
        console.error("Error:", err);
        return res.status(404).send("Did Not Work");
    }
});


//adding /api/films/:id/planets
app.get('/api/films/:id/planets', async (req,res) => {
    try{
        const {id} = req.params;
        const client = await MongoClient.connect(MONGO_DB_URL);
        const db = client.db(MONGO_DB);
        const collection = db.collection('films_planets');
        const planets = await collection.find({film_id:+id}).toArray();
        res.json(planets);
    }
    catch (err) {
        console.error("Error:", err);
        return res.status(404).send("Did Not Work");
    }
});


//adding /api/characters/:id/films
app.get('/api/characters/:id/films', async (req,res) => {
    try{
        const {id} = req.params;
        const client = await MongoClient.connect(MONGO_DB_URL);
        const db = client.db(MONGO_DB);
        const collection = db.collection('films_characters');
        const characters = await collection.find({character_id:+id}).toArray();
        res.json(characters);
    }
    catch (err) {
        console.error("Error:", err);
        return res.status(404).send("Did Not Work");
    }
});

//adding /api/planets/:id/films
app.get('/api/planets/:id/films', async (req,res) => {
    try{
        const {id} = req.params;
        const client = await MongoClient.connect(MONGO_DB_URL);
        const db = client.db(MONGO_DB);
        const collection = db.collection('films_planets');
        const films = await collection.find({planet_id:+id}).toArray();
        res.json(films);
    }
    catch (err) {
        console.error("Error:", err);
        return res.status(404).send("Did Not Work");
    }
});

//adding /api/planets/:id/characters
app.get('/api/planets/:id/characters', async (req,res) => {
    try{
        const {id} = req.params;
        const client = await MongoClient.connect(MONGO_DB_URL);
        const db = client.db(MONGO_DB);
        const collection = db.collection('characters');
        const characters = await collection.find({homeworld:+id}).toArray();
        res.json(characters);
    }
    catch (err) {
        console.error("Error:", err);
        return res.status(404).send("Did Not Work");
    }
});