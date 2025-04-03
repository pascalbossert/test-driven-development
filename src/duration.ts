// Takes an input and then splits it into hours, minutes, seconds and add a marker for each. Error if value below 0.
export function formatDuration(seconds: number): string {
  if (seconds < 0) {
    throw new Error("Duration cannot be negative");
  }
  
  const roundedSeconds = Math.round(seconds);
  const hours = Math.floor(roundedSeconds / 3600);
  const remainingMinuteSeconds = roundedSeconds % 3600;
  const minutes = Math.floor(remainingMinuteSeconds / 60);
  const remainingSeconds = remainingMinuteSeconds % 60;
  
  if (hours === 0 && minutes === 0) {
    return `${remainingSeconds}s`;
  }
  
  if (hours === 0) {
    if (remainingSeconds === 0) {
      return `${minutes}m`;
    }
    return `${minutes}m${remainingSeconds}s`;
  }
  
  if (minutes === 0 && remainingSeconds === 0) {
    return `${hours}h`;
  }
  
  let result = `${hours}h`;
  if (minutes > 0) {
    result += `${minutes}m`;
  }
  if (remainingSeconds > 0) {
    result += `${remainingSeconds}s`;
  }
  
  return result;
}