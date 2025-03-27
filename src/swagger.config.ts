module.exports = {
    swaggerDefinition: {
        openapi: "3.1.0",
        info: {
            "title": "API de ejemplo",
            "description": "",
            "version": "1.0.0"
        },
        "servers": [
            {url: 'http://localhost:3000'}
        ]
    },
    apis: ['./src/routes/*.ts']
}