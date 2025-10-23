import express, { Request, Response} from "express";
import cors from "cors";
import { router } from "./app/routes";
import { globalErrorHandler } from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";


const app = express();

app.use(express.json());
app.use(cors());

app.use("/app/v1", router)

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome"
    })
})

app.use(globalErrorHandler)

app.use(notFound)

export default app;