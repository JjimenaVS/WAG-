import { db } from "./connection";
import { categories, brands, movements, products } from "./schema";

const seed = async () => {
  // PROTECTION: Prevent seeding in production
  const appStage = process.env.APP_STAGE;

  if (appStage === "production") {
    console.error("ERROR: Cannot run seed script in production environment!");
    console.error("Current APP_STAGE:", appStage);
    process.exit(1); // Exit with error code
  }

  // confirmation for staging/test environments
  console.log(`Running seed in ${appStage} environment...`);
  console.log("starting seed...");

  try {
    console.log("deleting existing data...");
    await db.delete(movements).execute();
    await db.delete(products).execute();
    await db.delete(categories).execute();
    await db.delete(brands).execute();
    console.log("inserting seed data...");
    // Insert seed data
    // Insert users (no ID needed)
    const insertedCategories = await db
      .insert(categories)
      .values([
        { name: "Computers" },
        { name: "Phones" },
        { name: "gaming" },
        { name: "tablets" },
      ])
      .returning();

    // Insert brands and capture IDs
    const insertedBrands = await db
      .insert(brands)
      .values([
        { name: "Red dragon" },
        { name: "Logitech" },
        { name: "samsung" },
        { name: "Mac" },
      ])
      .returning();

    const insertedProducts = await db
      .insert(products)
      .values([
        {
          name: "Audifonos rojos",
          price: 100,
          stock: 10,
          categoryId: insertedCategories[2].id,
          brandId: insertedBrands[0].id,
        },
        {
          name: "computadora profesional",
          price: 200,
          stock: 4,
          categoryId: insertedCategories[0].id,
          brandId: insertedBrands[3].id,
        },
        {
          name: "celular samsung",
          price: 150,
          stock: 19,
          categoryId: insertedCategories[1].id,
          brandId: insertedBrands[2].id,
        },
        {
          name: "celular samsung2.2",
          price: 150,
          stock: 15,
          categoryId: insertedCategories[1].id,
          brandId: insertedBrands[2].id,
        },
        {
          name: "audiofonos logi azules",
          price: 80,
          stock: 1,
          categoryId: insertedCategories[2].id,
          brandId: insertedBrands[1].id,
        },
        {
          name: "celular samsung morado moderno",
          price: 180,
          stock: 15,
          categoryId: insertedCategories[1].id,
          brandId: insertedBrands[2].id,
        },
        {
          name: "celular samsung2.2 pero azul",
          price: 390,
          stock: 1,
          categoryId: insertedCategories[1].id,
          brandId: insertedBrands[2].id,
        },
        {
          name: "logitech teclado gamer con luces",
          price: 50,
          stock: 1,
          categoryId: insertedCategories[2].id,
          brandId: insertedBrands[1].id,
        },
      ])
      .returning();

    const insertedMovements = await db
      .insert(movements)
      .values([
        { productId: insertedProducts[0].id, quantity: 5, type: "sale" },
        { productId: insertedProducts[1].id, quantity: 2, type: "sale" },
        { productId: insertedProducts[2].id, quantity: 10, type: "sale" },
        { productId: insertedProducts[3].id, quantity: 3, type: "sale" },
        { productId: insertedProducts[4].id, quantity: 1, type: "return" },
        { productId: insertedProducts[5].id, quantity: 10, type: "sale" },
        { productId: insertedProducts[6].id, quantity: 3, type: "return" },
        { productId: insertedProducts[7].id, quantity: 1, type: "sale" },
      ])
      .returning();

    console.log("Seed completed successfully!");
  } catch (error) {
    console.error("Error during seeding:", error);
    process.exit(1); // Exit with error code
  }
};

if (require.main === module) {
  seed()
    .then(() => {
      console.log("Seed script finished.");
      process.exit(0); // Exit with success code
    })
    .catch((error) => {
      console.error("Error running seed script:", error);
      process.exit(1); // Exit with error code
    });
}

export default seed;
