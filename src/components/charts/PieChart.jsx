import React from 'react'
import ReactApexChart from 'react-apexcharts';
import LegendCustom from './LegendCustom';

export default function PieChart() {
    const seriesData = [55, 44, 28, 28, 10, 10];
    const options = {
      series: seriesData,
      options: {
        chart: {
          width: 380,
          type: "pie",
        },
  
        stroke: {
          show: false,
        },
        legend: {
          show: false,
        },
        dataLabels: {
          enabled: false, // Disable the display of percentage labels
        },
        colors: [
          "#008FFB",
          "#00E396",
          "#FEB019",
          "#FF4560",
          "#775DD0",
          "#00D9E9",
        ],
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "right",
              },
            },
          },
        ],
      },
    };
  return (
    <div id="chart" className="flex flex-col items-center justify-center">
    <style jsx global>{`
      .apexcharts-legend-marker {
        border-radius: 2px !important; /* Set border radius for legend markers */
      }
    `}</style>
    <ReactApexChart
      options={options.options}
      series={options.series}
      type="pie"
      width={220}
      height={220}
    />
    <div className="grid grid-cols-2 items-center justify-center gap-x-12 mt-4">
      {seriesData.map((item, index) => (
        <LegendCustom
          key={index}
          bgColor={options.options.colors[index]}
          item={"Team"}
          percentage={item}
        />
      ))}
    </div>
  </div>
  )
}
