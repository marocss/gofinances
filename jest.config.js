module.exports = {
  preset: "jest-expo",
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "./jestSetupFile.js"
  ],
  testPathIgnorePatterns: [
    "/node_modules",
    "/android",
    "/ios"
  ]
}