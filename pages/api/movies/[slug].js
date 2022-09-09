import {
  connectDatabase,
  getAllMovies,
} from "../../../helpers/db-util";

async function handler(req, res) {
  const slug = req.query.slug;

  let client;

  try {
    client = await connectDatabase();
  } catch (error) {
    res.status(500).json({ message: "Connecting to the database failed" });
    return;
  }

  if (req.method === "GET") {
    try {
      await getAllMovies(client);
      res.status(200).json({ message: "Successfully get all movies" });
    } catch (error) {
      res.status(500).json({ message: "Getting movies failed" });
    }
  }

  client.close();
}

export default handler;