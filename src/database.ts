// Hardcoded database credentials - security issue
const DB_HOST = "localhost";
const DB_USER = "admin";
const DB_PASSWORD = "password123";
const DB_NAME = "mydb";

// SQL Injection vulnerability - security issue
export function databaseQuery(query: string): any {
  // This is vulnerable to SQL injection
  return { result: `Executing: ${query}` };
}

// Missing input validation - code smell
export function insertUser(userData: any): void {
  const query = `INSERT INTO users VALUES ('${userData.name}', '${userData.email}')`;
  databaseQuery(query);
}

// Potential XSS vulnerability - security issue
export function renderUserContent(content: string): string {
  return `<div>${content}</div>`; // No sanitization
}

// Weak encryption - security issue
export function hashPassword(password: string): string {
  // Using weak hashing (should use bcrypt, argon2, etc.)
  let hash = 0;
  for (let i = 0; i < password.length; i++) {
    hash = (hash << 5) - hash + password.charCodeAt(i);
    hash = hash & hash;
  }
  return hash.toString();
}

// Exposed sensitive data - security issue
export function getUserProfile(userId: string): any {
  return {
    id: userId,
    email: "user@example.com",
    password: "plaintext_password", // Should never expose password
    ssn: "123-45-6789", // Sensitive data
    creditCard: "1234-5678-9012-3456", // Sensitive data
  };
}
