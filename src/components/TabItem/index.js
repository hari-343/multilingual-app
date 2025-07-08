import './index.css'

const TabItem = props => {
  const {details, changeState, isActive} = props
  const {id, buttonText} = details
  const classEl = isActive === true ? 'activeEl' : 'notActive'
  const ok = () => {
    changeState(id)
  }
  return (
    <div>
      <li className="button-list">
        <button className={classEl} type="button" onClick={ok}>
          {buttonText}
        </button>
      </li>
    </div>
  )
}

export default TabItem
