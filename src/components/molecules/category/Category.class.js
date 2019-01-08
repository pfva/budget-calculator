import Base from '../../../base/Base.class';
import template from './Category.template';

/**
 * Category component
 *
 */
export default class Category extends Base {

  constructor() {
    super();
    this.incomeCategoryNames = ['Salary', 'Benefits', 'Other Income'];
  }

}

Category.prototype.template = template;