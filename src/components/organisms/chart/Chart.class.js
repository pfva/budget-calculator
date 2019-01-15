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
    this.expensesData = [1, 1, 2, 3, 5, 8];
    this.start();
  }

  start() {
  }

  drawChart() {
    var data = this.expensesData;

    var svg = d3.select("svg"),
      width = svg.attr("width"),
      height = svg.attr("height"),
      radius = Math.min(width, height) / 2,
      g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var color = d3.scaleOrdinal(['#005293','#3ba8e8','#1e2f4f','#1CB5E0']);

    var pie = d3.pie();

    var arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    var arcs = g.selectAll("arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs.append("path")
    .attr("fill", function(d, i) {
        return color(i);
    })
    .attr("d", arc);
  }

}

Chart.prototype.template = template;