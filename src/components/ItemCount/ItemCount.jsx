import Flex from "../Flex/Flex";
import { useState } from "react";
import "./itemcount.css"

export default function ItemCount({limit, callback}) {
    const [count, setCount] = useState(1);

    const validCount = (value) => (value < 1 || value > limit) 

    const handleCount = ({target: btn}) => {
        let newValue = count
        btn.id === "btnAdd" ? newValue++ : newValue--
        setCount(newValue)
        callback && callback(newValue)
    }

    return (
        <Flex customclass={"countwrapper"}>
            <button disabled={validCount(count-1)} onClick={handleCount}>-</button>
            <div className="item_count">{count}</div>
            <button disabled={validCount(count+1)} onClick={handleCount} id="btnAdd">+</button>
        </Flex>
    )
}