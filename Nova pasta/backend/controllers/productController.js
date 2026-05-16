const Product = require("../models/Product");

// LISTAR PRODUTOS
exports.getProducts = async (req, res) => {

  try {

    const products = await Product.find();

    res.json(products);

  } catch (error) {
    res.status(500).json(error);
  }

};

// CRIAR PRODUTO
exports.createProduct = async (req, res) => {

  try {

    const product = await Product.create(req.body);

    res.status(201).json(product);

  } catch (error) {
    res.status(500).json(error);
  }

};