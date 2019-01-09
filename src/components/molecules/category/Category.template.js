function getIncomeCategories() {
  return this.incomeCategoryNames.map(name => {
    return `
      <div class="m-category">
        <p class="m-category__title">
          ${name}
        </p>
        <input type="text" class="m-category__input form-control text-right" placeholder="$" aria-label="Sum input">
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
        <input type="text" class="m-category__input form-control text-right" placeholder="$" aria-label="Sum input">
      </div>
    `;
  }).join('');
}

export {
  getIncomeCategories, 
  getExpensesCategories
}