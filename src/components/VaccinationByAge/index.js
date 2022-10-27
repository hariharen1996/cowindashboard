// Write your code here
import {Component} from 'react'
import {PieChart, Pie, Legend, Cell, ResponsiveContainer} from 'recharts'
import './index.css'

class VaccinationByAge extends Component {
  render() {
    const {vaccinationByAge} = this.props
    return (
      <div className="vaccinationage-container">
        <h1 className="age-heading">Vaccination by Age</h1>
        <ResponsiveContainer width="100%" height={500}>
          <PieChart width={900} height={400}>
            <Pie
              cx="50%"
              cy="50%"
              data={vaccinationByAge}
              outerRadius="60%"
              innerRadius="30%"
              startAngle={0}
              endAngle={180}
              dataKey="count"
            >
              <Cell name="Male" fill="#2cc6c6" />
              <Cell name="Female" fill="#5a8dee" />
              <Cell name="Others" fill="#f54394" />
            </Pie>

            <Legend
              iconType="cirlce"
              layout="horizontal"
              verticalAlign="bottom"
              align="center"
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default VaccinationByAge
