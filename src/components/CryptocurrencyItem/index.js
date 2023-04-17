import {Component} from 'react'
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoListItem} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoListItem

  return (
    <li className="list-item">
      <div className="money-cont">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="currency-name">{currencyName}</p>
      </div>
      <div className="money-cont">
        <p className="currency-value">{usdValue}</p>
        <div className="currency-gap">
          <p>{euroValue}</p>
        </div>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
