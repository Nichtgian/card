const DEFAULTTESTRESULT = {
  passed: true,
  value: null,
  test: {
    testSetup: null,
    testCase: null
  }
}

runAllTests();
function runAllTests() {
  setupTest_ShitHead_canCardBePlayed();
}

function writeTestResult(testResult, testCase) {
  if (!testResult.passed) {
    console.error("failed! received(" + testResult.value + ") expected(" + testCase.expectedResult + ")");
  } else {
    console.log("passed!");
  }
}

function setupTest_ShitHead_canCardBePlayed() {
  let testConfigurations = [{
    testSetup: {
      stack: ['4', '5', '9']
    },
    testCases: [
      { card: '2', expectedResult: true },
      { card: '3', expectedResult: true },
      { card: '4', expectedResult: false },
      { card: '5', expectedResult: false },
      { card: '7', expectedResult: true },
      { card: '9', expectedResult: true },
      { card: '10', expectedResult: true },
      { card: 'Q', expectedResult: true },
      { card: 'K', expectedResult: true },
    ]}
  ];

  testConfigurations.forEach((testConfiguration) => {
    testConfiguration.testCases.forEach((testCase) => {
      writeTestResult(runTest_ShitHead_canCardBePlayed(testConfiguration.testSetup, testCase), testCase);
    });
  });
}
