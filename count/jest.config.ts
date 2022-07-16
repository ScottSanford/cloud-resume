export default {
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!aws-lambda)',
    'node_modules/@aws-sdk/(?!client-dynamodb)',
    'node_modules/@aws-sdk/(?!util-dynamodb)',
  ],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testMatch: ['**/tests/*.test.ts'],
}
