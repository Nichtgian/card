class TestResult {
  constructor(testSetup, testCase) {
    this.passed = true;
    this.result = null;
    this.expectedResult = testCase.expectedResult;
    this.stack = testSetup.stack.toString();
    this.card = testCase.card;
  }
}

runAllTests();
function runAllTests() {
  console.table(setupTest_ShitHead_canCardBePlayed());

  let results = setupTest_ShitHead_canCardBePlayed();
  let unit = "test";

  console.groupCollapsed('Testing unit: %s', unit);
  for (var r in results) {
      var res = results[r];
      console.groupCollapsed('%c  %c' + res.passed, 'background-color: ' + (res.passed == 'false' ? 'red' : 'green') + '; margin-right: 10px', 'background-color: transparent');
      console.table({
          Result:   {value: res.result},
          Function: {value: res.expectedResult},
          Asserted: {value: res.stack},
          Returned: {value: res.card}
      });
      console.groupEnd();
  }
  console.groupEnd();

  setTimeout(() => {
    console.clear();
  }, 20000);
}

function writeTestResult(testResult, testCase) {
  if (!testResult.passed) {
    console.error("failed! received(" + testResult.result + ") expected(" + testCase.expectedResult + ")");
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
    ]}, {
    testSetup: {
      stack: ['4', '5', '6', '3', '3']
    },
    testCases: [
      { card: '2', expectedResult: true },
      { card: '7', expectedResult: false },
      { card: '8', expectedResult: true }
    ]}, {
    testSetup: {
      stack: ['3', '3']
    },
    testCases: [
      { card: '2', expectedResult: true },
      { card: '7', expectedResult: true },
      { card: '4', expectedResult: true },
      { card: 'A', expectedResult: true }
    ]}, {
    testSetup: {
      stack: []
    },
    testCases: [
      { card: '2', expectedResult: true },
      { card: '7', expectedResult: true },
      { card: '4', expectedResult: true },
      { card: 'A', expectedResult: true }
    ]}
  ];

  let testResults = [];
  testConfigurations.forEach((testConfiguration) => {
    testConfiguration.testCases.forEach((testCase) => {
      testResults.push(runTest_ShitHead_canCardBePlayed(testConfiguration.testSetup, testCase));
    });
  });

  return testResults;
}

function runTest_ShitHead_canCardBePlayed(testSetup, testCase) {
  let testResult = new TestResult(testSetup, testCase);

  testResult.result = new ShitHead().isCardPlayable(testCase.card, testSetup.stack);

  if (testResult.result != testCase.expectedResult) {
    testResult.passed = false;
  }

  return testResult;
}
