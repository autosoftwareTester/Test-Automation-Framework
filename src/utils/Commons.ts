import * as path from "path";

// ALgorithm
const SALT = process.env.SALT || "default_salt_value"; // Salt for encryption/decryption
const currentDir = __dirname; // Current directory of this file
const srcDir = path.join(currentDir, ".."); // Path to the .env file, One level abaove (src)

function GetFilePath(): string {
    // change to config folder
    const configDir = path.resolve(srcDir, 'config');
    let envFilePath = `${configDir}\\.env`;

    // Check condition to encrypt or decrypt
    if (process.env.NODE_ENV) {
        // Read the .env file
       return envFilePath = `${configDir}//.env.${process.env.NODE_ENV}`;
    }
    return envFilePath;
}

export { GetFilePath, SALT };

