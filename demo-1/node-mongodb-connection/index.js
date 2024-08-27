const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");

    // Access a specific collection
    const database = client.db();
    const collection = database.collection("mycollection");

    // Insert a document
    const document = { name: "Mohan das", age: 40 };
    const result = await collection.insertOne(document);
    console.log(`Document inserted with _id: ${result.insertedId}`);

    // Query the collection
    const foundDocument = await collection.findOne({ name: "John Doe" });
    console.log("Found Document:", foundDocument);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  } finally {
    await client.close();
  }
}

connectToDatabase();
