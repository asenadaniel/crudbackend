import express from "express";
import { Router } from "express";
import Product from "../Models/product.model.js";
import { getProducts, getProduct, createProduct, UpdateProduct, deleteProduct } from '../controllers/product.controller.js'

const router = Router()

router.get('/', getProducts)

router.get('/:id', getProduct)

router.post('/', createProduct)

router.put('/:id', UpdateProduct)

router.delete('/:id', deleteProduct)

export default router