import { Triangle } from  'react-loader-spinner'
import Modal from '../Modal/Modal'
import "./loader.css"

export default function Loader() {
  const wrpStyle = {
    alignSelf: "center",
    backgroundColor: "black",
    borderRadius: "50%",
    padding: "3rem"
  }
  
  return (
    <Modal customStyle={{backgroundColor: "rgba(255, 255, 255, 0.5)"}}>
      <Triangle
        height="100"
        width="100"
        color="white"
        ariaLabel="triangle-loading"
        wrapperStyle={wrpStyle}
        wrapperClassName=""
        visible={true}
      />
    </Modal>
  )
}
