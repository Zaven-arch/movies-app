module.exports = {
  preset: 'ts-jest', // Use ts-jest preset
  testEnvironment: 'jest-environment-jsdom', // Specify jsdom for React testing
  setupFilesAfterEnv: ['@testing-library/jest-dom'], // Add jest-dom matchers
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'], // Support JS and TS files,
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Map @ to the src directory,
  },
}
