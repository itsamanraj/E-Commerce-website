import LoginUser from '../models/loginmodel.js';
import Product from '../models/productmodel.js';



export const addProduct = async (req,res) => {
    const user = new Product(req.body);
    try {
        const add = await user.save();
        res.status(201).json(add);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const deletedproduct = await Product.deleteOne({_id:req.params.id});
        res.status(200).json(deletedproduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const updateProduct = async (req, res) => {
    try {
        const updateduser = await Product.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updateduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const getProdustById = async (req, res) => {
    try {
        const user = await Product.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const getProducts = async ( req ,res) => {
    try {
        const users = await Product.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

export const getCatagorys = async ( req ,res) => {
    try {
        const users = await Catagory.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


export const addCatagory = async (req,res) => {
    const user = new Catagory(req.body);
    try {
        const add = await user.save();
        res.status(201).json(add);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const deleteCatagory = async (req, res) => {
    try {
        const deletedproduct = await Catagory.deleteOne({_id:req.params.id});
        res.status(200).json(deletedproduct);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const addUsers = async (req, res) => {
    const user = new LoginUser(req.body);
    try {
        const inserteduser = await user.save();
        res.status(201).json(inserteduser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}

export const getUsers = async ( req ,res) => {
    try {
        const users = await LoginUser.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}


