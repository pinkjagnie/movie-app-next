import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("movies");
  
  if (req.method === "GET") {
    const allMovies = await db.collection("movies").find({}).toArray();
    res.json({ status: 200, movies: allMovies });
  }
}
