import React, {useState} from 'react'

const Profiler = ({children, component}) => {

  const [metrics, setMetrics] = useState({compName:'', mode:'', actualTime:0, baseTime:0})

  const getMetrics = (compName, mode, actualTime, baseTime) => {
    let data = {
      compName,
      mode,
      actualTime,
      baseTime
    }

    if (data.compName === metrics.compName) return

    setMetrics(data)
  }

  return (
    <React.unstable_Profiler id={component} onRender={getMetrics}>
      <ul style={{textAlign:'left'}}>
        <li>Component: {metrics.compName}</li>
        <li>Mode: {metrics.mode}</li>
        <li>Actual Time: {metrics.actualTime}</li>
        <li>Base Time: {metrics.baseTime}</li>
      </ul>
      {children}
    </React.unstable_Profiler>
  )
}

export default Profiler
