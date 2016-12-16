import gL from '../gL';

import * as d3 from 'd3';

let populate_gL = function() {
  gL.illustrationWidth = 400;
  gL.illustrationHeight = 400;



  // scales for d3 controls
  gL.scales = {}

  // red rect size change
  gL.scales.redRect =  {
    opacity: d3.scaleLinear()
      .range([0, 0.1, 1, 1])
      .domain([0, 550, 750, 9999]),
    w: d3.scaleLinear()
      .range([20, 20, 100, 100])
      .domain([0, 1200, 1400, 9999]),

  }

};

export default populate_gL;