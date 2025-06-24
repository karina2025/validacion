db.createCollection("vehiculos", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: [
                "_id",
                "placa",
                "marca",
                "modelo",
                "anio",
                "color",
                "serial",
                "combustible",
                "peso",
                "fecha_importacion"
            ],
            properties:{
                _id:{
                    bsonType: "objectId",
                    description: "Identificador único"
                },
                placa: {
                    bsonType: "string",
                    minLength: 6,
                    pattern: "^[A-Z]{3}[0-9]{3}$",
                    description: "El formato de la placa es AAA123"
                },
                marca:{
                    bsonType: "string",
                    minLength: 2,
                    description: "La marca debe tener mínimo dos caracteres"
                },
                modelo:{
                    bsonType: "string",
                    minLength: 2,
                    description: "El modelo debe tener mínimo dos caracteres"
                },
                anio:{
                    bsonType: "int",
                    description: "El año debe ser un entero"
                },
                color:{
                    bsonType: "string",
                    pattern: "^[A-Z]\\w{2,}",
                    description: "El color debe comenzar con mayúscula y tener al menos 3 caracteres"
                },
                serial:{
                    bsonType: "string",
                    minLength: 10,
                    description: "El serial debe tener al menos 10 caracteres"
                },
                combustible:{
                    bsonType: "string",
                    enum: ["Gasolina", "ACPM", "GNV", "Eléctrico"],
                    description: "El combustible solo puede tomar estos valores: Gasolina, ACPM, GNV, Eléctrico"
                },
                serial:{
                    bsonType: "string",
                    minLength: 10,
                    description: "El serial debe tener al menos 10 caracteres"
                },
                peso:{
                    bsonType: ["double", "int"],
                    minimum: 400,
                    description: "El peso es minimo 400 Kg"
                },
                fecha_importacion:{
                    bsonType: "date",
                    description: "Fecha de importacion del vehiculo"
                }
            },
            additionalProperties: false
        }
    }
})