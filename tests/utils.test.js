const { sum, average, isValidEmail, formatUser, paginate } = require('../src/utils');

describe('Utils', () => {
  describe('sum', () => {
    test('should return sum of array of numbers', () => {
      expect(sum([1, 2, 3, 4, 5])).toBe(15);
    });

    test('should return 0 for empty array', () => {
      expect(sum([])).toBe(0);
    });

    test('should handle negative numbers', () => {
      expect(sum([-1, -2, 3])).toBe(0);
    });

    test('should throw error for non-array input', () => {
      expect(() => sum('not an array')).toThrow('Input must be an array');
    });
  });

  describe('average', () => {
    test('should calculate average of numbers', () => {
      expect(average([2, 4, 6])).toBe(4);
    });

    test('should handle decimal results', () => {
      expect(average([1, 2, 3])).toBeCloseTo(2);
    });

    test('should throw error for empty array', () => {
      expect(() => average([])).toThrow('Input must be a non-empty array');
    });

    test('should throw error for non-array input', () => {
      expect(() => average(null)).toThrow('Input must be a non-empty array');
    });
  });

  describe('isValidEmail', () => {
    test('should return true for valid email', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
    });

    test('should return true for email with subdomain', () => {
      expect(isValidEmail('user@mail.example.com')).toBe(true);
    });

    test('should return false for invalid email without @', () => {
      expect(isValidEmail('invalid-email')).toBe(false);
    });

    test('should return false for email without domain', () => {
      expect(isValidEmail('user@')).toBe(false);
    });

    test('should return false for email with spaces', () => {
      expect(isValidEmail('user @example.com')).toBe(false);
    });
  });

  describe('formatUser', () => {
    test('should format user with uppercase displayName', () => {
      const user = { id: 1, name: 'John Doe', email: 'john@example.com' };
      const formatted = formatUser(user);

      expect(formatted.displayName).toBe('JOHN DOE');
      expect(formatted.createdAt).toBeDefined();
      expect(formatted.id).toBe(1);
    });

    test('should throw error for user without name', () => {
      expect(() => formatUser({ email: 'test@example.com' })).toThrow('User must have a name');
    });

    test('should throw error for null user', () => {
      expect(() => formatUser(null)).toThrow('User must have a name');
    });
  });

  describe('paginate', () => {
    const items = Array.from({ length: 25 }, (_, i) => ({ id: i + 1 }));

    test('should return first page of items', () => {
      const result = paginate(items, 1, 10);

      expect(result.data.length).toBe(10);
      expect(result.data[0].id).toBe(1);
      expect(result.pagination.page).toBe(1);
      expect(result.pagination.total).toBe(25);
      expect(result.pagination.totalPages).toBe(3);
    });

    test('should return second page of items', () => {
      const result = paginate(items, 2, 10);

      expect(result.data.length).toBe(10);
      expect(result.data[0].id).toBe(11);
    });

    test('should return partial last page', () => {
      const result = paginate(items, 3, 10);

      expect(result.data.length).toBe(5);
      expect(result.data[0].id).toBe(21);
    });

    test('should use default values', () => {
      const result = paginate(items);

      expect(result.pagination.page).toBe(1);
      expect(result.pagination.limit).toBe(10);
    });
  });
});
