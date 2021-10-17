import React from 'react'
import ReactDOM from 'react-dom'

const Example = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header">Example Component</div>

            <div className="card-body">Im an example component!</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Example

if (document.getElementById('app')) {
  ReactDOM.render(<Example />, document.getElementById('app'))
}
