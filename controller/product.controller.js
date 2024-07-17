const uploadImage = require("../middleware/cloudinary");
const { productService } = require("../service");

const getProductList = async (req, res) => {
  try {
    const products = await productService.getProductList();
    res.status(200).json(
        {
            status: 200,
            message: "Products fetched successfully",
            data: products
        }
    );
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addProduct = async (req, res) => {
  const body = req.body;
  const file = req.file;
  let img = await uploadImage(file.path);

  const newProduct = {
    ...body,
    image: img.url
  };

  try {
    const savedProduct = await productService.addProduct(newProduct);
    res.status(201).json(
        {
            status: 201,
            message: "Product added successfully",
            data: savedProduct
        }
    );
  } catch (error) {
    res.status(400).json(
        {
            status: 400,
            message: error.message
        }
    );
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name, description, price, category, createdBy } = req.body;
  const image = req.file ? req.file.path : undefined;

  const updatedProductData = {
    name,
    description,
    price,
    category,
    image,
    createdBy
  };

  try {
    const updatedProduct = await productService.updateProduct(id, updatedProductData);
    res.status(200).json(
        {
            status: 200,
            message: "Product updated successfully",
            data: updatedProduct
        }
    );
  } catch (error) {
    res.status(400).json(
        {
            status: 400,
            message: error.message
        }
    );
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    await productService.deleteProduct(id);
    res.status(200).json(
        {
            status: 200,
            message: 'Product deleted successfully'
        }
    );
  } catch (error) {
    res.status(400).json(
        {
            status: 400,
            message: error.message
        }
    );
  }
};

module.exports = {
  getProductList,
  addProduct,
  updateProduct,
  deleteProduct
};
