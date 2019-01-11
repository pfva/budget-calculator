import Base from '../../../base/Base.class';
import template from './Calculate.template';
import Button from '../../atoms/button/Button.class';

/**
 * Area for calculation
 *
 */
export default class Calculate extends Base {

  constructor() {
    super();
    this.start();
  }

  start() {
    this.getCalculateButton();
  }

  getCalculateButton() {
    this.calculateButton = new Button();
    return this.calculateButton.template();
  }
}

Calculate.prototype.template = template;