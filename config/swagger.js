import swaggerJSDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const options = {
    customCssUrl: "/public/css/swagger-ui.css",
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Task Manager API",
            description: "Task manager application",
            version: "1.0.0",
        },
        components: {
            securitySchemes: {
                basicAuth: {
                    type: "http",
                    scheme: "basic",
                },
            },
        },
    },
    apis: ["./routes/*.js", "./models/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app) => {
    app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    app.get("/docs.json", (req, res) => {
        res.setHeader("Content-Type", "application/json");
        res.send(swaggerSpec);
    });
};

export default swaggerDocs;
