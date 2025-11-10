// Missing return type - code smell
export function processUserData(user: { id: string; name: string }) {
  // Missing validation
  const processed = {
    id: user.id,
    name: user.name.toUpperCase(),
    timestamp: Date.now(),
  };

  // Potential null reference - code smell
  return processed.name.toLowerCase();
}

// Too many parameters - code smell
export function createUser(
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  address: string,
  city: string,
  state: string,
  zipCode: string,
  country: string
): void {
  console.log("Creating user with", firstName, lastName);
}

// Inconsistent naming - code smell
export const user_ID = "123";
export const userName = "test";
export const UserEmail = "test@example.com";

// Long function - code smell
export function longFunction() {
  const step1 = "step1";
  const step2 = "step2";
  const step3 = "step3";
  const step4 = "step4";
  const step5 = "step5";
  const step6 = "step6";
  const step7 = "step7";
  const step8 = "step8";
  const step9 = "step9";
  const step10 = "step10";
  const step11 = "step11";
  const step12 = "step12";
  const step13 = "step13";
  const step14 = "step14";
  const step15 = "step15";
  const step16 = "step16";
  const step17 = "step17";
  const step18 = "step18";
  const step19 = "step19";
  const step20 = "step20";
  const step21 = "step21";
  const step22 = "step22";
  const step23 = "step23";
  const step24 = "step24";
  const step25 = "step25";
  const step26 = "step26";
  const step27 = "step27";
  const step28 = "step28";
  const step29 = "step29";
  const step30 = "step30";

  return step1 + step2 + step3 + step4 + step5;
}
