import Base from '../../../base/Base.class';
import template from './Chart.template';
import * as d3 from 'd3';

/**
 * Pie chart component
 *
 */
export default class Chart extends Base {

  constructor() {
    super();
    this.start();
  }

  start() {
  }

}

Chart.prototype.template = template;