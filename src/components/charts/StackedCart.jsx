import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import LegendCustom from './LegendCustom';

export default function StackedCart({data}) {
    const [chartData, setChartData] = useState({
        options: {
          chart: {
            type: "bar",
            stacked: true,
            height: 350,
            toolbar: {
              show: false, // Hide toolbar
            },
          },
          plotOptions: {
            bar: {
              horizontal: true,
            },
          },
          dataLabels: {
            enabled: false, // Disable the display of percentage labels
          },
          xaxis: {
            labels: {
              show: false, // Hide y-axis labels
            },
            axisBorder: {
              show: false, // Hide x-axis inner border
              stroke: {
                width: 0, // Make the x-axis inner border invisible
              },
            },
          },
          yaxis: {
            labels: {
              show: false, // Hide y-axis labels
            },
            axisBorder: {
              show: false, // Hide x-axis inner border
              stroke: {
                width: 0, // Make the x-axis inner border invisible
              },
            },
          },
          legend: {
            show: false,
          },
          fill: {
            opacity: 1,
          },
          colors: [
            "#008FFB",
            "#00E396",
            "#FEB019",
            "#FF4560",
            "#775DD0",
            "#F98404",
          ],
        },
        series: [
          {
            name: "Marine Sprite",
            data: [44],
          },
          {
            name: "Striking Calf",
            data: [53],
          },
          {
            name: "Tank Picture",
            data: [12],
          },
          {
            name: "Bucket Slope",
            data: [9],
          },
          {
            name: "Reborn Kid",
            data: [25],
          },
          {
            name: "Jon Kid",
            data: [50],
          },
        ], // fill this with your series data
      });
    
      useEffect(() => {
        if (data) {
          const { labels, series } = data;
          setChartData((prevState) => ({
            ...prevState,
            options: {
              ...prevState.options,
              xaxis: {
                categories: labels,
              },
            },
            series: series,
          }));
        }
      }, [data]);
  return (
    <div className="stacked-bar-chart w-full">
      <style jsx global>{`
        .apexcharts-xaxis-tick,
        .apexcharts-gridline {
          display: none !important;
        }
      `}</style>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={70}
        width={"100%"}
      />
      <div className="grid grid-cols-2 items-center gap-x-2 justify-center">
        {chartData.series.map((item, index) => (
          <LegendCustom
            key={index}
            bgColor={chartData.options.colors[index]}
            item={item.name}
            percentage={item.data[0]}
          />
        ))}
      </div>
    </div>
  )
}
