import { MongoClient } from "mongodb";

export default async function mongoConnect() {
  const client = await MongoClient.connect(
    "mongodb+srv://adel:c3hqCAq3HVkF1JWX@cluster0.v3imuty.mongodb.net/?retryWrites=true&w=majority"
  );
  return function closeClient() {
    client.close()
  }

  return function connectClient() {
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    return meetupsCollection;
  }

}

