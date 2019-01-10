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
    window.onload = () => {
      this.calculateIncomeTotal();
    }
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
        incomeTotal.innerHTML = inputFieldsSum;
      });
    }
  }
}

Income.prototype.template = template;