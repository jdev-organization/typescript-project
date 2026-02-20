import { processUserData } from "./userService";
import { calculatePrice } from "./pricing";
import { databaseQuery, getUserByEmail } from "./database";
import { runCommand, readFile, generateToken } from "./security";
import { deleteUserEndpoint, fetchUrl } from "./api";

// Unused import - code smell
import { unusedFunction } from "./utils";

// Hardcoded secret - security issue
const API_KEY = "sk-1234567890abcdef";
const PASSWORD = "admin123";
const AWS_ACCESS_KEY = "AKIAIOSFODNN7EXAMPLE";
const AWS_SECRET_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";
const GITHUB_TOKEN = "ghp_1234567890abcdefghijklmnopqrstuvwxyz";
const JWT_SECRET = "my-secret-key-12345";

// Magic numbers - code smell
function calculateDiscount(price: number): number {
  return price * 0.15; // Magic number
}

// Duplicated code - code smell
function validateEmail1(email: string): boolean {
  if (email.includes("@") && email.includes(".")) {
    return true;
  }
  return false;
}

function validateEmail2(email: string): boolean {
  if (email.includes("@") && email.includes(".")) {
    return true;
  }
  return false;
}

// High complexity - code smell
function complexFunction(
  a: number,
  b: number,
  c: number,
  d: number,
  e: number
): number {
  let result = 0;
  if (a > 0) {
    if (b > 0) {
      if (c > 0) {
        if (d > 0) {
          if (e > 0) {
            result = a + b + c + d + e;
          } else {
            result = a + b + c + d;
          }
        } else {
          if (e > 0) {
            result = a + b + c + e;
          } else {
            result = a + b + c;
          }
        }
      } else {
        if (d > 0) {
          if (e > 0) {
            result = a + b + d + e;
          } else {
            result = a + b + d;
          }
        } else {
          result = a + b;
        }
      }
    } else {
      result = a;
    }
  } else {
    result = 0;
  }
  return result;
}

// Unused variable - code smell
const unusedVariable = "this is never used";

// Dead code - code smell
if (false) {
  console.log("This will never execute");
}

// Missing error handling - code smell
async function fetchUserData(userId: string) {
  const response = await fetch(`/api/users/${userId}`);
  const data = await response.json();
  return data; // No error handling
}

// Console.log in production code - code smell
console.log("Starting application...");
console.log("API Key:", API_KEY); // Security issue - logging secrets

// Empty catch block - code smell
try {
  processUserData({ id: "123", name: "Test" });
} catch (error) {
  // Empty catch block
}

// Type any - code smell
function processData(data: any): any {
  return data.something.else;
}

// eval() usage - CRITICAL security issue
function executeUserCode(userCode: string): any {
  return eval(userCode); // Dangerous: allows code injection
}

// Dangerous innerHTML usage - XSS vulnerability
function setUserContent(elementId: string, userInput: string): void {
  // In browser context, this would be:
  // const element = document.getElementById(elementId);
  // if (element) {
  //   element.innerHTML = userInput; // XSS vulnerability
  // }
  // This is a security issue - no sanitization
  console.log(`Setting content for ${elementId}: ${userInput}`);
}

// SQL Injection vulnerability - security issue
function getUserById(userId: string) {
  const query = `SELECT * FROM users WHERE id = '${userId}'`;
  return databaseQuery(query);
}

// Main function
async function main() {
  const price = calculatePrice(100);
  const discount = calculateDiscount(price);

  const email1 = validateEmail1("test@example.com");
  const email2 = validateEmail2("test@example.com");

  const complex = complexFunction(1, 2, 3, 4, 5);

  const user = await getUserById("1' OR '1'='1"); // SQL injection attempt

  // Dangerous eval usage
  const result = executeUserCode("console.log('hacked')");

  // XSS vulnerability
  setUserContent("content", "<img src=x onerror=alert('XSS')>");

  // SQL injection
  getUserByEmail("admin' OR '1'='1");

  // Command injection
  runCommand("; rm -rf /");

  // Path traversal
  const fileContent = readFile("../../../etc/passwd");

  // Insecure token generation
  const token = generateToken();

  // SSRF vulnerability
  await fetchUrl("http://localhost:8080/admin");

  // Insecure API call
  deleteUserEndpoint("123");

  console.log("Price:", price);
  console.log("Discount:", discount);
  console.log("Complex result:", complex);
  console.log("AWS Key:", AWS_ACCESS_KEY); // Logging secrets
  console.log("Token:", token);
}

main();
