import React from 'react';
import { PieChart } from 'react-minimal-pie-chart';

const DonutGraph = ({data}) => {
  return (
    <PieChart
      data={data}
      lineWidth={50}
      startAngle={-90}
      totalValue={100}
      segmentsStyle={{
        border: '4px solid red'
      }}
      background="#f3f3f3"
      animate
      label={({ dataEntry }) => dataEntry.title}
      labelStyle={{ fontSize: '8px', fontWeight: 'bold', fill: '#333333' }}
      labelPosition={75}
    />
  );
};

export default DonutGraph;
