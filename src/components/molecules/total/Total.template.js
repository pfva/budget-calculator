function getIncomeTotal() {
  return `
    <div class="m-total">
      <p class="m-total__title">Total:</p>
      <p class="m-total__sum m-total__sum--income">13 500</p>
    </div>
  `;
}

function getExpensesTotal() {
  return `
    <div class="m-total">
      <p class="m-total__title">Total:</p>
      <p class="m-total__sum m-total__sum--expenses">- 9 500</p>
    </div>
  `;
}

export {
  getIncomeTotal,
  getExpensesTotal
}