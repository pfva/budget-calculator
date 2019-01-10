function getIncomeTotal() {
  return `
    <div class="m-total">
      <p class="m-total__title">Total:</p>
      <p class="m-total__sum m-total__sum--income"></p>
    </div>
  `;
}

function getExpensesTotal() {
  return `
    <div class="m-total">
      <p class="m-total__title">Total:</p>
      <p class="m-total__sum m-total__sum--expenses"></p>
    </div>
  `;
}

export {
  getIncomeTotal,
  getExpensesTotal
}