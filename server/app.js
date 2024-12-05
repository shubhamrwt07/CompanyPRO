const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const port = process.env.PORT || 3000;
const connectDB = require("./config/configDb");

connectDB();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(require("./routes/routes"));

// Mock data
// let products = [
//   { id: 1, name: "Product 1", price: 9.99 },
//   { id: 2, name: "Product 2", price: 14.99 },
//   { id: 3, name: "Product 3", price: 19.99 },
// ];

// // GET /products endpoint

// app.get("/products", (req, res) => {
//   let searchTerm = req.query.searchTerm;

//   if (searchTerm) {
//     const filteredProducts = products.filter((product) =>
//       product.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     res.json(filteredProducts);
//   } else {
//     res.json(products);
//   }
// });

// // GET /products/:id endpoint

// app.get("/products/:id", (req, res) => {
//   const productId = parseInt(req.params.id);
//   const product = products.find((product) => product.id === productId);

//   if (product) {
//     res.json(product);
//   } else {
//     res.status(404).json({ error: "Product not found" });
//   }
// });

// // POST /products endpoint

// app.post("/products", (req, res) => {
//   const newProduct = req.body;
//   products.push(newProduct);
//   res.status(201).json(newProduct);
// });

// // PUT /products/:id endpoint

// app.put("/products/:id", (req, res) => {
//   const productId = parseInt(req.params.id);
//   const updatedProduct = req.body;

//   const productIndex = products.findIndex(
//     (product) => product.id === productId
//   );

//   if (productIndex !== -1) {
//     products[productIndex] = updatedProduct;
//     res.json(updatedProduct);
//   } else {
//     res.status(404).json({ error: "Product not found" });
//   }
// });

// // DELETE /products/:id endpoint

// app.delete("/products/:id", (req, res) => {
//   const productId = parseInt(req.params.id);

//   const productIndex = products.findIndex(
//     (product) => product.id === productId
//   );

//   if (productIndex !== -1) {
//     products.splice(productIndex, 1);
//     res.status(204).send();
//   } else {
//     res.status(404).json({ error: "Product not found" });
//   }
// });

app.listen(port, () => console.log(`Server running on port ${port} !!`));
