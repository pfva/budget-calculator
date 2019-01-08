import Base from '../../../base/Base.class';
import template from './Income.template';
import IncomeHeading from '../../atoms/income-heading/IncomeHeading.class';

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
  }

  getIncomeHeading() {
    this.incomeHeading = new IncomeHeading();
    return this.incomeHeading.template;
  }
}

Income.prototype.template = template;