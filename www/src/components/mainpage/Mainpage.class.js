import Base from '../../base/Base.class';
import template from './Mainpage.template';

/**
 * Main page of the web app
 *
 */
export default class Mainpage extends Base {

  constructor(){
    super();
    this.start();
  }

  start(){
    // $('main').empty();
    // this.render('main');
  }
}

Mainpage.prototype.template = template;