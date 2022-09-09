import { MongoClient } from "mongodb";

import config from "../../lib/config";

async function handler(req, res) {
  if (req.method === "POST") {
    const { title, year, image, time, director, writer, production } = req.body;

    if (
      !title ||
      title.trim() === "" ||
      !year ||
      year.trim() === "" ||
      !image ||
      image.trim() === "" ||
      !time ||
      time.trim() === "" ||
      !director ||
      director.trim() === "" ||
      !writer ||
      writer.trim() === "" ||
      !production ||
      production.trim() === ""
    ) {
      res.status(422).json({ message: "Invalid input" });
      return;
    }

    let slug = title.replaceAll(" ","-").replace(":", "-").toLowerCase() + '-' + year;

    const newMovie = {title, year, image, time, director, writer, production, slug, isFeatured: false};

    console.log(newMovie);

    let client;

    try {
      client = await MongoClient.connect(`${config.urlMongo}`);
    } catch (error) {
      res.status(500).json({ message: "Could not connected to the database" });
      return;
    }

    const db = client.db();

    try {
      const result = await db.collection("movies").insertOne(newMovie);
      newMovie.id = result.insertedId;
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Storing movie failed" });
      return;
    }

    client.close();

    res
      .status(201)
      .json({ message: "Successfully stored movie", message: newMovie });
  }
}

export default handler;