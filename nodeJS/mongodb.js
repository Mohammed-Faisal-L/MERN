const { MongoClient } = require("mongodb");

const url =
  "mongodb+srv://mdfaisala334:wQCchGk0SnkBEKaI@newcluster.h4rvp.mongodb.net/";
const client = new MongoClient(url);

const dbName = "myDatabase";

async function main() {
  await client.connect();
  console.log("Connected successfully to the server.");
  const db = client.db(dbName);
  const collection = db.collection("userCollection");

  const insertResult = await collection.insertMany([
    { a: 1 },
    { a: 2 },
    { a: 3 },
  ]);
  console.log("Inserted documents =>", insertResult);

  const finalResult = await collection.find({}).toArray();
  console.log("Found documents => ", finalResult);

  const filteredDocs = await collection.find({ a: 3 }).toArray();
  console.log("Found documents filtered by {a:3} => ", filteredDocs);

  const updateResult = await collection.updateMany(
    { a: 3 },
    { $set: { b: 1 } }
  );
  console.log("Updated documents => ", updateResult);

  const deleteResult = await collection.deleteMany({ a: 3 });
  console.log("Deleted documents => ", deleteResult);

  const indexName = await collection.createIndex({ a: 1 });
  console.log("index name =", indexName);

  return "done.";
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
