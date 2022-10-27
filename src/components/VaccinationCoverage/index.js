// Write your code here
import {Component} from 'react'
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Legend,
} from 'recharts'
import './index.css'

class VaccinationCoverage extends Component {
  render() {
    const {lastSevenDays} = this.props
    console.log(lastSevenDays)
    const DataFormatter = number => {
      if (number > 1000) {
        return `${(number / 1000).toString()}k`
      }
      return number.toString()
    }
    return (
      <div className="coverage-container">
        <h1 className="coverage-heading">Vaccination Coverage</h1>
        <div className="coverage-charts">
          <ResponsiveContainer width="100%" height={500}>
            <BarChart
              width={900}
              height={400}
              data={lastSevenDays}
              margin={{top: 5}}
            >
              <XAxis
                dataKey="vaccineDate"
                tick={{stroke: '#cbd5e1', strokeWidth: 1, fontSize: 15}}
              />
              <YAxis
                tickFormatter={DataFormatter}
                tick={{stroke: '#cbd5e1', strokeWidth: 0.5, fontSize: 15}}
              />
              <Legend
                wrapperStyle={{
                  paddingTop: 20,
                  fontSize: 12,
                }}
              />
              <Bar
                dataKey="doseOne"
                name="Dose 1"
                fill="#5a8dee"
                barSize="30%"
                radius={[10, 10, 0, 0]}
                textAlign="center"
              />
              <Bar
                dataKey="doseTwo"
                name="Dose 2"
                fill="#f54394"
                barSize="30%"
                radius={[5, 5, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    )
  }
}

export default VaccinationCoverage
