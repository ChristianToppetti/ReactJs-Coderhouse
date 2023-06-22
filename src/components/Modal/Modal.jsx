import {useNavigate, useLocation} from 'react-router-dom'
import "./modal.css"

export default function Modal({customStyle, children}) {
  const location = useLocation()
  const currBackground = location.state?.background
  const nav = useNavigate()
  
  const backNav = () => {
      const navPath = currBackground ? -1 : "/products"
      nav(navPath)
  }

  const closeModal = (e) => {
    // e.stopPropagation() no funcionaba aca
    e.target.id == "modal" && backNav()    
  }

  return (
    <div id='modal' className="modal" onClick={closeModal} style={customStyle}>
        {children}
    </div>
  )
}
