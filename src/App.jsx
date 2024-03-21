import { useState } from 'react'
import './App.css'
import CardBuilder from './components/CardBuilder'
import PieChart from './components/charts/PieChart'
import StackedCart from './components/charts/StackedCart'
import TreeMapChart from './components/charts/TreeMapChart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="mx-auto max-w-6xl p-20 md:p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10  justify-center mt-5">
        <CardBuilder title={"Sub-Category"} subtitle={"The assets are distributed between equity and cash & equivalents."}>
          <PieChart />
        </CardBuilder>
        <CardBuilder title={"Fund Distribution"} subtitle={"A mutual fund distribution represents the earnings of a fund being passed on to the individual investor or unit holder of the fund."}>
          <StackedCart />
        </CardBuilder>
        <CardBuilder title={"Top Sectors"} subtitle={"The assets are distributed between equity and cash & equivalents."}>
          <TreeMapChart />
        </CardBuilder>
      </div>
    </main>
  )
}

export default App
