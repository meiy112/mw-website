import { EmailForm } from "./sendEmail";

// Returns current time (12 hour clock) in string form
export const getCurrentTimeString = (): string => {
  const now: Date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true, // Use 12-hour format with AM/PM
  };

  const currentTimeString: string = now.toLocaleTimeString("en-US", options);

  return currentTimeString;
};

// Converts string to lowercase and removes punctuation
export const normalizeString = (inputString: string): string => {
  const lowercasedString = inputString.toLowerCase();

  const cleanedString = lowercasedString.replace(/[^a-zA-Z0-9\s]/g, "");

  return cleanedString;
};

export const emailFormIsValid = (email: EmailForm) => {
  return (
    isValidEmail(email.getEmail) &&
    email.getEmail != "" &&
    email.getMessage != "" &&
    email.getName != ""
  );
};

export function isValidEmail(email: string): boolean {
  // Regular expression for email validation
  // This regex follows the general syntax of an email address:
  // - Local part: One or more characters (letters, digits, special characters)
  // - Domain part: Domain followed by a top-level domain
  // - The domain part must contain at least one dot (`.`)
  // The regex pattern also allows underscores, dots, and hyphens in the local part
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Test the email against the regex pattern
  return emailRegex.test(email);
}

export function calculateDailyTime(response: { data: any[] }) {
  if (!response || !response.data || !Array.isArray(response.data)) {
    throw new Error("Invalid response format");
  }

  const totalSeconds = response.data.reduce(
    (sum, entry) => sum + (entry.duration || 0),
    0
  );

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.ceil((totalSeconds % 3600) / 60);

  return {
    hours: hours,
    minutes: minutes,
  };
}
