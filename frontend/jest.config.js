module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!<rootDir>/src/**/*.test.{js,jsx}',
        '!<rootDir>/src/**/*.stories.{ts,tsx}',
        '!<rootDir>/src/serviceWorker.ts',
        '!<rootDir>/src/setupTest.ts',
        '!<rootDir>/src/react-app-env.d.ts',
        '!<rootDir>/src/internals/**/*.*',
        '!<rootDir>/src/types/*.d.ts',
    ],
    roots: ['<rootDir>/src'],
    testMatch: ['**/__tests__/**/?(*.)+(test).+(ts|tsx|js)'],
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        '.*\\.(((?<!st.)css)|less|styl|scss|sass)$':
            '<rootDir>/src/internals/mocks/cssModule.js',
        '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/src/internals/mocks/image.js',
    },
    globals: {
        navigator: {},
    },
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
        '\\.st\\.css?$': require.resolve('@stylable/jest'),
    },
    transformIgnorePatterns: [
        '/node_modules/(?!(.*?\\.st\\.css$))', // libraries publish .st.css files in their dist
    ],
    setupFilesAfterEnv: ['jest-extended', '<rootDir>/src/setupTests.ts'],
};
