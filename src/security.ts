// File with explicit security vulnerabilities for testing

// Hardcoded secrets in various formats
const SECRET_KEY = "secret123";
const PRIVATE_KEY = "-----BEGIN RSA PRIVATE KEY-----\nMIIEpAIBAAKCAQEA...";
const DATABASE_URL = "postgresql://user:password@localhost/db";
const REDIS_PASSWORD = "redis123";
const MONGODB_URI = "mongodb://admin:password123@localhost:27017/mydb";

// Command injection vulnerability
import { exec } from "child_process";

export function runCommand(userInput: string): void {
  // Command injection - CRITICAL
  exec(`ls -la ${userInput}`, (error, stdout) => {
    console.log(stdout);
  });
}

export function runCommandSync(userInput: string): string {
  const path = require("path");
  const fs = require("fs");
  
  // Validate and sanitize the input path
  try {
    // Resolve to absolute path and normalize to prevent path traversal
    const safePath = path.resolve(path.normalize(userInput));
    
    // Optional: Add additional checks to restrict access to specific directories
    // For example, ensure the path is within a specific allowed directory
    
    // Read the file using fs instead of cat command
    return fs.readFileSync(safePath, "utf8");
  } catch (error) {
    // Handle errors appropriately
    if (error instanceof Error) {
      throw new Error(`Failed to read file: ${error.message}`);
    }
    throw error;
  }
}

// Path traversal vulnerability
import * as fs from "fs";

export function readFile(userPath: string): string {
  // Path traversal vulnerability
  return fs.readFileSync(userPath, "utf8");
}

// Insecure random number generation
export function generateToken(): string {
  // Math.random() is not cryptographically secure
  return Math.random().toString(36).substring(2, 15);
}

// Insecure comparison (timing attack)
export function comparePasswords(input: string, stored: string): boolean {
  // Vulnerable to timing attacks
  if (input.length !== stored.length) {
    return false;
  }
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== stored[i]) {
      return false;
    }
  }
  return true;
}

// Unsafe deserialization
export function deserializeUserData(data: string): any {
  // Using eval for deserialization - CRITICAL
  return eval(`(${data})`);
}

// Insecure cookie settings
export function setCookie(name: string, value: string): void {
  // Missing httpOnly, secure flags
  // In browser: document.cookie = `${name}=${value}`;
  // This would be insecure in a web context
  console.log(`Setting cookie: ${name}=${value}`);
}

// CORS misconfiguration
export function setCORSHeaders(): any {
  return {
    "Access-Control-Allow-Origin": "*", // Too permissive
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
  };
}

// Information disclosure
export function errorHandler(error: Error): string {
  // Exposing stack trace in production
  return `Error: ${error.message}\nStack: ${error.stack}`;
}

// Insecure redirect
export function redirect(url: string): void {
  // No validation of redirect URL
  // In browser: window.location.href = url;
  // This would be insecure - allows open redirect
  console.log(`Redirecting to: ${url}`);
}

// Hardcoded encryption key
const ENCRYPTION_KEY = "1234567890123456"; // 16 bytes but weak

export function encryptData(data: string): string {
  // Using hardcoded key
  const crypto = require("crypto");
  const cipher = crypto.createCipher("aes-256-cbc", ENCRYPTION_KEY);
  let encrypted = cipher.update(data, "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}
