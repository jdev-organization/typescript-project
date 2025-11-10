// Unused function - code smell
export function unusedFunction(): void {
  console.log("This function is never called");
}

// Function with too many return statements - code smell
export function checkStatus(status: string): boolean {
  if (status === "active") {
    return true;
  }
  if (status === "pending") {
    return false;
  }
  if (status === "inactive") {
    return false;
  }
  if (status === "suspended") {
    return false;
  }
  if (status === "deleted") {
    return false;
  }
  if (status === "archived") {
    return false;
  }
  return false;
}

// Inefficient algorithm - code smell
export function findDuplicate(arr: number[]): number[] {
  const duplicates: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        if (!duplicates.includes(arr[i])) {
          duplicates.push(arr[i]);
        }
      }
    }
  }
  return duplicates; // O(n²) complexity, could be O(n)
}

// Missing null check - code smell
export function getProperty(obj: any, prop: string): any {
  return obj[prop].value; // Potential null reference
}

// Synchronous file operation - code smell
export function readConfig(): string {
  // Should use async file operations
  return "config data";
}
