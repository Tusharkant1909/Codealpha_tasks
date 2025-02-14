// Append value to the result field
function appendValue(value) {
    const resultField = document.getElementById("result");
    resultField.value += value;
  }
  
  // Clear the entire result field
  function clearResult() {
    document.getElementById("result").value = "";
  }
  
  // Delete the last character from the result field
  function deleteValue() {
    const resultField = document.getElementById("result");
    resultField.value = resultField.value.slice(0, -1);
  }
  
  // Perform the calculation and display the result
  function calculateResult() {
    try {
      const resultField = document.getElementById("result");
      if (resultField.value.trim() === "") {
        alert("Please enter a valid expression!");
        return;
      }
      const expression = resultField.value;
      const result = eval(expression);
      resultField.value = Number.isFinite(result) ? parseFloat(result.toFixed(10)) : "Error";
    } catch (error) {
      alert("Invalid Calculation!");
    }
  }
  
  // Calculate square root
  function calculateSquareRoot() {
    const resultField = document.getElementById("result");
    if (resultField.value.trim() !== "") {
      resultField.value = Math.sqrt(parseFloat(resultField.value)).toFixed(10);
    } else {
      alert("Please enter a number!");
    }
  }
  
  // Calculate percentage
  function calculatePercentage() {
    const resultField = document.getElementById("result");
    if (resultField.value.trim() !== "") {
      resultField.value = (parseFloat(resultField.value) / 100).toFixed(10);
    } else {
      alert("Please enter a number!");
    }
  }
  
  // Calculate power
  function calculatePower() {
    const base = prompt("Enter the base:");
    const exponent = prompt("Enter the exponent:");
    if (base !== null && exponent !== null) {
      document.getElementById("result").value = Math.pow(base, exponent).toFixed(10);
    }
  }
  
  // Memory functions
  let memoryValue = 0;
  
  function memoryClear() {
    memoryValue = 0;
    alert("Memory Cleared");
  }
  
  function memoryRecall() {
    document.getElementById("result").value += memoryValue;
  }
  
  function memoryAdd() {
    const resultField = document.getElementById("result");
    if (resultField.value.trim() !== "") {
      memoryValue += parseFloat(resultField.value);
      alert("Value Added to Memory");
    }
  }
  
  function memorySubtract() {
    const resultField = document.getElementById("result");
    if (resultField.value.trim() !== "") {
      memoryValue -= parseFloat(resultField.value);
      alert("Value Subtracted from Memory");
    }
  }
  
  // Handle keyboard input
  document.addEventListener("keydown", function (event) {
    const resultField = document.getElementById("result");
    if (!isNaN(event.key) || "+-*/.".includes(event.key)) {
      appendValue(event.key);
    } else if (event.key === "Enter") {
      event.preventDefault();
      calculateResult();
    } else if (event.key === "Backspace") {
      deleteValue();
    } else if (event.key === "Escape") {
      clearResult();
    }
  });