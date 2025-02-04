module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: "<rootDir>/src/jest.setup", // Обновленный путь
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
};
