import Base from '../../../base/Base.class';
import { positiveSum, negativeSum } from './CalculateText.template';

/**
 * CalculateText component
 *
 */
export default class CalculateText extends Base {

  constructor() {
    super();
  }
}

CalculateText.prototype.positiveSum = positiveSum;
CalculateText.prototype.negativeSum = negativeSum;