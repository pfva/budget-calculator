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
  }

  getExpenses() {
    let inputFields = document.querySelectorAll('.m-category__input--expenses');
    for(let i = 0; i < inputFields.length; i++) {
      let categoryTitle = inputFields[i].previousElementSibling.innerHTML.trim();
      if(inputFields[i].value) {
        this.expensesData.push(
          {
            "label": categoryTitle,
            "value": parseInt(inputFields[i].value)
          }
        );
      }
    }
  }

  showChart() {
    let svg = document.querySelector("svg");
    let calculateButton = document.querySelector('.a-button');
    calculateButton.addEventListener("click", () => {
      svg.classList.remove('o-chart--invisible-height');
      svg.classList.remove('u-invisible');
      svg.classList.add('u-fadein');
      this.expensesData = [];
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

    let pie = d3.pie()
      .value((d) => d.value);

    let arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    let arcs = g.selectAll("arc")
      .data(pie(data))
      .enter()
      .append("g")
      .attr("class", "arc");

    arcs.append("path")
      .attr("fill", (d, i) => color(i))
      .attr("d", arc);

    arcs.append("svg:text")
      .attr("transform", function(d) {
        d.innerRadius = 0;
        d.outerRadius = radius;
        let c =  arc.centroid(d);
        return "translate(" + c[0]*2.5 +"," + c[1]*2.5 + ")";
      })
      .attr("text-anchor", "middle")
      .text((d, i) => data[i].label);
      }

}

Chart.prototype.template = template;