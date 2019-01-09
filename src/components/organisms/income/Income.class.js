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
}

Income.prototype.template = template;