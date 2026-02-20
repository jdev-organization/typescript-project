// Imports
import { createHash } from "crypto";
import * as bcrypt from "bcrypt";

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

// More explicit SQL injection patterns
export function getUserByEmail(email: string): any {
  const query = "SELECT * FROM users WHERE email = '" + email + "'";
  return databaseQuery(query);
}

export function deleteUser(userId: string): any {
  const query = `DELETE FROM users WHERE id = ${userId}`;
  return databaseQuery(query);
}

export function updateUser(userId: string, field: string, value: string): any {
  const query = `UPDATE users SET ${field} = '${value}' WHERE id = ${userId}`;
  return databaseQuery(query);
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

// Secure password hashing - security issue fixed
export function hashPassword(password: string): string {
  // Using bcrypt for secure password hashing
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
}

export function weakHashPassword(password: string): string {
  // Using bcrypt for secure password hashing
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
}

export function weakHashPasswordSHA1(password: string): string {
  // Using bcrypt for secure password hashing
  const saltRounds = 10;
  return bcrypt.hashSync(password, saltRounds);
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
