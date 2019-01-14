import Base from '../../../base/Base.class';
import template from './Expenses.template';
import ExpensesHeading from '../../atoms/expenses-heading/ExpensesHeading.class';
import Category from '../../molecules/category/Category.class';
import Total from '../../molecules/total/Total.class';

/**
 * Expenses section
 *
 */
export default class Expenses extends Base {

  constructor() {
    super();
    this.start();
  }

  start() {
    this.getExpensesHeading();
    this.getCategories();
  }

  getExpensesHeading() {
    this.expensesHeading = new ExpensesHeading();
    return this.expensesHeading.template;
  }

  getCategories() {
    this.categories = new Category();
    return this.categories.getExpensesCategories();
  }

  getExpensesTotal() {
    this.expensesTotal = new Total();
    return this.expensesTotal.getExpensesTotal();
  }

  calculateExpensesTotal() {
    let inputFields = document.querySelectorAll('.m-category__input--expenses');
    let inputFieldsSum = 0;
    let expensesTotal = document.querySelector('.m-total__sum--expenses');

    for(let i = 0; i < inputFields.length; i++) {
      inputFields[i].addEventListener("keyup", () => {
        inputFieldsSum = 0;
        for(let i = 0; i < inputFields.length; i++) {
          inputFieldsSum += Number(inputFields[i].value);
        }

        let totalStr = inputFieldsSum.toString();
        if(totalStr.length >= 4 && totalStr.length <= 6) {
          inputFieldsSum = totalStr.substring(0, totalStr.length - 3) + " " + totalStr.substring(totalStr.length - 3);
        }
        if(totalStr.length >= 7 && totalStr.length <= 9) {
          inputFieldsSum = totalStr.substring(0, totalStr.length - 6) + " " + totalStr.substring(totalStr.length - 6, totalStr.length - 3) + " " + totalStr.substring(totalStr.length - 3);
        }

        expensesTotal.innerHTML = "$ " + inputFieldsSum;
      });
    }
  }
}

Expenses.prototype.template = template;