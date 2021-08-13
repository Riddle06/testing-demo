module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  coverageDirectory: "../coverage",
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[t]sx?$",
  rootDir: "src",
  collectCoverageFrom: ["**/*.(t|j)s"],
};
