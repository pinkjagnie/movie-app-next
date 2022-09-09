// async function handler(req, res) {
//   if (req.method === 'GET') {
//     async function fetchMovies() {
//       const response = await fetch('https://test.axiomos.pl/api/reports', {
//         mode: 'cors',
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       })
//       .then((res) => {
//         return res.json()
//       })
//       .then((myJson) => {setData(myJson)})
//       };
    
//   }
// }

// export default handler;


import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("movies");
  
  if (req.method === "GET") {

      const allMovies = await db.collection("movies").find({}).toArray();
      res.json({ status: 200, movies: allMovies });
  
  }
}
