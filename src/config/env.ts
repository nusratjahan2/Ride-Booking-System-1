
import dotenv from "dotenv";

dotenv.config()

interface Envconfig {
    PORT: string,
    DB_URL: string,
    NODE_ENV: string,
}

const loadEnvVariable = (): Envconfig => {
    const requiredEnvVariables: string[] = ["PORT", "DB_URL", "NODE_ENV"];

    requiredEnvVariables.forEach(key => {
        if (!process.env[key]) {
            throw new Error(`Missing required ENV variable${key}`)
        }
    })

    return {
        PORT: process.env.PORT as string,
        DB_URL: process.env.DB_URL as string,
        NODE_ENV: process.env.NODE_ENV,
    }
}

export const envVars: Envconfig = {
    PORT: process.env.PORT,
    DB_URL: process.env.DB_URL,
    NODE_ENV: process.env.NODE_ENV,
}



