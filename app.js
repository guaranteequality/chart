// import './modules'

$('.app__header-hamburger').on('click', function () {
  $(this).toggleClass('is-active');
  $('.app__sidebar').toggleClass('app__sidebar--opened');
});
var productionElem = $("#chart_production");
var window_width = $(window).width();

// global Options
Chart.defaults.global.defaultFontFamily = 'Lato';
Chart.defaults.global.legend.display = false;
var product_font_size = 12;
if(window_width < 768) {
  product_font_size = 9;
  // $('#bar-chart-horizontal').attr('height', 800);
}
// For a doughnut chart
var productionChart = new Chart(productionElem,{
    type: 'doughnut',
    data: {
      labels: ["TRANSPORT", "MILK YEILD", "BEEF", "BREEDING"],
      datasets: [{
        data: [110, 202, 263, 195],
        backgroundColor: [
          '#ffffff',
          '#1b8399',
          '#378e3c',
          '#10122f',
        ],
        borderWidth: 0,
        hoverBackgroundColor: [
          '#ffffff',
          '#1b8399',
          '#378e3c',
          '#10122f',
        ],
      }],
    },
    options: {
      layout: {
          padding: {
              left: 50,
              right: 100,
              top: 20,
              bottom: 50
          }
      },
      plugins: {
        datalabels: {
          align: 'end',
          anchor: 'end',
          backgroundColor: null,
          borderColor: null,
          borderRadius: 4,
          borderWidth: 1,
          color: '#000000',
          font: {
            size: product_font_size
          },
          offset: 25,
          padding: 0,
          formatter: function(value, context) {
            return context.chart.data.labels[context.dataIndex] || null;
          }
        }
      },
      cutoutPercentage: 43,
      tooltips: {
            enabled: false,
            // yAlign: 'bottom',
            // callbacks: {
            //   label: function(tooltipItems, data) {  
            //     return data.labels[tooltipItems.index];
            //   },
            // },
            // custom: function(tooltipModel) {
            //     // Tooltip Element
            //     var tooltipEl = document.getElementById('chartjs-tooltip');

            //     // Create element on first render
            //     if (!tooltipEl) {
            //         tooltipEl = document.createElement('div');
            //         tooltipEl.id = 'chartjs-tooltip';
            //         tooltipEl.innerHTML = "<table></table>";
            //         document.body.appendChild(tooltipEl);
            //     }

            //     // Hide if no tooltip
            //     if (tooltipModel.opacity === 0) {
            //         tooltipEl.style.opacity = 0;
            //         return;
            //     }

            //     // Set caret Position
            //     tooltipEl.classList.remove('above', 'below', 'no-transform');
            //     if (tooltipModel.yAlign) {
            //         tooltipEl.classList.add(tooltipModel.yAlign);
            //     } else {
            //         tooltipEl.classList.add('no-transform');
            //     }

            //     function getBody(bodyItem) {
            //         return bodyItem.lines;
            //     }

            //     // Set Text
            //     if (tooltipModel.body) {
            //         var titleLines = tooltipModel.title || [];
            //         var bodyLines = tooltipModel.body.map(getBody);

            //         var innerHtml = '<thead>';

            //         titleLines.forEach(function(title) {
            //             innerHtml += '<tr><th>' + title + '</th></tr>';
            //         });
            //         innerHtml += '</thead><tbody>';

            //         bodyLines.forEach(function(body, i) {
            //             var colors = tooltipModel.labelColors[i];
            //             var span = '<span class="tooltip-line" style=""></span>';
            //             innerHtml += '<tr><td>' + span + body + '</td></tr>';
            //         });
            //         innerHtml += '</tbody>';

            //         var tableRoot = tooltipEl.querySelector('table');
            //         tableRoot.innerHTML = innerHtml;
            //     }

            //     // `this` will be the overall tooltip
            //     var position = this._chart.canvas.getBoundingClientRect();

            //     // Display, position, and set styles for font
            //     tooltipEl.style.opacity = 1;
            //     tooltipEl.style.position = 'absolute';
            //     tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 'px';
            //     tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
            //     tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
            //     tooltipEl.style.fontSize = tooltipModel.bodyFontSize + 'px';
            //     tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
            //     tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
            //     tooltipEl.style.pointerEvents = 'none';
            // }
        }
    }
});

var color = Chart.helpers.color;

var yfont_size = 12;
var xfont_size = 14;

if(window_width < 768) {
  yfont_size = 8;
  xfont_size = 9;
  $('#bar-chart-horizontal').attr('height', 800);
}

if(992 > window_width && window_width >= 768) {
  $('#bar-chart-horizontal').attr('height', 600);
}

var bgcolor_array = [color("#ff0000").alpha(0.3).rgbString(),color("#00ff00").alpha(0.3).rgbString(),color("#0000ff").alpha(0.3).rgbString(),color("#ff0000").alpha(0.3).rgbString(),color("#00ff00").alpha(0.3).rgbString(),color("#0000ff").alpha(0.3).rgbString(),color("#ff0000").alpha(0.3).rgbString(),color("#00ff00").alpha(0.3).rgbString()];
var bdcolor_array = [color("#ff0000").alpha(0.5).rgbString(),color("#00ff00").alpha(0.5).rgbString(),color("#0000ff").alpha(0.5).rgbString(),color("#ff0000").alpha(0.5).rgbString(),color("#00ff00").alpha(0.5).rgbString(),color("#0000ff").alpha(0.5).rgbString(),color("#ff0000").alpha(0.5).rgbString(),color("#00ff00").alpha(0.5).rgbString()];

var statistics = new Chart(document.getElementById("bar-chart-horizontal"), {
    type: 'horizontalBar',
    responsive: true,
    data: {
      labels: ["Statistic 1", "Statistic 2", "Statistic 3", "Statistic 4", "Statistic 5", "Statistic 6", "Statistic 7", "Statistic 8"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: bgcolor_array,
          borderColor: bdcolor_array,
          borderWidth: 1,
          data: [2478,5267,734,1784,433, 950, 350, 500]
        }
      ]
    },
    options: {
      plugins: {
        datalabels: {
          display: false
        }
      },
      tooltips: {
        enabled: false,
      },
      scales: {
        xAxes: [{
          // type: 'time',
          // time: {
          //   unit: 'month'
          // },
          gridLines: {
            zeroLineColor: "black",
            zeroLineWidth: 2
          },
          ticks: {
            fontSize: xfont_size
          },
        }],
        yAxes: [{
          // barPercentage: 0.8,
          // categoryPercentage: 0.8,
          gridLines: {
              color: "rgba(0, 0, 0, 0)",
              drawBorder: true
          },
          ticks: {
            fontSize: yfont_size
          },
        }]
      },
      barThickness: 50,
    }
});
// let draw = Chart.controllers.line.prototype.draw;
// Chart.controllers.line = Chart.controllers.line.extend({
//     draw: function() {
//         draw.apply(this, arguments);
//         let ctx = this.chart.chart.ctx;
//         let _stroke = ctx.stroke;
//         ctx.stroke = function() {
//             ctx.save();
//             ctx.shadowColor = '#E56590';
//             ctx.shadowBlur = 10;
//             ctx.shadowOffsetX = 0;
//             ctx.shadowOffsetY = 4;
//             _stroke.apply(this, arguments)
//             ctx.restore();
//         }
//     }
// });

// let ctx = document.getElementById("bar-chart-horizontal").getContext('2d');
// let myChart = new Chart(ctx, {
//     type: 'line',
//     data: {
//         labels: ["January", "February", "March", "April", "May", "June", "July"],
//         datasets: [{
//             label: "My First dataset",
//             data: [65, 59, 80, 81, 56, 55, 40],
//             borderColor: '#ffb88c',
//             pointBackgroundColor: "#fff",
//             pointBorderColor: "#ffb88c",
//             pointHoverBackgroundColor: "#ffb88c",
//             pointHoverBorderColor: "#fff",
//             pointRadius: 4,
//             pointHoverRadius: 4,
//             fill: false
//         }]
//     }
// });
// console.log(statistics);

