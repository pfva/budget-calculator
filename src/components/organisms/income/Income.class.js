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

        let inputFieldsSumString = inputFieldsSum.toString();
        if(inputFieldsSumString.length >= 4 && inputFieldsSumString.length <= 6) {
          inputFieldsSum = inputFieldsSumString.substring(0, inputFieldsSumString.length - 3) + " " + inputFieldsSumString.substring(inputFieldsSumString.length - 3);
        }
        if(inputFieldsSumString.length >= 7 && inputFieldsSumString.length <= 9) {
          inputFieldsSum = inputFieldsSumString.substring(0, inputFieldsSumString.length - 6) + " " + inputFieldsSumString.substring(inputFieldsSumString.length - 6, inputFieldsSumString.length - 3) + " " + inputFieldsSumString.substring(inputFieldsSumString.length - 3);
        }

        incomeTotal.innerHTML = "$ " + inputFieldsSum;
      });
    }
  }
}

Income.prototype.template = template;