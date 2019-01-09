import Base from '../../../base/Base.class';
import { getIncomeCategories, getExpensesCategories } from './Category.template';

/**
 * Category component
 *
 */
export default class Category extends Base {

  constructor() {
    super();
    this.incomeCategoryNames = ['Salary', 'Benefits', 'Other Income'];
    this.expensesCategoryNames = ['Rent', 'Mortgage', 'Electricity', 'Heating/Water', 'Food', 'Insurance', 'Car/Transport', 'Leisure', 'Savings'];
  }

}

Category.prototype.getIncomeCategories = getIncomeCategories;
Category.prototype.getExpensesCategories = getExpensesCategories;