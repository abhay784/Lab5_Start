// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
  // phone number tests
  // Tests that should return true
  test('returns true for valid phone number (333) 444-7890', () => {
    expect(isPhoneNumber('(333) 444-7890')).toBe(true);
  });

  test('returns true for valid phone number 310-610-1617', () => {
    expect(isPhoneNumber('310-610-1617')).toBe(true);
  });

  // Tests that should return false
  test('returns false for invalid phone number 3334447890', () => {
    expect(isPhoneNumber('3334447890')).toBe(false);
  });

  test('returns false for invalid phone number (123) 456 7890', () => {
    expect(isPhoneNumber('(123) 456 7890')).toBe(false);
  });
  // email tests
  // Tests that should return true
  test('returns true for valid email user@example.com', () => {
    expect(isEmail('user@example.com')).toBe(true);
  });

  test('returns true for valid email test123@domain.org', () => {
    expect(isEmail('test123@domain.org')).toBe(true);
  });

  // Tests that should return false
  test('returns false for invalid email exampleacc.com', () => {
    expect(isEmail('exampleacc.com')).toBe(false);
  });

  test('returns false for email with dot in username john.doe@company.com', () => {
    expect(isEmail('john.doe@company.com')).toBe(false);
  });
  // password tests
  // Tests that should return true
  test('should return true for strong password Pass1234', () => {
    expect(isStrongPassword('Pass1234')).toBe(true);
  });

  test('should return true for strong password A_valid_pw', () => {
    expect(isStrongPassword('A_valid_pw')).toBe(true);
  });

  // Tests that should return false
  test('should return false for weak password cat', () => {
    expect(isStrongPassword('cat')).toBe(false);
  });

  test('should return false for password starting with number 1Password', () => {
    expect(isStrongPassword('1Password')).toBe(false);
  });

  // date tests
  // Tests that should return true
  test('should return true for valid date 10/25/2023', () => {
    expect(isDate('10/25/2023')).toBe(true);
  });

  test('should return true for valid date 1/1/2047', () => {
    expect(isDate('1/1/2047')).toBe(true);
  });

  // Tests that should return false
  test('should return false for date with dashes 11-25-2023', () => {
    expect(isDate('11-25-2023')).toBe(false);
  });

  test('should return false for date with 3-digit year 10/25/202', () => {
    expect(isDate('10/25/202')).toBe(false);
  });


  //hex tests
  // Tests that should return true
  test('should return true for valid hex color #FF5733', () => {
    expect(isHexColor('#FF5733')).toBe(true);
  });

  test('should return true for valid 3-digit hex color abc', () => {
    expect(isHexColor('abc')).toBe(true);
  });

  // Tests that should return false
  test('should return false for invalid hex color #GGGGGG', () => {
    expect(isHexColor('#GGGGGG')).toBe(false);
  });

  test('should return false for rgba format rgba(9, 130, 244, 1)', () => {
    expect(isHexColor('rgba(9, 130, 244, 1)')).toBe(false);
  });
