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
}

Expenses.prototype.template = template;