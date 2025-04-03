// Implementing Darts Variant 501
export function calcPoints(hits: string): number {
  if (!hits.trim()) {
    return 0;
  }
  
  const hitValues = hits.trim().split(" ").map(Number);
  let totalPoints = 0;
  
  for (let i = 0; i < hitValues.length; i += 2) {
    const multiplier = hitValues[i];
    const sectorValue = hitValues[i + 1] || 0; // Handle case where there's no sector value
    
    totalPoints += multiplier * sectorValue;
  }
  
  return totalPoints;
}

export function possibleCheckout(x: number): string {
  const remaining = 501 - x;
  
  // Check if remaining is a positive number
  if (remaining <= 0) {
    return "No checkout possible";
  }
  
  // Check if remaining is even (required for double checkout)
  if (remaining % 2 !== 0) {
    return "No checkout possible";
  }
  
  const neededDouble = remaining / 2;
  
  // Check if needed double is within valid range (1-20 or 25 for bull)
  if (neededDouble > 20 && neededDouble !== 25) {
    return "No checkout possible";
  }
  
  return `Double ${neededDouble}`;
}
