import { cleanEnv, str, port } from "envalid";
import dotenv from "dotenv";

dotenv.config({ quiet: true });

export function getEnv() {
    return cleanEnv(process.env, {
        NODE_ENV: str(),
        PORT: port({ default: 30000 }),
    });
}