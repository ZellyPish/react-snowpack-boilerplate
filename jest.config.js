const snowpackJestConfig = require('@snowpack/app-scripts-react/jest.config.js')()

module.exports = {
  ...snowpackJestConfig,
  verbose: false,
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '<rootDir>/build'],
  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],

  // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
  testMatch: ['<rootDir>/src/**/?(*.)+(spec|test).[jt]s?(x)'],
  moduleNameMapper: {
    // Snowpack 설정의 alias를 그대로 가져와서 쓸 수 없어서 jest에서 사용하는 방식으로 설정한다.
    // 키와 밸류는 String.prototype.replace 메소드의 파라미터에 차례대로 들어간다고 보면 된다.
    '^__mocks__(/?.*)$': '<rootDir>/src/__mocks__$1',
    '^components(/?.*)$': '<rootDir>/src/components$1',
    '^hooks(/?.*)$': '<rootDir>/src/hooks$1',
    '^styles(/?.*)$': '<rootDir>/src/styles$1',
    '^utils(/?.*)$': '<rootDir>/src/utils$1',
  },
}
