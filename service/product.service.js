const { productSchema } = require("../model");

let getProductList = () => {
  return productSchema.find().populate({ path: 'createdBy', select: 'email' });
};

let addProduct = (body) => {
  return productSchema.create(body);
};

let updateProduct = (id, body) => {
  return productSchema.findByIdAndUpdate({ _id: id }, body, { new: true });
};

let deleteProduct = (id) => {
  return productSchema.findByIdAndDelete({ _id: id });
};

module.exports = {
  getProductList,
  addProduct,
  updateProduct,
  deleteProduct,
};
