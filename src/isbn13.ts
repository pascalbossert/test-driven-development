// ISBN-13 International Standard Book Number 13 digits implementation, for global publishing
export function isValid(isbn13: string): boolean {
  // Remove any hyphens or spaces
  const cleanedIsbn = isbn13.replace(/[-\s]/g, "");
  
  // Check if the input is a 13-digit number
  if (!/^\d{13}$/.test(cleanedIsbn)) {
    return false;
  }
  
  // Check if it starts with 978 or 979
  if (!cleanedIsbn.startsWith("978") && !cleanedIsbn.startsWith("979")) {
    return false;
  }
  
  // Calculate the checksum
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += parseInt(cleanedIsbn[i]) * (i % 2 === 0 ? 1 : 3);
  }
  
  const checkDigit = (10 - (sum % 10)) % 10;
  
  // Compare with the last digit
  return checkDigit === parseInt(cleanedIsbn[12]);
}