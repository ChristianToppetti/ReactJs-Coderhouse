import { useState } from "react";

export default function ItemCount() {
    const [count, setCount] = useState(1);

    const validCount = (value) => (value < 1 || value > 5) 

    const handleCount = ({target: btn}) => {
        let newValue = count
        btn.id === "btnAdd" ? newValue++ : newValue--
        setCount(newValue)
    }

    return (
        <div>
            <button disabled={validCount(count-1)} onClick={handleCount}>-</button>
            <span>{count}</span>
            <button disabled={validCount(count+1)} onClick={handleCount} id="btnAdd">+</button>
        </div>
    )
}