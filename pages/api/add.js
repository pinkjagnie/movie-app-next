function handler(req, res) {
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

    const newMovie = {title, year, image, time, director, writer, production, isFeatured: false};

    console.log(newMovie);

    res
      .status(201)
      .json({ message: "Successfully stored movie", message: newMovie });
  }
}

export default handler;