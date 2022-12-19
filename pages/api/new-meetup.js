import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const client = await MongoClient.connect(
      "mongodb+srv://adel:fGFxju0n68QfxkgX@cluster0.v3imuty.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const result = await meetupsCollection.insertOne(data)
    console.log(result)
    client.close();
    res.state(201).json({message: 'Meetup inserted!'})
  }
}

export default handler;
