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

  addSpaceToEveryThousand(number) {
    let str = number.toString();
    if (number >= 0) {
      if (str.length >= 4 && str.length <= 6) {
        str =
          str.substring(0, str.length - 3) +
          ' ' +
          str.substring(str.length - 3);
      } else if (str.length >= 7 && str.length <= 9) {
        str =
          str.substring(0, str.length - 6) +
          ' ' +
          str.substring(str.length - 6, str.length - 3) +
          ' ' +
          str.substring(str.length - 3);
      }
    } else if (number < 0) {
      if (str.length >= 5 && str.length <= 7) {
        str =
          str.substring(0, str.length - 3) +
          ' ' +
          str.substring(str.length - 3);
      } else if (str.length >= 8 && str.length <= 10) {
        str =
          str.substring(0, str.length - 6) +
          ' ' +
          str.substring(str.length - 6, str.length - 3) +
          ' ' +
          str.substring(str.length - 3);
      }
    }
    return str;
  }

  displayCalculateText() {
    let calculateButton = document.querySelector('.a-button');
    calculateButton.addEventListener('click', () => {
      let incomeTotal = document.querySelector('.m-total__sum--income');
      let expensesTotal = document.querySelector('.m-total__sum--expenses');

      let incomeNumber = this.cleanupText(incomeTotal);
      let expensesNumber = this.cleanupText(expensesTotal);

      let totalSum = incomeNumber - expensesNumber;
      let totalString = this.addSpaceToEveryThousand(totalSum);

      let positiveCalculateText = document.querySelector(
        '.a-calculatetext-positive'
      );
      let negativeCalculateText = document.querySelector(
        '.a-calculatetext-negative'
      );
      if (incomeNumber >= expensesNumber) {
        let positiveSum = document.querySelector(
          '.a-calculatetext__main--sum-positive'
        );
        positiveSum.innerHTML = '$ ' + totalString;
        negativeCalculateText.classList.add('u-hidden');
        positiveCalculateText.classList.remove('u-hidden');
        positiveCalculateText.classList.add('u-fadein');
      } else {
        let negativeSum = document.querySelector(
          '.a-calculatetext__main--sum-negative'
        );
        negativeSum.innerHTML = '$ ' + totalString;
        positiveCalculateText.classList.add('u-hidden');
        negativeCalculateText.classList.remove('u-hidden');
        negativeCalculateText.classList.add('u-fadein');
      }

      window.setTimeout(function() {
        window.scrollBy({
          left: 0,
          top: 380,
          behavior: 'smooth'
        });
      }, 200);
    });
  }
}

Calculate.prototype.template = template;
