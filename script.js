function calculateTip() {
  const bill = parseFloat(document.getElementById("bill").value);
  const tipPercent = parseFloat(document.getElementById("tip").value);

  if (isNaN(bill) || bill <= 0) {
    document.getElementById("result").innerText = "Please enter a valid bill amount.";
    return;
  }

  const tip = bill * tipPercent;
  const total = bill + tip;

  document.getElementById("result").innerText = 
    `Tip: ₹${tip.toFixed(2)}\nTotal: ₹${total.toFixed(2)}`;
}
