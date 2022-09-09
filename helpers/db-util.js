import { MongoClient } from "mongodb";
import config from "../lib/config";

export async function connectDatabase() {
  const client = await MongoClient.connect(`${config.urlMongo}`);
  // console.log(client)
  return client;
}

export async function getAllMovies(collection) {
  const client = await connectDatabase();
  const db = client.db();

  const documents = db.collection(collection).find();
 
  return documents;
}

export function getFeaturedMovies() {
  
  const featuredPosts = getAllMovies("movies").toArray().filter((movie) => movie.isFeatured);

  return featuredPosts;
}