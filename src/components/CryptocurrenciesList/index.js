import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrencyItem from '../CryptocurrencyItem/index'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoList: [], isLoading: true}

  componentDidMount = () => {
    this.getItems()
  }

  getItems = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptoList: updatedData, isLoading: false})
  }

  render() {
    const {cryptoList, isLoading} = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="list-container">
            <h1 className="head">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="image"
            />
            <ul className="list-model-table">
              <li className="first-item">
                <h1 className="column-name">Coin Type</h1>
                <div className="money-column">
                  <h1 className="column-name">USD</h1>
                  <h1 className="column-name">EURO</h1>
                </div>
              </li>
              {cryptoList.map(eachItem => (
                <CryptocurrencyItem
                  cryptoListItem={eachItem}
                  key={eachItem.id}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default CryptocurrenciesList
