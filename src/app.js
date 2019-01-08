import './base/array-methods';
import Base from './base/Base.class';
import JsonFlex from './base/jsonflex';
import Mainpage from './components/mainpage/Mainpage.class';
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
    this.mainpage = new Mainpage();
    this.mainpage.render('main');
  }
}

const app = new App();