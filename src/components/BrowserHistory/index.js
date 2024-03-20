import './index.css'

const BrowserHistory = props => {
  const {historyDetails, deleteHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="li-item">
      <div className="classify-list">
        <p className="head">{timeAccessed}</p>
        <div className="banner">
          <img src={logoUrl} alt="domain logo" className="logo" />
          <p className="head2">{title}</p>
          <p className="const">{domainUrl}</p>
        </div>
      </div>
      <button type="button" className="delete-style" onClick={onDeleteHistory}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default BrowserHistory
