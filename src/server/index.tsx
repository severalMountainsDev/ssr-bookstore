import express, { Request, Response } from "express";

import renderer from "./renderer";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("*", async (req: Request, res: Response) => {
  try {
    const html = await renderer(req);
    res.contentType("text/html");
    res.send(html);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
