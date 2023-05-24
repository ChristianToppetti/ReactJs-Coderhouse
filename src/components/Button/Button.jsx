export default function Button({customclass, callback, children}) {
    function handleButton() {
        callback && callback()
    }

    const btnClass = customclass ? customclass : ""

    return (
      <button className={btnClass} onClick={handleButton}>{children}</button>
    )
  }
  