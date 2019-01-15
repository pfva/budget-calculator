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
    this.expensesData = [];
    this.start();
  }

  start() {
    this.showChart();
  }

  // Anropa på click på button
  // Lägger in alla expenses i arrayen
  getExpenses() {
    let inputFields = document.querySelectorAll('.m-category__input--expenses');
    for(let i = 0; i < inputFields.length; i++) {
      if(inputFields[i].value) {
        this.expensesData.push(parseInt(inputFields[i].value));
      }
    }
  }

  showChart() {
    let calculateButton = document.querySelector('.a-button');
    calculateButton.addEventListener("click", () => {
      this.getExpenses();
      this.drawChart();
    });
  }

  drawChart() {
    let data = this.expensesData;
    let chartEl = document.querySelector('.o-chart');
    chartEl.innerHTML = "";
    let chartStyles = window.getComputedStyle(chartEl);
    
    let svg = d3.select("svg"),
      width = parseInt(chartStyles.width),
      height = parseInt(chartStyles.height),
      radius = Math.min(width, height) / 2,
      g = svg.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    let color = d3.scaleOrdinal(['#005293','#3ba8e8','#1e2f4f','#1CB5E0']);

    let pie = d3.pie();

    let arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    let arcs = g.selectAll("arc")
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