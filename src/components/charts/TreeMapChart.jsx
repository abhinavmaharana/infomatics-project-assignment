import React, { useEffect } from 'react';
import Chart from 'react-apexcharts';
import LegendCustom from './LegendCustom';

export default function TreeMapChart({ data }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      return;
    }
  }, []);

  const options = {
    chart: {
      type: 'treemap',
      toolbar: {
        show: false,
      },
    },
    series: [
      {
        data: data.series.map(item => ({
          x: item.name,
          y: item.data[0],
          color: item.color || '#000', // If color is not provided, default to black
        })),
      },
    ],
    colors: data.series.map(item => item.color || '#000'), // Extract colors from data
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
    },
    stroke: {
      show: false,
    },
    plotOptions: {
      treemap: {
        distributed: true,
      },
      borderWidth: 0,
      stroke: {
        show: false,
        width: 0,
      },
    },
    tooltip: {
      enabled: true,
      formatter: function (val, opts) {
        return (
          opts.w.globals.series[opts.seriesIndex].data[opts.dataPointIndex].x +
          ': ' +
          val
        );
      },
    },
  };

  return (
    <div className="tree-chart w-full">
      <style jsx global>{`
        .apexcharts-treemap-rect {
          stroke: none !important;
        }
      `}</style>
      <Chart options={options} series={options.series} type="treemap" height={150} />
      <div className="grid grid-cols-2 items-center justify-center gap-2 mt-4">
        {data.series.map((item, index) => (
          <LegendCustom
            key={index}
            bgColor={item.color || '#000'} // If color is not provided, default to black
            item={item.name}
            percentage={item.data[0]}
          />
        ))}
      </div>
    </div>
  );
}
