
import { MongoClient } from "mongodb";
import dotenv from 'dotenv';

dotenv.config();

let db;
async function connectToDB(cb) {
    const url = process.env.MONGO_URI;
    const client = new MongoClient(url);
    await client.connect();
    db = client.db("narendra");
    cb();
}


export { connectToDB, db };