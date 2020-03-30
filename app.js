const express = require("express");

const app = express();

const PORT = 80;
const HOST = "localhost";

app.get("/", (req, res) => {
	res.send("Hello docker!");
})

app.listen(PORT, HOST, () => {
	console.log(`
-------------------

	App started on http://${HOST}:${PORT}

-------------------
`)
})