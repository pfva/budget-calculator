function getIncomeCategories() {
  return this.incomeCategoryNames.map(name => {
    return `
      <div class="m-category">
        <p class="m-category__title">
          ${name}
        </p>
        <input type="number" class="m-category__input m-category__input--income form-control text-right" placeholder="$" aria-label="Sum input">
      </div>
    `;
  }).join('');
}

function getExpensesCategories() {
  return this.expensesCategoryNames.map(name => {
    return `
      <div class="m-category">
        <p class="m-category__title">
          ${name}
        </p>
        <input type="number" class="m-category__input m-category__input--expenses form-control text-right" placeholder="$" aria-label="Sum input">
      </div>
    `;
  }).join('');
}

export {
  getIncomeCategories, 
  getExpensesCategories
}