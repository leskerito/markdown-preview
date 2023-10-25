import { useState, React } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownLeftAndUpRightToCenter } from '@fortawesome/free-solid-svg-icons'
import { faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons'

export default function Topbar ({name, handleMaximized, ismaximized}){

  const [max, setMax] = useState(ismaximized)

  function topbarMaximize(){
    handleMaximized()
    setMax(!max)
  }

    return (
      <div className='topbar-wrap'>
        <h3>
          {name}
        </h3>
        <FontAwesomeIcon className="icon" size='lg' icon={ max ? faUpRightAndDownLeftFromCenter : faDownLeftAndUpRightToCenter} onClick={topbarMaximize} />
      </div>
    )
  }