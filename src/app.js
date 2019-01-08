import './base/array-methods';
import Base from './base/Base.class';
import Mainpage from './components/mainpage/Mainpage.class';
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
   * Runs in the constructor and runs everthing
   *
   */
  async start() {
    this.siteHeader = new SiteHeader();
    this.siteHeader.render('main');
    this.income = new Income();
    this.income.render('main');
    this.expenses = new Expenses();
    this.expenses.render('main');
    this.mainpage = new Mainpage();
    this.mainpage.render('main');
  }
}

const app = new App();