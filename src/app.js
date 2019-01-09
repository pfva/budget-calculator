import './base/array-methods';
import Base from './base/Base.class';
import SiteHeader from './components/organisms/site-header/SiteHeader.class';
import Income from './components/organisms/income/Income.class';
import Expenses from './components/organisms/expenses/Expenses.class';
import '../scss/main.scss';

class App extends Base {
  constructor() {
    super();
    this.start();
  }

  /**
   * Runs in the constructor and renders 
   * all of the component templates
   *
   */
  async start() {
    this.siteHeader = new SiteHeader();
    this.siteHeader.render('main');
    this.income = new Income();
    this.income.render('main');
    this.expenses = new Expenses();
    this.expenses.render('main');
  }
}

const app = new App();