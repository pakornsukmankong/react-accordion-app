import { useState } from "react"
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";



const SingleAccordion = (props) => {
  const [showContent,setShowContent] = useState(false)

  const handleClick = () => {
    if (showContent === false) {
      setShowContent(true)
    }else {
      setShowContent(false)
    }
    
  }

  return (
    <article>
      <header>
        <h1>{props.title}</h1>
        <button className="btn" onClick={handleClick}>
          {showContent?<AiOutlineMinus/> :<AiOutlinePlus/>}
          
        </button>
      </header>
        {showContent && <p>{props.description}</p>}
    </article>
  )
}

export default SingleAccordion