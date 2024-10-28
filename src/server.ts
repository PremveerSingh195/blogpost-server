import app from "./app";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`server is succesfully running on port localhost:${PORT}`);
});
