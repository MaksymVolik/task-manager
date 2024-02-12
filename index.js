import express from "express";
import bodyParser from "body-parser";
import "./config/db.js";
import swaggerDocs from "./config/swagger.js";

// Routes
import authRouter from "./routes/authRoutes.js";
import taskRouter from "./routes/taskRoutes.js";

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(bodyParser.json());

// app.use("/public/css", express.static("public/css"));

app.use("/api", authRouter);
app.use("/api", taskRouter);

swaggerDocs(app);

app.listen(port, () => {
    console.log(
        `Server listening on port ${port} and starting at http://localhost:${port}`
    );
});

export default app;
