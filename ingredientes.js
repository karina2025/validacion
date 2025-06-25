db.createCollection("ingredientes"),{
    validator: {
        $jsonSchema:{
            bsonType: "object",
            required: [
                "_id",
                "nombre",
                "stock",
                "unidad"
            ],
            properties: {
                _id:{
                    bsonType: "objectId",
                    description: "indentificador unico"
                },
                nombre: {
                    bsonType: "string",
                    pattern: "^[A-Z]"
                },
                stock: {
                    bsonType: "int",
                     minimum:0,
                },
                unidad:{
                    bsonType: "string",
                    enum: ["gramos", "ml", "unidades"]
                }
            }
        }
    }
}