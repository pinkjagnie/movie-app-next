import clientPromise from "../../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("movies");
  
  if (req.method === "GET") {
    const allMovies = await db.collection("movies").find({}).toArray();
    res.json({ status: 200, movies: allMovies });
  }

  if (req.method === "POST") {
    const {rate, slug} = req.body;

    const newRate = rate

    const db = client.db();

    try {      

      let query = { slug: slug };
      const options = {upsert: true }
      const updateTodo = {
         $push: { rates: +newRate } 
      };
 
      const collection = db.collection("movies")
      const result = await collection.updateOne(query, updateTodo, options);
      
    } catch(error) {
      client.close();
      res.status(500).json({message: "Storing rate failed"});
      return;
    }

    res
      .status(201)
      .json({ message: "Successfully stored rate", message: newRate });
  }
}
