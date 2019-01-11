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
    this.expensesCategoryNames = ['Rent/Mortgage', 'Electricity', 'Heating/Water', 'Food/Groceries', 'Insurance', 'Transportation', 'Phone and Internet', 'Clothing and shoes', 'Debt', 'Savings', 'Entertainment'];
  }

}

Category.prototype.getIncomeCategories = getIncomeCategories;
Category.prototype.getExpensesCategories = getExpensesCategories;