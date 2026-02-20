// API endpoints with security vulnerabilities

import { getUserByEmail, deleteUser, updateUser } from "./database";
import { runCommand } from "./security";

// Missing authentication/authorization
export function deleteUserEndpoint(userId: string): void {
  // No authentication check
  deleteUser(userId);
}

// Missing rate limiting
export function loginEndpoint(username: string, password: string): any {
  // No rate limiting - vulnerable to brute force
  if (username === "admin" && password === "admin123") {
    return { token: "fake-token" };
  }
  return { error: "Invalid credentials" };
}

// Missing input validation
export function searchEndpoint(query: string): any {
  // No validation - can cause issues
  return getUserByEmail(query);
}

// Missing CSRF protection
export function updateProfileEndpoint(userId: string, data: any): void {
  // No CSRF token validation
  updateUser(userId, "name", data.name);
}

// Insecure direct object reference
export function getUserDataEndpoint(userId: string): any {
  // No authorization check - users can access other users' data
  return { id: userId, email: "user@example.com", balance: 1000 };
}

// Server-Side Request Forgery (SSRF)
export function fetchUrl(url: string): Promise<any> {
  // No URL validation - SSRF vulnerability
  return fetch(url).then((res) => res.json());
}

// XML External Entity (XXE) - if using XML parser
export function parseXML(xmlString: string): any {
  // Would be vulnerable if using XML parser without proper config
  return { parsed: xmlString };
}

// Insecure direct object reference in file operations
export function downloadFile(filename: string): void {
  // No path validation
  const fs = require("node:fs");
  const fileContent = fs.readFileSync(`/uploads/${filename}`);
  return fileContent;
}

// Command injection via API
export function executeSystemCommand(command: string): void {
  // Command injection vulnerability
  runCommand(command);
}
