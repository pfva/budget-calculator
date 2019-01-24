export default function() {
  return `
    <div class="row justify-content-center">
      <div class="o-expenses col-12 col-md-8">
        ${this.getExpensesHeading()}

        ${this.getCategories()}

        ${this.getExpensesTotal()}
      </div>
    </div>
  `;
}
