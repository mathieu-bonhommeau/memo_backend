module.exports = {
    transform: {
        '^.+\\.ts?$': 'ts-jest',
    },
    testEnvironment: 'node',
    testTimeout: 10000,
    testRegex: '.*(.spec|.ispec).ts',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    roots: ['<rootDir>/test/unit'],
    modulePaths: ['<rootDir>'],
}
