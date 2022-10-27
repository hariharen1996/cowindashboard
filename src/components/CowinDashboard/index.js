// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage/index'
import VaccinationByAge from '../VaccinationByAge/index'
import VaccinationByGender from '../VaccinationByGender/index'
import './index.css'

const constantTypes = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class CowinDashboard extends Component {
  state = {data: [], apiStatus: constantTypes.initial}

  componentDidMount() {
    this.getCowinData()
  }

  getCowinData = async () => {
    this.setState({apiStatus: constantTypes.loading})
    const response = await fetch('https://apis.ccbp.in/covid-vaccination-data')
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        lastSevenDays: data.last_7_days_vaccination.map(item => ({
          doseOne: item.dose_1,
          doseTwo: item.dose_2,
          vaccineDate: item.vaccine_date,
        })),
        vaccinationByAge: data.vaccination_by_age.map(item => ({
          age: item.age,
          count: item.count,
        })),
        vaccinationByGender: data.vaccination_by_gender.map(item => ({
          count: item.count,
          gender: item.gender,
        })),
      }
      this.setState({data: updatedData, apiStatus: constantTypes.success})
    } else {
      this.setState({apiStatus: constantTypes.failure})
    }
  }

  renderFailure = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        className="error-img"
        alt="failure view"
      />
      <h1 className="error-text">Something went wrong</h1>
    </div>
  )

  renderSuccessData = () => {
    const {data} = this.state
    console.log(data)
    return (
      <>
        <div className="container">
          <VaccinationCoverage lastSevenDays={data.lastSevenDays} />
        </div>
        <div className="container">
          <VaccinationByAge vaccinationByAge={data.vaccinationByAge} />
        </div>
        <div className="container">
          <VaccinationByGender vaccinationByGender={data.vaccinationByGender} />
        </div>
      </>
    )
  }

  renderLoader = () => (
    // eslint-disable-next-line react/no-unknown-property
    <div testid="loader" className="loader-container">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderStatus = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case constantTypes.success:
        return this.renderSuccessData()
      case constantTypes.failure:
        return this.renderFailure()
      case constantTypes.loading:
        return this.renderLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            className="logo"
            alt="website logo"
          />
          <p className="logo-text">Co-WIN</p>
        </div>
        <h1 className="heading">CoWIN Vaccination in India</h1>
        <div className="cowin-dashboards">{this.renderStatus()}</div>
      </div>
    )
  }
}

export default CowinDashboard
