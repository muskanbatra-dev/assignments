function explainParseInt(value) {
  console.log("Original Value:", value);
  const result = parseInt(value);
  console.log("After ParseInt:", result);
}

explainParseInt("42");
explainParseInt("42px");
explainParseInt("3.14");

function explainParseFloat(value) {
  console.log("Original Value:", value);
  const result = parseFloat(value);
  console.log("After ParseInt:", result);
}

explainParseFloat("3.14"); // 3.14
explainParseFloat("10.00abc"); // 10
explainParseFloat("   5.5  "); // 5.5
explainParseFloat("abc123"); // NaN
explainParseFloat("3.14.15"); // 3.14 (parses until second dot)
explainParseFloat("100"); // 100

// It reads the string from left to right and parses as much of it as possible into a valid floating-point number.
// If the string starts with something that cannot be converted into a number, it returns NaN (Not a Number).
// It ignores trailing non-numeric characters.
