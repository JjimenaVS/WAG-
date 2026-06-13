import { db } from "./connection";
import { users, locations, documents, comments } from "./schema";

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
    await db.delete(comments).execute();
    await db.delete(documents).execute();
    await db.delete(locations).execute();
    await db.delete(users).execute();
    console.log("inserting seed data...");

    // Insert users
    const insertedUsers = await db
      .insert(users)
      .values([
        {
          name: "Jimena Vargas",
          email: "jimena@example.com",
          password: "$2b$12$placeholderHashForJimena123456789012",
          avatarId: "default",
        },
        {
          name: "Malu Rodriguez",
          email: "malu@example.com",
          password: "$2b$12$placeholderHashForMalu1234567890123456",
          avatarId: "dog_1",
        },
        {
          name: "Carlos Mora",
          email: "carlos@example.com",
          password: "$2b$12$placeholderHashForCarlos123456789012345",
          avatarId: "cat_2",
        },
      ])
      .returning();

    // Insert locations
    const insertedLocations = await db
      .insert(locations)
      .values([
        {
          name: "Veterinario Lo Esparzano",
          description: "Clinica veterinaria con atencion de emergencias y vacunacion.",
          address: "San Jose, Costa Rica",
          imageUrl: "https://res.cloudinary.com/dnxlfdsh5/image/upload/v1/locations/vet1.jpg",
          category: "veterinaria",
        },
        {
          name: "Pet Shop Amigos Peludos",
          description: "Tienda de alimentos, accesorios y juguetes para mascotas.",
          address: "Zarcero, Alajuela, Costa Rica",
          imageUrl: "https://res.cloudinary.com/dnxlfdsh5/image/upload/v1/locations/petshop1.jpg",
          category: "petshop",
        },
        {
          name: "Parque Canino La Sabana",
          description: "Area recreativa para perros con zonas de juego al aire libre.",
          address: "San Jose, Costa Rica",
          imageUrl: "https://res.cloudinary.com/dnxlfdsh5/image/upload/v1/locations/parque1.jpg",
          category: "parque",
        },
        {
          name: "Veterinaria Huellitas Felices",
          description: "Especialistas en cuidado felino y canino, cirugias menores.",
          address: "Heredia, Costa Rica",
          imageUrl: "https://res.cloudinary.com/dnxlfdsh5/image/upload/v1/locations/vet2.jpg",
          category: "veterinaria",
        },
      ])
      .returning();

    // Insert documents (articulos / cuidados)
    const insertedDocuments = await db
      .insert(documents)
      .values([
        {
          title: "Entendiendo el lenguaje corporal de tu perro",
          content:
            "Los perros se comunican principalmente a traves de su cuerpo. Conocer las señales de la cola, orejas y postura te ayuda a entender como se siente tu mascota y a prevenir situaciones de estres.",
          imageUrl: "https://res.cloudinary.com/dnxlfdsh5/image/upload/v1/documents/dog_body_language.jpg",
          category: "cuidados",
          authorId: insertedUsers[0].id,
        },
        {
          title: "Alimentacion saludable para gatos adultos",
          content:
            "La dieta de un gato adulto debe ser rica en proteinas y baja en carbohidratos. Aprende a leer etiquetas y a elegir el alimento adecuado segun la edad y nivel de actividad de tu felino.",
          imageUrl: "https://res.cloudinary.com/dnxlfdsh5/image/upload/v1/documents/cat_food.jpg",
          category: "alimentacion",
          authorId: insertedUsers[1].id,
        },
        {
          title: "Como elegir la veterinaria correcta",
          content:
            "Antes de elegir una clinica veterinaria, considera la cercania, los servicios de emergencia disponibles, las opiniones de otros dueños de mascotas y la especializacion del personal.",
          imageUrl: "https://res.cloudinary.com/dnxlfdsh5/image/upload/v1/documents/vet_choice.jpg",
          category: "salud",
          authorId: insertedUsers[0].id,
        },
        {
          title: "Cuidados basicos para cachorros recien adoptados",
          content:
            "Los primeros dias de un cachorro en su nuevo hogar son clave. Establece rutinas de alimentacion, paseo y descanso, y programa su primera visita al veterinario lo antes posible.",
          imageUrl: "https://res.cloudinary.com/dnxlfdsh5/image/upload/v1/documents/puppy_care.jpg",
          category: "cuidados",
          authorId: insertedUsers[2].id,
        },
      ])
      .returning();

    // Insert comments (sobre locations y documents)
    const insertedComments = await db
      .insert(comments)
      .values([
        {
          content: "Excelente atencion, el personal es muy amable y profesional.",
          rating: 5,
          userId: insertedUsers[1].id,
          locationId: insertedLocations[0].id,
        },
        {
          content: "Buenos precios pero el lugar es un poco pequeño.",
          rating: 4,
          userId: insertedUsers[2].id,
          locationId: insertedLocations[1].id,
        },
        {
          content: "Mi perro la pasa increible aqui, totalmente recomendado.",
          rating: 5,
          userId: insertedUsers[0].id,
          locationId: insertedLocations[2].id,
        },
        {
          content: "Muy util este articulo, no sabia que el movimiento de cola podia significar tantas cosas.",
          rating: null,
          userId: insertedUsers[2].id,
          documentId: insertedDocuments[0].id,
        },
        {
          content: "Gracias por la informacion, justo lo que necesitaba para mi gato nuevo.",
          rating: null,
          userId: insertedUsers[1].id,
          documentId: insertedDocuments[1].id,
        },
        {
          content: "Atencion rapida en una emergencia, muy agradecido.",
          rating: 5,
          userId: insertedUsers[2].id,
          locationId: insertedLocations[3].id,
        },
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