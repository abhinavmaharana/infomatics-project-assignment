import React, {useEffect} from 'react'
import Chart from 'react-apexcharts';
import LegendCustom from './LegendCustom'

export default function TreeMapChart() {
    useEffect(() => {
        if (typeof window !== "undefined") {
          return;
        }
      }, []);
      const options = {
        chart: {
          type: "treemap",
          toolbar: {
            show: false, 
          },
        },
        series: [
          {
            data: [
              {
                x: "Fruits",
                y: 87,
                color: "#000",
              },
              {
                x: "Vegetables",
                y: 45,
              },
              {
                x: "Grains",
                y: 67,
              },
              {
                x: "Protein",
                y: 78,
              },
              {
                x: "Dairy",
                y: 87,
              },
              {
                x: "Dairy",
                y: 87,
              },
            ],
          },
        ],
        colors: ["#ff5722", "#2196f3", "#4caf50", "#ffeb3b", "#9c27b0", "#141418"],
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
          borderWidth: 0, // Remove border from tree blocks
          stroke: {
            show: false, // Hide stroke or set to null
            width: 0, // Set stroke width to 0
          },
        },
        tooltip: {
          enabled: true,
          formatter: function (val, opts) {
            return (
              opts.w.globals.series[opts.seriesIndex].data[opts.dataPointIndex].x +
              ": " +
              val
            );
          },
        },
      };
  return (
    <>
      <div className="tree-chart w-full">
        <style jsx global>{`
          .apexcharts-treemap-rect {
            stroke: none !important;
          }
        `}</style>
        <Chart
          options={options}
          series={options.series}
          type="treemap"
          height={150}
        />
        <div className="grid grid-cols-2 items-center justify-center gap-2 mt-4">
          {options.series[0].data.map((item, index) => (
            <LegendCustom
              key={index}
              bgColor={options.colors[index]}
              item={item.x}
              percentage={item.y}
            />
          ))}
        </div>
      </div>
    </>
  )
}
