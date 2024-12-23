const { MongoClient, MongoServerError } = require("mongodb");

const url = "mongodb+srv://mdfaisala334:wQCchGk0SnkBEKaI@newcluster.h4rvp.mongodb.net/";
const client = new MongoClient(url);

async function run() {
  try {
    await client.connect();
    const db = client.db("myDatabase"); // Replace with your actual database name
    const collection = db.collection("userCollection");

    await collection.insertOne({ _id: 1 });
    await collection.insertOne({ _id: 1 }); // This will throw an error
  } catch (error) {
    if (error instanceof MongoServerError) {
      console.log(`Error worth logging: ${error}`);
    }
    throw error;
  } finally {
    await client.close(); // Ensure the client connection is closed
  }
}

run().catch(console.dir);
