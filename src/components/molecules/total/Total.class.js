import Base from '../../../base/Base.class';
import { getIncomeTotal, getExpensesTotal } from './Total.template';

/**
 * Total component
 *
 */
export default class Total extends Base {
  constructor() {
    super();
  }
}

Total.prototype.getIncomeTotal = getIncomeTotal;
Total.prototype.getExpensesTotal = getExpensesTotal;
