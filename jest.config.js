module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts",
    "!src/server.ts",
    "!src/configs/**/*",
    "!src/database/migrations/**/*"
  ],
  preset: 'ts-jest',
  testEnvironment: "node"
}
