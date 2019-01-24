export default function() {
  return `
    <div class="row justify-content-center">
      <div class="o-income col-12 col-md-8">
        ${this.getIncomeHeading()}

        ${this.getCategories()}

        ${this.getIncomeTotal()}
      </div>
    </div>
  `;
}
