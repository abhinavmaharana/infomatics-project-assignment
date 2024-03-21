import React from 'react';
import ReactApexChart from 'react-apexcharts';
import LegendCustom from './LegendCustom';

export default function PieChart({ data }) {
    const options = {
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
            enabled: false,
        },
        colors: data.map(item => item.color),
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
    };

    return (
        <div id="chart" className="flex flex-col items-center justify-center">
            <style jsx global>{`
                .apexcharts-legend-marker {
                    border-radius: 2px !important; /* Set border radius for legend markers */
                }
            `}</style>
            <ReactApexChart
                options={options}
                series={data.map(item => item.value)}
                type="pie"
                width={220}
                height={220}
            />
            <div className="grid grid-cols-2 items-center gap-y-2 justify-center mt-4">
                {data.map((item, index) => (
                    <LegendCustom
                        key={index}
                        bgColor={item.color}
                        item={item.label}
                        percentage={item.value}
                    />
                ))}
            </div>
        </div>
    );
}
