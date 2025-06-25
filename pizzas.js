db.createCollection("pizzas", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "_id",
        "nombre",
        "tamano",
        "precio",
        "ingredientes"
      ],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "Identificador único"
        },
        nombre: {
          bsonType: "string",
          pattern: "^.{3,}$",
          description: "Debe tener al menos 3 caracteres"
        },
        tamano: {
          bsonType: "string",
          enum: ["pequeña", "mediana", "grande"]
        },
        precio: {
          bsonType: "double",
          minimum: 5.00
        },
        ingredientes: {
          bsonType: "array",
          items: {
            bsonType: "objectId"
          },
          minItems: 1
        }
      },
      additionalProperties: false
    }
  },
  validationLevel: "strict",
  validationAction: "error"
});
