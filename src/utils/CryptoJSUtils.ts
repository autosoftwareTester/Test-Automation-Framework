import CryptoJSUtils from 'crypto-js';


// Get the salt key from environment variables
const SALT = process.env.SALT_KEY || 'default_salt_key';

// encrypts data using AES encryption
export function encryptData(data: string): string {
    return CryptoJSUtils.AES.encrypt(data, SALT).toString();
}

// decrypts data using AES decryption
export function decryptData(ciphertext: string): string {
    const bytes = CryptoJSUtils.AES.decrypt(ciphertext, SALT);
    return bytes.toString(CryptoJSUtils.enc.Utf8);
}