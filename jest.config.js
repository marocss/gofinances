module.exports = {
  preset: "react-native",
  setupFilesAfterEnv: [
    "@testing-library/jest-native/extend-expect",
    "jest-styled-components" // no need for this too (works without it)
  ],
  testPathIgnorePatterns: [
    "/node_modules",
    "/android",
    "/ios"
  ]
}