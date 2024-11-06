import express from "express";

const app = express();
const port = process.env.PORT || 3030;

app.use(express.static("public")); // this was suggested by chatGPT. I didn't know hoo
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { foo: "foo" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
