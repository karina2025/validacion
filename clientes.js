db.createCollection("clientes"), {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "_id",
                "nombre",
                "correo",
                "telefono",
                "fecha_registro"
            ],
            properties: {
                _id: {
                    bsonType: "objectId",
                    description: "identificador unico"
                },
                nombre:{
                    bsonType: "string",
                    pattern: "^[A-Z]",
                },
                email:{
                    bsonType: "string",
                    pattern: "^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$",
                    description: " un correo que sea valido"
                },
                telefono:{
                    bsonType: "string",
                    pattern: "^[0-9]{7,10}$"
                },
                fecha_registro:{
                    bsonType:"date"
                }
            }
        }
    }
}
