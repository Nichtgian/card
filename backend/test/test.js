class TestResult {
  constructor(testSetup, testCase) {
    this.passed = true;
    this.result = null;
    this.test = {
      setup: testSetup,
      case: testCase
    }
  }
}

runAllTests();
function runAllTests() {
  writeTestResults(setupTest_ShitHead_canCardBePlayed());
  setTimeout(() => {
    console.clear();
  }, 120000);
}

function writeTestResults(testResults) {
  console.groupCollapsed('Test ShitHead_canCardBePlayed');
  testResults.forEach((result) => {
    console.groupCollapsed('%c__%c' + (result.passed == false ? ' failed' : ' passed'),
      'background-color: ' + (result.passed == false ? 'red' : 'green'),
      'background-color: transparent');
    console.table({
        Result: { value: result.result },
        Expected: { value: result.test.case.expectedResult },
        TestSetup: { value: result.test.setup },
        TestCase: { value: result.test.case }
    });
    console.groupEnd();
  });
  console.groupEnd();
}

function setupTest_ShitHead_canCardBePlayed() {
  let testConfigurations = [{
    testSetup: {
      stack: ['4', '5', '9']
    },
    testCases: [
      { card: '2', expectedResult: true },
      { card: '3', expectedResult: false },
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
