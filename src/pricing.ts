// Missing JSDoc - code smell
export function calculatePrice(basePrice: number): number {
  // Hardcoded values - code smell
  const tax = 0.08;
  const shipping = 5.99;
  const serviceFee = 2.5;

  return basePrice + basePrice * tax + shipping + serviceFee;
}

// Switch without default - code smell
export function getDiscountCode(level: string): number {
  switch (level) {
    case "bronze":
      return 0.05;
    case "silver":
      return 0.1;
    case "gold":
      return 0.15;
    // Missing default case
  }
  return 0;
}

// Nested ternary - code smell
export function getStatus(isActive: boolean, isPremium: boolean): string {
  return isActive ? (isPremium ? "premium-active" : "active") : "inactive";
}

// Assignment in condition - code smell
export function checkValue(value: number): boolean {
  if ((value = 10)) {
    // Should be == or ===
    return true;
  }
  return false;
}
