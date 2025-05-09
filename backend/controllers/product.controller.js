import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    console.log("Error in fetching products: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const newProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  try {
    const newProduct = await Product.create(product);
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in Create product: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const product = req.body;

  try {
    const productToUpdate = await Product.findByPk(id);
    if (!productToUpdate) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    await productToUpdate.update(product);
    res.status(200).json({ success: true, data: productToUpdate });
  } catch (error) {
    console.error("Error in updating product: ", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findByPk(id);
    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    await product.destroy();
    res.status(200).json({ success: true, message: "Product deleted" });
  } catch (error) {
    console.log("Error in deleting product: ", error.message);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
