module.exports = {
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    testEnvironment: 'node',
    testTimeout: 10000,
    testRegex: '.*(.spec|.ispec).ts',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    roots: ['<rootDir>/test/integration'],
    modulePaths: ['<rootDir>'],
    globalSetup: '<rootDir>/test/jest/globalSetup.ts',
    //globalTeardown: '<rootDir>/test/jest/globalTeardown.ts',
}
