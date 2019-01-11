import Base from '../../../base/Base.class';
import template from './Calculate.template';
import Button from '../../atoms/button/Button.class';
import CalculateText from '../../atoms/calculate-text/CalculateText.class';

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
    this.getCalculateText();
  }

  getCalculateButton() {
    this.calculateButton = new Button();
    return this.calculateButton.template();
  }

  getCalculateText() {
    this.calculateText = new CalculateText();
    return this.calculateText.positiveSum();
  }

  showCalculateText() {
    let calculateButton = document.querySelector('.a-button');
    let calculateText = document.querySelector('.a-calculatetext');
    console.log(calculateButton);
    console.log(calculateText);

    calculateButton.addEventListener("click", () => {
      calculateText.classList.remove('u-hidden');
      calculateText.classList.add('u-fadein');
    });
  }
}

Calculate.prototype.template = template;