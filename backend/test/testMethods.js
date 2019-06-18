function runTest_ShitHead_canCardBePlayed(testSetup, testCase) {
  let testResult = DEFAULTTESTRESULT;
  testResult.test = {
    testSetup: testSetup,
    testCase: testCase
  };

  testResult.value = new ShitHead().canCardBePlayed(testCase.card, testSetup.stack);

  if (testResult.value != testCase.expectedResult) {
    testResult.passed = false;
  }

  return testResult;
}
