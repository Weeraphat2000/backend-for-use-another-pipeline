/**
 * Utility functions for the backend application
 */

/**
 * Calculate the sum of an array of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} Sum of all numbers
 */
function sum(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error('Input must be an array');
  }
  return numbers.reduce((acc, num) => acc + num, 0);
}

/**
 * Calculate the average of an array of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} Average of all numbers
 */
function average(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) {
    throw new Error('Input must be a non-empty array');
  }
  return sum(numbers) / numbers.length;
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Format user data
 * @param {object} user - User object
 * @returns {object} Formatted user object
 */
function formatUser(user) {
  if (!user || !user.name) {
    throw new Error('User must have a name');
  }
  return {
    ...user,
    displayName: user.name.toUpperCase(),
    createdAt: new Date().toISOString(),
  };
}

/**
 * Paginate an array
 * @param {array} items - Items to paginate
 * @param {number} page - Page number (1-based)
 * @param {number} limit - Items per page
 * @returns {object} Paginated result
 */
function paginate(items, page = 1, limit = 10) {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  return {
    data: items.slice(startIndex, endIndex),
    pagination: {
      page,
      limit,
      total: items.length,
      totalPages: Math.ceil(items.length / limit),
    },
  };
}

module.exports = {
  sum,
  average,
  isValidEmail,
  formatUser,
  paginate,
};
