/*
 * @file: swagger-config.js
 * @description: It Contain swagger configrations.
 * @author: Dixit
 */
import swaggerJsDocs from "swagger-jsdoc";
console.log("process.env.NODE_ENV: ", process.env.NODE_ENV);

const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "Dixit project apis",
            version: "1.0",
            description: "All api end points",
            contact: {
                name: "Dixit"
            },
            servers: ["http://localhost:3000"]
        },
        produces: ["application/json"],
        host: process.env.NODE_ENV === 'production' ? `localhost:3000` : (process.env.NODE_ENV === 'production' ? "production_URL:production_PORT" : `localhost:3000`)
    },
    apis: ["./api/*/*.js"], //!process.env.NODE_ENV ? ["./api/*/*.js"] : ["*/*/*/*/*.js"],
    layout: "AugmentingLayout"
};
export default swaggerJsDocs(swaggerOptions);