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
      <div class="input-group mb-3 d-flex">
        <div class="input-group-prepend w-75">
          <span class="input-group-text w-100" id="inputGroup-sizing-default">${name}</span>
        </div>
        <input type="text" class="form-control text-right" placeholder="kr" aria-label="Sum input" aria-describedby="inputGroup-sizing-default">
      </div>
    `;
  }).join('');
}

export {
  getIncomeCategories, 
  getExpensesCategories
}