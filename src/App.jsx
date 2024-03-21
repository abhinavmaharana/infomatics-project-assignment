import './App.css'
import CardBuilder from './components/CardBuilder'
import PieChart from './components/charts/PieChart'
import StackedCart from './components/charts/StackedCart'
import TreeMapChart from './components/charts/TreeMapChart'

function App() {
  const pieChartData = [
    { label: "Flexi Cap Fund", value: 32.19, color:'#75D6FF' },
    { label: "Small Cap Fund", value: 26.40, color:'#75FFFF' },
    { label: "Sectoral Fund", value: 26.40, color:'#FFC46A' },
    { label: "ELSS", value: 26.04, color:'#AA75FF'},
    { label: "Index Fund", value: 12.03, color:'#FF7BF2'},
    { label: "Large & Mid Cap Fund", value: 12.03, color:'#FF8E5D'}
  ];
  
  const stackedChartData = {
    labels: ["Equity", "Gold", "Bonds", "Govt. Securities"],
    series: [
      { name: "Equity", data: [32.19], color:"#75D6FF" },
      { name: "Gold", data: [26.40] , color: "#AA75FF"},
      { name: "Bonds", data: [26.40], color: "#75FFFF" },
      { name: "Govt. Securities", data: [26.40], color: "#FFC46A" },
    ]
  };  
  
  // const treeMapChartData = [
  //   { label: "Equity", value: 32.19, color: '#75D6FF' },
  //   { label: "Bonds", value: 26.40, color: '#75FFFF' },
  //   { label: "Gold", value: 26.40, color: '#AA75FF' },
  //   { label:"Govt. Securities", value: 26.40, color:'#FFC46A'}
  // ];

  const treeMapChartData = {
    labels: ["Oil & Gas", "Pharmaceutical", "Private Bank", "Construction", "Power Generation", "Other"],
    series: [
      { name: "Oil & Gas", data: [32.19], color:"" },
      { name: "Pharmaceutical", data: [26.4] },
      { name: "Private Bank", data: [26.04] },
      { name: "Construction", data: [12.03] },
      { name: "Power Generation", data: [26.4] },
      { name: "Other", data: [12.03] }
    ]
  };  
  

  return (
    <main className="mx-auto max-w-6xl p-20 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  justify-center mt-5">
        <CardBuilder title={"Sub-Category"} subtitle={"The assets are distributed between equity and cash & equivalents."}>
          <PieChart data={pieChartData} />
        </CardBuilder>
        <CardBuilder title={"Fund Distribution"} subtitle={"A mutual fund distribution represents the earnings of a fund being passed on to the individual investor or unit holder of the fund."}>
          <StackedCart data={stackedChartData}/>
        </CardBuilder>
        <CardBuilder title={"Top Sectors"} subtitle={"The assets are distributed between equity and cash & equivalents."}>
          <TreeMapChart />
        </CardBuilder>
      </div>
    </main>
  )
}

export default App
