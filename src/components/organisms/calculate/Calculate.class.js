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
    return this.calculateText.template();
  }

  displayCalculateText() {
    let calculateButton = document.querySelector('.a-button');

    calculateButton.addEventListener("click", () => {
      let incomeTotal = document.querySelector('.m-total__sum--income');
      let expensesTotal = document.querySelector('.m-total__sum--expenses');

      // Clean up dollar-prefixed strings to number
      let incomeWithoutDollar = incomeTotal.innerHTML.slice(2);
      let incomeWithoutSpaces = incomeWithoutDollar.replace(/ /g, '');
      let incomeNumber = parseInt(incomeWithoutSpaces);
      let expensesWithoutDollar = expensesTotal.innerHTML.slice(2);
      let expensesWithoutSpaces = expensesWithoutDollar.replace(/ /g, '');
      let expensesNumber = parseInt(expensesWithoutSpaces);

      // Display correct part of template
      if(incomeNumber >= expensesNumber) {
        console.log("over");
        let calculateText = document.querySelector('.a-calculatetext-positive');
        calculateText.classList.remove('u-hidden');
        calculateText.classList.add('u-fadein');
      } else {
        console.log("under");
        let calculateText = document.querySelector('.a-calculatetext-negative');
        calculateText.classList.remove('u-hidden');
        calculateText.classList.add('u-fadein');
      }
      calculateButton.classList.add('disabled');
    });
  }
}

Calculate.prototype.template = template;