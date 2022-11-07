export default {
    transform: {
      "^.+\\.tsx?$": "ts-jest"
    }
  }
  moduleNameWrapper: {
    '\\.(gif|ttf|eot|svg|png)$'; '<rootDir>/test/__mocks__/fileMock.js'
  }