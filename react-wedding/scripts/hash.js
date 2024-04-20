const invitations = require("../src/assets/data/invitations.json");
const crypto = require("crypto");
const algorithm = "aes-256-cbc";
const pass = "Password";
// const key = crypto.scryptSync(password, "salt", 32); // Create a 32-byte key
// const iv = crypto.randomBytes(16); // Initialization vector

function encrypt(password, json) {
  const iv = crypto.randomBytes(16); // Initialization vector
  const key = crypto.scryptSync(password, "salt", 32); // Create a 32-byte key
  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encryptedData = cipher.update(JSON.stringify(json), "utf8", "hex");
  encryptedData += cipher.final("hex");
  return {
    iv: iv.toString("hex"),
    encryptedData,
  };
}

function decrypt(password, iv, encryptedData) {
  const key = crypto.scryptSync(password, "salt", 32); // Create a 32-byte key
  const decipher = crypto.createDecipheriv(
    algorithm,
    key,
    Buffer.from(iv, "hex"),
  );
  let decrypted = decipher.update(encryptedData, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
}

// Usage
function testEncrypt(pass, data) {
  return invitations.data.map((invitation) => {
    const encrypted = encrypt(pass, invitation);
    return encrypted;
  });
}

function testDecrypt(pass, encryptedData) {
  return encryptedData.map((e) => {
    const decrypted = decrypt(pass, e.iv, e.encryptedData);
    return decrypted;
  });
}

const encryptedData = testEncrypt(pass, invitations.data);

console.log("encryptedData: ", encryptedData);

const decryptedData = testDecrypt(pass, encryptedData);

console.log("decryptedData: ", decryptedData);
