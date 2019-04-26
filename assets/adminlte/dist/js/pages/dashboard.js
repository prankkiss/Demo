/*
 * Author: Abdullah A Almsaeed
 * Date: 4 Jan 2014
 * Description:
 *      This is a demo file used only for the main dashboard (index.html)
 **/

$(function () {

  'use strict';

  // Make the dashboard widgets sortable Using jquery UI
  $('.connectedSortable').sortable({
    placeholder         : 'sort-highlight',
    connectWith         : '.connectedSortable',
    handle              : '.box-header, .nav-tabs',
    forcePlaceholderSize: true,
    zIndex              : 999999
  });
  $('.connectedSortable .box-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move');

  // jQuery UI sortable for the todo list
  $('.todo-list').sortable({
    placeholder         : 'sort-highlight',
    handle              : '.handle',
    forcePlaceholderSize: true,
    zIndex              : 999999
  });

  // bootstrap WYSIHTML5 - text editor
  $('.textarea').wysihtml5();

  $('.daterange').daterangepicker({
    ranges   : {
      'Today'       : [moment(), moment()],
      'Yesterday'   : [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
      'Last 7 Days' : [moment().subtract(6, 'days'), moment()],
      'Last 30 Days': [moment().subtract(29, 'days'), moment()],
      'This Month'  : [moment().startOf('month'), moment().endOf('month')],
      'Last Month'  : [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
    },
    startDate: moment().subtract(29, 'days'),
    endDate  : moment()
  }, function (start, end) {
    window.alert('You chose: ' + start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
  });

  /* jQueryKnob */
  $('.knob').knob();

  // jvectormap data
  var visitorsData = {
    US: 398, // USA
    SA: 400, // Saudi Arabia
    CA: 1000, // Canada
    DE: 500, // Germany
    FR: 760, // France
    CN: 300, // China
    AU: 700, // Australia
    BR: 600, // Brazil
    IN: 800, // India
    GB: 320, // Great Britain
    RU: 3000 // Russia
  };
  // World map by jvectormap
  $('#world-map').vectorMap({
    map              : 'world_mill_en',
    backgroundColor  : 'transparent',
    regionStyle      : {
      initial: {
        fill            : '#e4e4e4',
        'fill-opacity'  : 1,
        stroke          : 'none',
        'stroke-width'  : 0,
        'stroke-opacity': 1
      }
    },
    series           : {
      regions: [
        {
          values           : visitorsData,
          scale            : ['#92c1dc', '#ebf4f9'],
          normalizeFunction: 'polynomial'
        }
      ]
    },
    onRegionLabelShow: function (e, el, code) {
      if (typeof visitorsData[code] != 'undefined')
        el.html(el.html() + ': ' + visitorsData[code] + ' new visitors');
    }
  });

  // Sparkline charts
  var myvalues = [1000, 1200, 920, 927, 931, 1027, 819, 930, 1021];
  $('#sparkline-1').sparkline(myvalues, {
    type     : 'line',
    lineColor: '#92c1dc',
    fillColor: '#ebf4f9',
    height   : '50',
    width    : '80'
  });
  myvalues = [515, 519, 520, 522, 652, 810, 370, 627, 319, 630, 921];
  $('#sparkline-2').sparkline(myvalues, {
    type     : 'line',
    lineColor: '#92c1dc',
    fillColor: '#ebf4f9',
    height   : '50',
    width    : '80'
  });
  myvalues = [15, 19, 20, 22, 33, 27, 31, 27, 19, 30, 21];
  $('#sparkline-3').sparkline(myvalues, {
    type     : 'line',
    lineColor: '#92c1dc',
    fillColor: '#ebf4f9',
    height   : '50',
    width    : '80'
  });

  // The Calender
  $('#calendar').datepicker();

  // SLIMSCROLL FOR CHAT WIDGET
  $('#chat-box').slimScroll({
    height: '250px'
  });

  /* Morris.js Charts */
  // Sales chart
  var area = new Morris.Area({
    element   : 'revenue-chart',
    resize    : true,
    data      : [
      { y: '2019-03-01', item1: 3, item2: 2 },
      { y: '2019-03-02', item1: 4, item2: 2 },
      { y: '2019-03-03', item1: 5, item2: 3 },
      { y: '2019-03-04', item1: 6, item2: 4 },
      { y: '2019-03-05', item1: 8, item2: 2 },
      { y: '2019-03-06', item1: 6, item2: 3 },
      { y: '2019-03-07', item1: 6, item2: 5 },
      { y: '2019-03-08', item1: 7, item2: 6 },
      { y: '2019-03-09', item1: 4, item2: 7 },
      { y: '2019-03-10', item1: 6, item2: 2 },
      { y: '2019-03-11', item1: 8, item2: 5 },
      { y: '2019-03-12', item1: 4, item2: 7 },
      { y: '2019-03-13', item1: 3, item2: 6 },
      { y: '2019-03-14', item1: 3, item2: 5 },
      { y: '2019-03-15', item1: 5, item2: 4 },
      { y: '2019-03-16', item1: 4, item2: 7 },
      { y: '2019-03-17', item1: 6, item2: 6 },
      { y: '2019-03-18', item1: 4, item2: 6 },
      { y: '2019-03-19', item1: 8, item2: 4 },
      { y: '2019-03-20', item1: 6, item2: 5 },
      { y: '2019-03-21', item1: 4, item2: 8 },
      { y: '2019-03-22', item1: 6, item2: 5 },
      { y: '2019-03-23', item1: 6, item2: 5 },
      { y: '2019-03-24', item1: 2, item2: 4 },
      { y: '2019-03-25', item1: 6, item2: 5 },
      { y: '2019-03-26', item1: 5, item2: 6 },
      { y: '2019-03-27', item1: 8, item2: 3 },
      { y: '2019-03-28', item1: 3, item2: 6 },
      { y: '2019-03-29', item1: 4, item2: 5 },
      { y: '2019-03-30', item1: 6, item2: 4 }
    ],
    xkey      : 'y',
    ykeys     : ['item1', 'item2'],
    labels    : ['成功間數', '失敗間數'],
    lineColors: ['#0FB2D6', '#77dff5'],
    hideHover : 'auto'
  });
  // var line = new Morris.Line({
  //   element          : 'line-chart',
  //   resize           : true,
  //   data             : [
  //     { y: '2011 Q1', item1: 2666 },
  //     { y: '2011 Q2', item1: 2778 },
  //     { y: '2011 Q3', item1: 4912 },
  //     { y: '2011 Q4', item1: 3767 },
  //     { y: '2012 Q1', item1: 6810 },
  //     { y: '2012 Q2', item1: 5670 },
  //     { y: '2012 Q3', item1: 4820 },
  //     { y: '2012 Q4', item1: 15073 },
  //     { y: '2013 Q1', item1: 10687 },
  //     { y: '2013 Q2', item1: 8432 }
  //   ],
  //   xkey             : 'y',
  //   ykeys            : ['item1'],
  //   labels           : ['Item 1'],
  //   lineColors       : ['#efefef'],
  //   lineWidth        : 2,
  //   hideHover        : 'auto',
  //   gridTextColor    : '#fff',
  //   gridStrokeWidth  : 0.4,
  //   pointSize        : 4,
  //   pointStrokeColors: ['#efefef'],
  //   gridLineColor    : '#efefef',
  //   gridTextFamily   : 'Open Sans',
  //   gridTextSize     : 10
  // });

  // Donut Chart
  // var donut = new Morris.Donut({
  //   element  : 'sales-chart',
  //   resize   : true,
  //   colors   : ['#3c8dbc', '#f56954', '#00a65a'],
  //   data     : [
  //     { label: 'Download Sales', value: 12 },
  //     { label: 'In-Store Sales', value: 30 },
  //     { label: 'Mail-Order Sales', value: 20 }
  //   ],
  //   hideHover: 'auto'
  // });

  // Fix for charts under tabs
  $('.box ul.nav a').on('shown.bs.tab', function () {
    area.redraw();
    donut.redraw();
    line.redraw();
  });

  /* The todo list plugin */
  $('.todo-list').todoList({
    onCheck  : function () {
      window.console.log($(this), 'The element has been checked');
    },
    onUnCheck: function () {
      window.console.log($(this), 'The element has been unchecked');
    }
  });



  // -------------
  // - PIE CHART -
  // -------------
  // Get context with jQuery - using jQuery's .get() method.
  //----------拜訪率------------
  var pieChartCanvas1 = $('#pieChart1').get(0).getContext('2d');
  var pieChart = new Chart(pieChartCanvas1);
  var PieData1 = [
    {
      value: 700,
      color: '#ec5044',
      highlight: '#ec5044',
      label: '業務A'
    },
    {
      value: 500,
      color: '#10af6a',
      highlight: '#10af6a',
      label: '業務B'
    },
    {
      value: 400,
      color: '#ffbf2e',
      highlight: '#ffbf2e',
      label: '業務C'
    },
    {
      value: 600,
      color: '#0FB2D6',
      highlight: '#0FB2D6',
      label: '業務D'
    },
    {
      value: 300,
      color: '#2286e4',
      highlight: '#2286e4',
      label: '業務E'
    },
    {
      value: 100,
      color: '#d2d6de',
      highlight: '#d2d6de',
      label: '業務F'
    }
  ];
  var pieOptions = {
    // Boolean - Whether we should show a stroke on each segment
    segmentShowStroke: true,
    // String - The colour of each segment stroke
    segmentStrokeColor: '#fff',
    // Number - The width of each segment stroke
    segmentStrokeWidth: 1,
    // Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout: 50, // This is 0 for Pie charts
    // Number - Amount of animation steps
    animationSteps: 100,
    // String - Animation easing effect
    animationEasing: 'easeOutBounce',
    // Boolean - Whether we animate the rotation of the Doughnut
    animateRotate: true,
    // Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale: false,
    // Boolean - whether to make the chart responsive to window resizing
    responsive: true,
    // Boolean - whether to maintain the starting aspect ratio or not when responsive, if set to false, will take up entire container
    maintainAspectRatio: false,
    // String - A legend template
    legendTemplate: '<ul class=\'<%=name.toLowerCase()%>-legend\'><% for (var i=0; i<segments.length; i++){%><li><span style=\'background-color:<%=segments[i].fillColor%>\'></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>',
    // String - A tooltip template
    tooltipTemplate: '<%=value %> <%=label%> users'
  };
  // Create pie or douhnut chart
  // You can switch between pie and douhnut using the method below.
  pieChart.Doughnut(PieData1, pieOptions);

  //----------成功率------------
  var pieChartCanvas2 = $('#pieChart2').get(0).getContext('2d');
  var pieChart2 = new Chart(pieChartCanvas2);
  var PieData2 = [
    {
      value: 210,
      color: '#ec5044',
      highlight: '#ec5044',
      label: '業務A'
    },
    {
      value: 333,
      color: '#10af6a',
      highlight: '#10af6a',
      label: '業務B'
    },
    {
      value: 574,
      color: '#ffbf2e',
      highlight: '#ffbf2e',
      label: '業務C'
    },
    {
      value: 642,
      color: '#0FB2D6',
      highlight: '#0FB2D6',
      label: '業務D'
    },
    {
      value: 150,
      color: '#2286e4',
      highlight: '#2286e4',
      label: '業務E'
    },
    {
      value: 471,
      color: '#d2d6de',
      highlight: '#d2d6de',
      label: '業務F'
    }
  ];
  // Create pie or douhnut chart
  // You can switch between pie and douhnut using the method below.
  pieChart2.Doughnut(PieData2, pieOptions);

  //----------失敗率------------
  var pieChartCanvas3 = $('#pieChart3').get(0).getContext('2d');
  var pieChart3 = new Chart(pieChartCanvas3);
  var PieData3 = [
    {
      value: 411,
      color: '#ec5044',
      highlight: '#ec5044',
      label: '業務A'
    },
    {
      value: 353,
      color: '#10af6a',
      highlight: '#10af6a',
      label: '業務B'
    },
    {
      value: 274,
      color: '#ffbf2e',
      highlight: '#ffbf2e',
      label: '業務C'
    },
    {
      value: 442,
      color: '#0FB2D6',
      highlight: '#0FB2D6',
      label: '業務D'
    },
    {
      value: 250,
      color: '#2286e4',
      highlight: '#2286e4',
      label: '業務E'
    },
    {
      value: 171,
      color: '#d2d6de',
      highlight: '#d2d6de',
      label: '業務F'
    }
  ];
  // Create pie or douhnut chart
  // You can switch between pie and douhnut using the method below.
  pieChart3.Doughnut(PieData3, pieOptions);


  //----------跟進率------------
  var pieChartCanvas4 = $('#pieChart4').get(0).getContext('2d');
  var pieChart4 = new Chart(pieChartCanvas4);
  var PieData4 = [
    {
      value: 510,
      color: '#ec5044',
      highlight: '#ec5044',
      label: '業務A'
    },
    {
      value: 123,
      color: '#10af6a',
      highlight: '#10af6a',
      label: '業務B'
    },
    {
      value: 274,
      color: '#ffbf2e',
      highlight: '#ffbf2e',
      label: '業務C'
    },
    {
      value: 342,
      color: '#0FB2D6',
      highlight: '#0FB2D6',
      label: '業務D'
    },
    {
      value: 550,
      color: '#2286e4',
      highlight: '#2286e4',
      label: '業務E'
    },
    {
      value: 271,
      color: '#d2d6de',
      highlight: '#d2d6de',
      label: '業務F'
    }
  ];
  // Create pie or douhnut chart
  // You can switch between pie and douhnut using the method below.
  pieChart4.Doughnut(PieData4, pieOptions);

  // -----------------
  // - END PIE CHART -
  // -----------------


});
