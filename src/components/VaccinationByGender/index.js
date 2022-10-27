// Write your code here
import {Component} from 'react'
import {ResponsiveContainer, PieChart, Pie, Legend, Cell} from 'recharts'
import './index.css'

class VaccinationByGender extends Component {
  render() {
    const {vaccinationByGender} = this.props
    return (
      <div className="vaccinationgender-container">
        <h1 className="gender-heading">Vaccination by gender</h1>
        <ResponsiveContainer width="100%" height={500}>
          <PieChart width={900} height={400}>
            <Pie
              data={vaccinationByGender}
              cx="50%"
              cy="50%"
              outerRadius="60%"
              dataKey="count"
            >
              <Cell name="18-44" fill="#2d87bb" />
              <Cell name="44-60" fill="#a3df9f" />
              <Cell name="Above 60" fill="#64c2a6" />
            </Pie>
            <Legend iconType="circle" layout="horizontal" align="center" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default VaccinationByGender
