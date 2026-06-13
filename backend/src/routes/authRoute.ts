import { Router } from "express";
//
import {
  validateBody,
  validateParams,
  validateQuery,
} from "../middleware/validations";
import { z } from "zod";
//
import db from "../db/connection";
import { categories, brands, movements, products } from "../db/schema";
import { eq, sql } from "drizzle-orm";

const createProductSchema = z.object({
  name: z.string(),
  price: z.number(),
  stock: z.number().int().min(0),
  categoryId: z.string(),
  brandId: z.string(),
});

const getProductSchema = z.object({
  id: z.string(),
});

const router = Router();

router.get("/", async (req, res) => {


  //res.status(200).json({ message: 'List of products' });
  try {
    const results = await db //datos que se van a traer
      .select({
        id: products.id,
        name: products.name,
        price: products.price,
        stock: products.stock,
        categoryId: categories.id,
        brandId: brands.id,
        created_at: products.created_at,
        updated_at: products.updated_at,
      })
      .from(products)
      .leftJoin(brands, eq(products.brandId, brands.id))
      .leftJoin(categories, eq(products.categoryId, categories.id));

    //transform results to desired format
    const productsList = results.map((row) => ({
      id: row.id,
      name: row.name,
      price: row.price,
      stock: row.stock,
      categoryId: row.categoryId,
      brandId: row.brandId,
      created_at: row.created_at,
      updated_at: row.updated_at,
    }));
    //products is now an array of car objects with nested brand, category and fuelType
    res.status(200).json(productsList);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});



router.get("/:id", validateParams(getProductSchema),async (req, res) => {
  res.status(200).json({ message: `Details of product with id ${req.params.id}` });

  /*
  try {
    const results = await db //datos que se van a traer
      .select({
        id: products.id,
        name: products.name,
        price: products.price,
        stock: products.stock,
        categoryId: categories.id,
        brandId: brands.id,
        created_at: products.created_at,
        updated_at: products.updated_at,
      })
      .from(products)
      .leftJoin(brands, eq(products.brandId, brands.id))
      .leftJoin(categories, eq(products.categoryId, categories.id));

        const productsList = results.map((row) => ({
      id: row.id,
      name: row.name,
      price: row.price,
      stock: row.stock,
      categoryId: row.categoryId,
      brandId: row.brandId,
      created_at: row.created_at,
      updated_at: row.updated_at,
    }));

    //products is now an array of car objects with nested brand, category and fuelType
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Internal server error" });
  }
    */

  
});



export default router;
