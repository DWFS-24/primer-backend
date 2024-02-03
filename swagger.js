const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')


const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Mi primer Backend",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./apis/*.js"],
};

const specs = swaggerJsdoc(options)

module.exports = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
}