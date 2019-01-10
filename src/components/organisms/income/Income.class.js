import Base from '../../../base/Base.class';
import template from './Income.template';
import IncomeHeading from '../../atoms/income-heading/IncomeHeading.class';
import Category from '../../molecules/category/Category.class';
import Total from '../../molecules/total/Total.class';

/**
 * Income section
 *
 */
export default class Income extends Base {

  constructor() {
    super();
    this.start();
  }

  start() {
    this.getIncomeHeading();
    this.getCategories();
  }

  getIncomeHeading() {
    this.incomeHeading = new IncomeHeading();
    return this.incomeHeading.template;
  }

  getCategories() {
    this.categories = new Category();
    return this.categories.getIncomeCategories();
  }

  getIncomeTotal() {
    this.incomeTotal = new Total();
    return this.incomeTotal.getIncomeTotal();
  }

  calculateIncomeTotal() {
    let inputFields = document.querySelectorAll('.m-category__input--income');
    let inputFieldsSum = 0;
    let incomeTotal = document.querySelector('.m-total__sum--income');

    for(let i = 0; i < inputFields.length; i++) {
      inputFields[i].addEventListener("keyup", () => {
        inputFieldsSum = 0;
        for(let i = 0; i < inputFields.length; i++) {
          inputFieldsSum += Number(inputFields[i].value);
        }

        // Change this to a loop to adhere to DRY
        if(inputFieldsSum.toString().length > 7) {
          inputFieldsSum = inputFieldsSum.toString().substring(0, 2) + " " + inputFieldsSum.toString().substring(2, 5) + " " + inputFieldsSum.toString().substring(5);
        } else if(inputFieldsSum.toString().length > 6) {
          inputFieldsSum = inputFieldsSum.toString().substring(0, 1) + " " + inputFieldsSum.toString().substring(1, 4) + " " + inputFieldsSum.toString().substring(4);
        } else if (inputFieldsSum.toString().length > 5) {
          inputFieldsSum = inputFieldsSum.toString().substring(0, 3) + " " + inputFieldsSum.toString().substring(3);
        } else if (inputFieldsSum.toString().length > 4) {
          inputFieldsSum = inputFieldsSum.toString().substring(0, 2) + " " + inputFieldsSum.toString().substring(2);
        } else if (inputFieldsSum.toString().length > 3) {
          inputFieldsSum = inputFieldsSum.toString().substring(0, 1) + " " + inputFieldsSum.toString().substring(1);
        }

        incomeTotal.innerHTML = "$ " + inputFieldsSum;
      });
    }
  }
}

Income.prototype.template = template;