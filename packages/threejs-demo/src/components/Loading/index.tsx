import './index.less'

function Loading() {
  return (
    <div>
      <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="loading-text-intro">
        <p>Loading</p>
      </div>
    </div>
  )
}

export default Loading
