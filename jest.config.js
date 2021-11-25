module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
  ],
  testPathIgnorePatterns: [
    "/node_modules",
    "/android",
    "/ios"
  ]
}