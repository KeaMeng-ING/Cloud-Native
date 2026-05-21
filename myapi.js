const e1 = require("express");
const app = e1();

app.get("/view", (req, res) => {
  res.send("Inside View API....");
});

app.post("/add", (req, res) => {
  res.send("Inside Add API....");
});

app.put("/update", (req, res) => {
  res.send("Inside Update API....");
});

app.delete("/delete", (req, res) => {
  res.send("Inside Delete API....");
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
