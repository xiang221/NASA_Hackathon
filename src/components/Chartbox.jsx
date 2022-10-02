import React from 'react';
import * as d3 from 'd3';

export const Chart1 = (props) => {
  //code here
  console.log(props.chart, props.data);

  if (!props.data) {
    return;
  }

  let days = [];
  let values = [];
  function GetData(map) {
    for (let key in map) {
      days.push(key);
      values.push(map[key]);
    }
  }

  GetData(props.data[0]);

  // set the dimensions and margins of the graph
  var margin = { top: 20, right: 20, bottom: 30, left: 50 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

  // append the svg obgect to the body of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin
  var svg = d3
    .select('.diagram')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // set the ranges
  var x = d3.scaleLinear().range([0, width]);
  var y = d3.scaleLinear().range([height, 0]);

  // Scale the range of the data
  x.domain(d3.extent(days));
  y.domain(d3.extent(values));

  // Add the x Axis
  svg
    .append('g')
    .attr('transform', 'translate( 0 ,' + height + ')')
    .call(d3.axisBottom(x).ticks(5));

  svg.append('g').call(d3.axisLeft(y).ticks(4).tickSize(-width)).attr('opacity', '1');

  // define the line
  var valueline = d3.line().x(x(days)).y(y(values));

  svg
    .append('path')
    .data([props.data[0]])
    .attr('d', valueline)
    .style('fill', 'none')
    .style('stroke', '#11ef34')
    .style('stroke-width', '3');

  return (
    //html
    <div>
      <svg class="diagram"></svg>
    </div>
  );
};

export const Chart2 = (props) => {
  //code here
  console.log(props.chart, props.data);

  return (
    //html
    <div>Chart2</div>
  );
};

export const Chart3 = (props) => {
  //code here
  console.log(props.chart, props.data);

  return (
    //html
    <div>Chart3</div>
  );
};

export const Chart4 = (props) => {
  //code here
  console.log(props.chart, props.data);

  return (
    //html
    <div>Chart4</div>
  );
};

export const Chart5 = (props) => {
  //code here
  console.log(props.chart, props.data);

  return (
    //html
    <div>Chart5</div>
  );
};
