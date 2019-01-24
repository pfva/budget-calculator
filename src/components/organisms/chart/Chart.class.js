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

  start() {}

  getExpenses() {
    let inputFields = document.querySelectorAll('.m-category__input--expenses');
    let expensesTotal = document.querySelector('.m-total__sum--expenses');
    let expensesWithoutDollar = expensesTotal.innerHTML.slice(2);
    let expensesWithoutSpaces = expensesWithoutDollar.replace(/ /g, '');
    let total = parseInt(expensesWithoutSpaces);
    for (let i = 0; i < inputFields.length; i++) {
      let categoryTitle = inputFields[
        i
      ].previousElementSibling.innerHTML.trim();
      let value = parseInt(inputFields[i].value);
      let percentage = value / total;
      let percentageRounded = (percentage * 100).toFixed(0);
      let percentageWithSign = percentageRounded.toString() + '%';
      if (inputFields[i].value) {
        this.expensesData.push({
          label: categoryTitle,
          value: value,
          percentage: percentageWithSign
        });
      }
    }
  }

  showChart() {
    let svg = document.querySelector('svg');
    let calculateButton = document.querySelector('.a-button');
    calculateButton.addEventListener('click', () => {
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
    chartEl.innerHTML = '';
    let chartStyles = window.getComputedStyle(chartEl);

    let color = d3
      .scaleOrdinal()
      .domain(data.map(d => d.name))
      .range(
        d3.quantize(t => d3.interpolateSpectral(t * 0.9), data.length + 1)
      );

    let width = parseInt(chartStyles.width);
    let height = parseInt(chartStyles.height);
    let radius = Math.min(width, height) / 2;

    let pie = d3
      .pie()
      .sort(null)
      .value(d => d.value);

    let arcs = pie(data);

    let arc = d3
      .arc()
      .innerRadius(0)
      .outerRadius(radius);

    let svg = d3.select('svg');

    let g = svg
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')');

    let pathIndex = 0;
    g.selectAll('path')
      .data(arcs)
      .enter()
      .append('path')
      .attr('fill', (d, i) => color(i))
      .attr('stroke', 'lightgray')
      .attr('d', arc)
      .attr('data-key', function(i) {
        i = pathIndex++;
        return i;
      });

    let textIndex = 0;
    let text = g
      .selectAll('text')
      .data(arcs)
      .enter()
      .append('text')
      .attr('transform', function(d) {
        d.innerRadius = 0;
        d.outerRadius = radius;
        let c = arc.centroid(d);
        return 'translate(' + c[0] * 1.4 + ',' + c[1] * 1.4 + ')';
      })
      .attr('data-key', function(i) {
        i = textIndex++;
        return i;
      });

    text
      .append('tspan')
      .attr('text-anchor', 'middle')
      .attr('x', 0)
      .attr('y', '-0.7em')
      .text((d, i) => data[i].label)
      .append('tspan')
      .attr('x', 0)
      .attr('y', '0.7em')
      .text(d => d.data.percentage);

    let oChart = document.querySelector('.o-chart');
    let oChartPaths = oChart.querySelectorAll('path');
    let oChartTexts = oChart.querySelectorAll('text');

    for (let k = 0; k < oChartPaths.length; k++) {
      oChartPaths[k].addEventListener('mouseenter', function() {
        for (let l = 0; l < oChartTexts.length; l++) {
          if (oChartTexts[l].dataset.key !== oChartPaths[k].dataset.key) {
            oChartTexts[l].classList.add('u-invisible');
          }
        }
      });
      oChartPaths[k].addEventListener('click', function() {
        for (let l = 0; l < oChartTexts.length; l++) {
          if (oChartTexts[l].dataset.key !== oChartPaths[k].dataset.key) {
            oChartTexts[l].classList.toggle('u-invisible');
          }
        }
      });
      oChartPaths[k].addEventListener('mouseleave', function() {
        for (let m = 0; m < oChartTexts.length; m++) {
          oChartTexts[m].classList.remove('u-invisible');
        }
      });
    }
  }
}

Chart.prototype.template = template;
