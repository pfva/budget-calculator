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

  cleanupText(string) {
    string = string.innerHTML.slice(2);
    string = string.replace(/ /g, '');
    string = parseInt(string);
    return string;
  }

  displayCalculateText() {
    let calculateButton = document.querySelector('.a-button');
    calculateButton.addEventListener("click", () => {
      let incomeTotal = document.querySelector('.m-total__sum--income');
      let expensesTotal = document.querySelector('.m-total__sum--expenses');

      let incomeNumber = this.cleanupText(incomeTotal);
      let expensesNumber = this.cleanupText(expensesTotal);

      let totalSum = incomeNumber - expensesNumber;
      let totalStr = totalSum.toString();
      if(totalSum >= 0) {
        if(totalStr.length >= 4 && totalStr.length <= 6) {
          totalStr = totalStr.substring(0, totalStr.length - 3) + " " + totalStr.substring(totalStr.length - 3);
        } else if(totalStr.length >= 7 && totalStr.length <= 9) {
          totalStr = totalStr.substring(0, totalStr.length - 6) + " " + totalStr.substring(totalStr.length - 6, totalStr.length - 3) + " " + totalStr.substring(totalStr.length - 3);
        }
      } else if(totalSum < 0) {
        if(totalStr.length >= 5 && totalStr.length <= 7) {
          totalStr = totalStr.substring(0, totalStr.length - 3) + " " + totalStr.substring(totalStr.length - 3);
        } else if(totalStr.length >= 8 && totalStr.length <= 10) {
          totalStr = totalStr.substring(0, totalStr.length - 6) + " " + totalStr.substring(totalStr.length - 6, totalStr.length - 3) + " " + totalStr.substring(totalStr.length - 3);
        }
      }

      // Display correct part of template
      let positiveCalculateText = document.querySelector('.a-calculatetext-positive');
      let negativeCalculateText = document.querySelector('.a-calculatetext-negative');

      if(incomeNumber >= expensesNumber) {
        let positiveSum = document.querySelector('.a-calculatetext__main--sum-positive');
        positiveSum.innerHTML = "$ " + totalStr;
        negativeCalculateText.classList.add('u-hidden');
        positiveCalculateText.classList.remove('u-hidden');
        positiveCalculateText.classList.add('u-fadein');
      } else {
        let negativeSum = document.querySelector('.a-calculatetext__main--sum-negative');
        negativeSum.innerHTML = "$ " + totalStr;
        positiveCalculateText.classList.add('u-hidden');
        negativeCalculateText.classList.remove('u-hidden');
        negativeCalculateText.classList.add('u-fadein');
      }
    });
  }
}

Calculate.prototype.template = template;