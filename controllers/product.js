const Product = require('../models/product');

// GET all products with filtering, sorting, and search
const getAllProduct = async (req, res) => {
    const { name, sort, minPrice, maxPrice, rating } = req.query;
    const queryObj = {};

    if (name) {
        queryObj.name = { $regex: name, $options: 'i' };
    }

    if (minPrice || maxPrice) {
        queryObj.price = {};
        if (minPrice) queryObj.price.$gte = Number(minPrice);
        if (maxPrice) queryObj.price.$lte = Number(maxPrice);
    }

    if (rating) {
        queryObj.rating = { $gte: Number(rating) };
    }

    let result = Product.find(queryObj);

    if (sort) {
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList);
    } else {
        result = result.sort('createdAt');
    }

    const products = await result;
    res.status(200).json({ products, nbHits: products.length });
};

// GET single product by ID
const getProduct = async (req, res) => {
    const { id: productID } = req.params;
    const product = await Product.findById(productID);

    if (!product) {
        return res.status(404).json({ msg: "No product with this ID" });
    }

    res.status(200).json({ product });
};

// POST create a new product
const createProduct = async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json({ product });
};

// DELETE product by ID
const deleteProduct = async (req, res) => {
    const { id: productID } = req.params;
    const product = await Product.findByIdAndDelete(productID);

    if (!product) {
        return res.status(404).json({ msg: "No product with this ID to delete" });
    }

    res.status(200).json({ msg: "Product deleted successfully", product });
};

// PUT update product by ID
const updateProduct = async (req, res) => {
    const { id: productID } = req.params;

    const product = await Product.findByIdAndUpdate(productID, req.body, {
        new: true,
        runValidators: true,
    });

    if (!product) {
        return res.status(404).json({ msg: "No product with this ID to update" });
    }

    res.status(200).json({ product });
};

module.exports = {
    getAllProduct,
    createProduct,
    deleteProduct,
    updateProduct,
    getProduct,
};
