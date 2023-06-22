export default function Button({disabled, customclass, callback, children}) {
  const handleButton = () => {
    callback && callback()
  }

  const btnClass = customclass ? customclass : ""

  return (
    <button disabled={disabled} className={btnClass} onClick={handleButton}>{children}</button>
  )
}
  