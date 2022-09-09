import { MongoClient } from 'mongodb'

import config from "./config";

const uri = `${config.urlMongo}`;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

let client
let clientPromise


if (process.env.NODE_ENV === 'development') {

  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options)
    global._mongoClientPromise = client.connect()
  }
  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise
