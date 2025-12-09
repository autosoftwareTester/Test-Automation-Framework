import { GetFilePath, SALT } from "./Commons";
import { CryptoJSUtil } from "crypto-js";
import * as fs from "fs";


function encryptEnvFile() {
    // Get the file path
    const filePath = GetFilePath();

    // Read .env file content
    const envFileContent: string = fs.readFileSync(filePath, 'utf-8');
    // Split content into lines
    const envLines: string[] = envFileContent.split('\n');

    // Here you would add your encryption logic
    console.log(`Encrypting file at path: ${filePath}`);
    console.log(`Encrypting file at path: ${envLines}`);

    // Encryption values and update the array
    const encryptedLines: string[] = envLines.map(line => {
        const [key, value]: string[] = line.split('=');

        if (value) {
            const encryptedValue = CryptoJSUtil.AES.encrypt(value, SALT).toString();
            return `${key}=${encryptedValue}`;
        }

        return line; // Return the line as is if no value to encrypt
    });

    // Join the lines and write back to .env file
    const encryptedContent: string = encryptedLines.join('\n');
    fs.writeFileSync(filePath, encryptedContent, 'utf-8');
    console.log(`File encrypted successfully at path: ${filePath}`);
}

export { encryptEnvFile };