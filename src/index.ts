import { processUserData } from "./userService";
import { calculatePrice } from "./pricing";
import { databaseQuery } from "./database";

// Unused import - code smell
import { unusedFunction } from "./utils";

// Hardcoded secret - security issue
const API_KEY = "sk-1234567890abcdef";
const PASSWORD = "admin123";

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

  console.log("Price:", price);
  console.log("Discount:", discount);
  console.log("Complex result:", complex);
}

main();
