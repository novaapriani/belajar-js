schema = {
    "type": "object",
    "properties":
        {
           "breed": {"type":"string", "enum":[
                                               "golden retrievers", 
                                               "Belgian Malinois", 
                                               "Border Collie"
                                            ]
                    },
           "age": {"type": "int", "maximum":15, "minimum":0},
           "weight": {"type":"number", "minimum":0},
           "name": {"type":"string"}
        }
   }

const validateJson = validate(instance = {
                        "breed": "golden retriever",
                        "age": 5,
                        "weight": 13.5,
                        "name": "Luke"
                    }, 
                    schema = schema)

console.log(validateJson)