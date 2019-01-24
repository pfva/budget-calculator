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

  animateNextArrow() {
    let inputFields = document.querySelectorAll('.m-category__input--income');
    let lastInput = inputFields[inputFields.length - 1];
    lastInput.addEventListener('blur', () => {
      let incomeArrow = document.querySelector('.a-incomeheading__arrow-icon');
      incomeArrow.classList.remove('u-hovering');
      let expensesArrow = document.querySelector(
        '.a-expensesheading__arrow-icon'
      );
      expensesArrow.classList.add('u-hovering');
    });
  }

  calculateIncomeTotal() {
    let inputFields = document.querySelectorAll('.m-category__input--income');
    let inputFieldsSum = 0;
    let incomeTotal = document.querySelector('.m-total__sum--income');

    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].addEventListener('keyup', () => {
        inputFieldsSum = 0;
        for (let i = 0; i < inputFields.length; i++) {
          inputFieldsSum += Number(inputFields[i].value);
        }

        let totalStr = inputFieldsSum.toString();
        if (totalStr.length >= 4 && totalStr.length <= 6) {
          inputFieldsSum =
            totalStr.substring(0, totalStr.length - 3) +
            ' ' +
            totalStr.substring(totalStr.length - 3);
        }
        if (totalStr.length >= 7 && totalStr.length <= 9) {
          inputFieldsSum =
            totalStr.substring(0, totalStr.length - 6) +
            ' ' +
            totalStr.substring(totalStr.length - 6, totalStr.length - 3) +
            ' ' +
            totalStr.substring(totalStr.length - 3);
        }

        incomeTotal.innerHTML = '$ ' + inputFieldsSum;
      });
    }
  }
}

Income.prototype.template = template;
