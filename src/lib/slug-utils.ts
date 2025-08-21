/**
 * Utility functions for generating clean URL slugs from medical terminology
 */

/**
 * Converts medical terms to URL-safe slugs
 * Removes special characters like /, -, and other non-alphanumeric characters
 * @param text - The text to convert to a slug
 * @returns URL-safe slug
 */
export function createMedicalSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[\/\-\,\.\(\)\s]+/g, '-') // Replace special chars and spaces with hyphens
    .replace(/^-+|-+$/g, '') // Remove leading/trailing hyphens
    .replace(/-+/g, '-'); // Replace multiple hyphens with single hyphen
}

/**
 * Reverses a slug back to match the original term format
 * @param slug - The URL slug to reverse
 * @param originalTerms - Array of original terms to match against
 * @returns The matching original term or undefined
 */
export function findTermFromSlug(slug: string, originalTerms: string[]): string | undefined {
  // First try exact match after slug conversion
  const exactMatch = originalTerms.find(term => createMedicalSlug(term) === slug);
  if (exactMatch) return exactMatch;
  
  // Then try fuzzy matching for common patterns
  const decodedSlug = decodeURIComponent(slug);
  return originalTerms.find(term => {
    const termLower = term.toLowerCase();
    const slugLower = decodedSlug.toLowerCase();
    return termLower === slugLower || 
           termLower.replace(/[\/\-\,\.\(\)\s]/g, '') === slugLower.replace(/[\/\-\,\.\(\)\s]/g, '');
  });
}

/**
 * Generates a unique key for React components from medical terms
 * Handles potential duplicates by adding index
 * @param term - The medical term
 * @param index - The index in the array
 * @returns Unique key for React
 */
export function createUniqueKey(term: string, index: number): string {
  return `${createMedicalSlug(term)}-${index}`;
}