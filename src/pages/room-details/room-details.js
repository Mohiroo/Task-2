import '../template-page/template-page';
import '../../components/feedback/feedback';
import '../../components/bullet-list/bullet-list';
import '../../components/icon-text-list/icon-text-list';
import '../../cards/book-card/book-card';
import '../../footer/footer';
import '../../header/header';
import './room-details.pug';
import './room-details.scss';

import * as echarts from 'echarts';
import $ from 'jquery';

const great = 130;
const good = 65;
const satisfactory = 65;
const disappointed = 0;

echarts.init($('.room__chart')[0], null, {
  renderer: 'svg',
  width: 313,
  height: 131,
}).setOption({
  legend: {
    orient: 'vertical',
    top: '32',
    left: "144",
    itemWidth: 12,
    itemHeight: 12,
    icon: "circle",
    textStyle: {
      fontSize: 14,
      fontFamily: 'Montserrat',
      color: '#1F2041BF',
    },
    selectedMode: false,
  },
  series: [{
    name: 'Впечатления от номера',
    type: 'pie',
    top: '0',
    right: '189',
    clockwise: false,
    radius: [55, 61],
    itemStyle: {
      borderColor: '#fff',
      borderWidth: 2
    },
    label: {
      position: 'center',
      formatter: [
        `{number|${great + good + satisfactory + disappointed}}`,
        `{votes|голосов}`
      ].join('\n'),
      rich: {
        number: {
          fontSize: 24,
          fontWeight: "bold",
          fontFamily: 'Montserrat',
          lineHeight: 24,
          color: "#BC9CFF",
        },
        votes: {
          fontSize: 15,
          fontWeight: "bold",
          fontFamily: 'Montserrat',
          lineHeight: 18,
          color: '#BC9CFF',
        },
      }
    },
    emphasis: {
      scaleSize: 1.3,
      label: {
        fontSize: '18',
        fontWeight: 'bold',
        formatter: [
          '{number|{@c}}',
          '{votes|голосов}'
        ].join('\n'),
        rich: {
          number: {
            fontSize: 24,
            fontWeight: "bold",
            fontFamily: 'Montserrat',
            lineHeight: 24,
            color: 'rgba(65, 31, 31, 0.75)',
            width: 70,
            backgroundColor: "white"
          },
          votes: {
            fontSize: 15,
            fontFamily: 'Montserrat',
            lineHeight: 18,
            color: 'rgba(31, 32, 65, 0.5)',
            backgroundColor: "white"
          },
        }
      }
    },
    data: [{
        name: 'Великолепно',
        type: 'pie',
        value: great,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: '#FFE39C'
            }, {
              offset: 1,
              color: '#FFBA9C'
            }],
          }
        },
      },
      {
        name: 'Хорошо',
        type: 'pie',
        value: good,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: '#6FCF97'
            }, {
              offset: 1,
              color: '#66D2EA'
            }],
          }
        },
      },
      {
        name: 'Удовлетворительно',
        type: 'pie',
        value: satisfactory,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: '#BC9CFF'
            }, {
              offset: 1,
              color: '#8BA4F9'
            }],
          }
        }
      },
      {
        name: 'Разочарован',
        type: 'pie',
        value: disappointed,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0,
              color: '#909090'
            }, {
              offset: 1,
              color: '#3D4975'
            }],
          }
        }
      },
    ],
  }]
});