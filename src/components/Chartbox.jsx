import React from 'react';
import * as d3 from 'd3';

export const Chart1 = (props) => {
  //code here

  if (!props.data) {
    return;
  }

  // set the dimensions and margins of the graph
  var margin = { top: 20, right: 20, bottom: 30, left: 50 },
    width = 500 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;

  // append the svg obgect to the body of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin

  const svg = d3
    .select('.diagram')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // set the ranges
  const parseTime = d3.timeParse('%Y%m%d %H00');

  props.data[0].forEach(function (d) {
    d.date = parseTime(d.date);
    d.value = +d.value;
  });
  const xScale = d3.scaleTime().range([0, width]);
  const yScale = d3.scaleLinear().range([height, 0]);
  xScale.domain(
    d3.extent(props.data[0], function (d) {
      return d.date;
    }),
  );
  yScale.domain(
    d3.extent(props.data[0], function (d) {
      return d.value;
    }),
  );

  svg
    .append('g')
    .attr('transform', 'translate( 0 ,' + height + ')')
    .call(d3.axisBottom(xScale).ticks(5));

  svg.append('g').call(d3.axisLeft(yScale).ticks(4).tickSize(-width)).attr('opacity', '1');

  const valueline = d3
    .line()
    .curve(d3.curveMonotoneX)
    .x(function (d) {
      return xScale(d.date);
    })
    .y(function (d) {
      return yScale(d.value);
    });

  svg
    .append('path')
    .data([props.data[0]])
    .attr('d', valueline)
    .style('fill', 'none')
    .style('stroke', '#ffffff')
    .style('stroke-width', '3');

  return (
    //html
    <div>
      <svg className="diagram"></svg>
    </div>
  );
};

export const Chart2 = (props) => {
  //code here

  if (!props.data) {
    return;
  }

  // set the dimensions and margins of the graph
  var margin = { top: 20, right: 20, bottom: 30, left: 50 },
    width = 500 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;

  // append the svg obgect to the body of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin

  const svg = d3
    .select('.diagram')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // set the ranges
  const parseTime = d3.timeParse('%Y%m%d %H00');

  props.data[0].forEach(function (d) {
    d.date = parseTime(d.date);
    d.value = +d.value;
  });
  const xScale = d3.scaleTime().range([0, width]);
  const yScale = d3.scaleLinear().range([height, 0]);
  xScale.domain(
    d3.extent(props.data[0], function (d) {
      return d.date;
    }),
  );
  yScale.domain(
    d3.extent(props.data[0], function (d) {
      return d.value;
    }),
  );

  svg
    .append('g')
    .attr('transform', 'translate( 0 ,' + height + ')')
    .call(d3.axisBottom(xScale).ticks(5));

  svg.append('g').call(d3.axisLeft(yScale).ticks(4).tickSize(-width)).attr('opacity', '1');

  const valueline = d3
    .line()
    .curve(d3.curveMonotoneX)
    .x(function (d) {
      return xScale(d.date);
    })
    .y(function (d) {
      return yScale(d.value);
    });

  svg
    .append('path')
    .data([props.data[0]])
    .attr('d', valueline)
    .style('fill', 'none')
    .style('stroke', '#ffffff')
    .style('stroke-width', '3');

  return (
    //html
    <div>
      <svg className="diagram"></svg>
    </div>
  );
};

export const Chart3 = (props) => {
  //code here

  if (!props.data) {
    return;
  }

  // set the dimensions and margins of the graph
  var margin = { top: 20, right: 20, bottom: 30, left: 50 },
    width = 500 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;

  // append the svg obgect to the body of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin

  const svg = d3
    .select('.diagram')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // set the ranges
  const parseTime = d3.timeParse('%Y%m%d %H00');

  props.data[0].forEach(function (d) {
    d.date = parseTime(d.date);
    d.value = +d.value;
  });
  const xScale = d3.scaleTime().range([0, width]);
  const yScale = d3.scaleLinear().range([height, 0]);
  xScale.domain(
    d3.extent(props.data[0], function (d) {
      return d.date;
    }),
  );
  yScale.domain(
    d3.extent(props.data[0], function (d) {
      return d.value;
    }),
  );

  svg
    .append('g')
    .attr('transform', 'translate( 0 ,' + height + ')')
    .call(d3.axisBottom(xScale).ticks(5));

  svg.append('g').call(d3.axisLeft(yScale).ticks(4).tickSize(-width)).attr('opacity', '1');

  const valueline = d3
    .line()
    .curve(d3.curveMonotoneX)
    .x(function (d) {
      return xScale(d.date);
    })
    .y(function (d) {
      return yScale(d.value);
    });

  svg
    .append('path')
    .data([props.data[0]])
    .attr('d', valueline)
    .style('fill', 'none')
    .style('stroke', '#ffffff')
    .style('stroke-width', '3');

  return (
    //html
    <div>
      <svg className="diagram"></svg>
    </div>
  );
};

export const Chart4 = (props) => {
  //code here

  if (!props.data) {
    return;
  }

  // set the dimensions and margins of the graph
  var margin = { top: 20, right: 20, bottom: 30, left: 50 },
    width = 500 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;

  // append the svg obgect to the body of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin

  const svg = d3
    .select('.diagram')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // set the ranges
  const parseTime = d3.timeParse('%Y%m%d %H00');

  props.data[0].forEach(function (d) {
    d.date = parseTime(d.date);
    d.value = +d.value;
  });
  const xScale = d3.scaleTime().range([0, width]);
  const yScale = d3.scaleLinear().range([height, 0]);
  xScale.domain(
    d3.extent(props.data[0], function (d) {
      return d.date;
    }),
  );
  yScale.domain(
    d3.extent(props.data[0], function (d) {
      return d.value;
    }),
  );

  svg
    .append('g')
    .attr('transform', 'translate( 0 ,' + height + ')')
    .call(d3.axisBottom(xScale).ticks(5));

  svg.append('g').call(d3.axisLeft(yScale).ticks(4).tickSize(-width)).attr('opacity', '1');

  const valueline = d3
    .line()
    .curve(d3.curveMonotoneX)
    .x(function (d) {
      return xScale(d.date);
    })
    .y(function (d) {
      return yScale(d.value);
    });

  svg
    .append('path')
    .data([props.data[0]])
    .attr('d', valueline)
    .style('fill', 'none')
    .style('stroke', '#ffffff')
    .style('stroke-width', '3');

  return (
    //html
    <div>
      <svg className="diagram"></svg>
    </div>
  );
};

export const Chart5 = (props) => {
  //code here

  if (!props.data) {
    return;
  }

  // set the dimensions and margins of the graph
  var margin = { top: 20, right: 20, bottom: 30, left: 50 },
    width = 500 - margin.left - margin.right,
    height = 250 - margin.top - margin.bottom;

  // append the svg obgect to the body of the page
  // appends a 'group' element to 'svg'
  // moves the 'group' element to the top left margin

  const svg = d3
    .select('.diagram')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  // set the ranges
  const parseTime = d3.timeParse('%Y%m%d %H00');

  props.data[0].forEach(function (d) {
    d.date = parseTime(d.date);
    d.value = +d.value;
  });
  const xScale = d3.scaleTime().range([0, width]);
  const yScale = d3.scaleLinear().range([height, 0]);
  xScale.domain(
    d3.extent(props.data[0], function (d) {
      return d.date;
    }),
  );
  yScale.domain(
    d3.extent(props.data[0], function (d) {
      return d.value;
    }),
  );

  svg
    .append('g')
    .attr('transform', 'translate( 0 ,' + height + ')')
    .call(d3.axisBottom(xScale).ticks(5));

  svg.append('g').call(d3.axisLeft(yScale).ticks(4).tickSize(-width)).attr('opacity', '1');

  const valueline = d3
    .line()
    .curve(d3.curveMonotoneX)
    .x(function (d) {
      return xScale(d.date);
    })
    .y(function (d) {
      return yScale(d.value);
    });

  svg
    .append('path')
    .data([props.data[0]])
    .attr('d', valueline)
    .style('fill', 'none')
    .style('stroke', '#ffffff')
    .style('stroke-width', '3');

  return (
    //html
    <div>
      <svg className="diagram"></svg>
    </div>
  );
};
