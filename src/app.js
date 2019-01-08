import './base/array-methods';
import Base from './base/Base.class';
import Mainpage from './components/mainpage/Mainpage.class';
import SiteHeader from './components/organisms/site-header/SiteHeader.class';
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
    this.mainpage = new SiteHeader();
    this.mainpage.render('main');
    this.mainpage = new Mainpage();
    this.mainpage.render('main');
  }
}

const app = new App();