import Flex from "../Flex/Flex";
import { useState } from "react";
import "./itemcount.css"

export default function ItemCount({limit}) {
    const [count, setCount] = useState(1);

    const validCount = (value) => (value < 1 || value > limit) 

    const handleCount = ({target: btn}) => {
        let newValue = count
        btn.id === "btnAdd" ? newValue++ : newValue--
        setCount(newValue)
    }

    return (
        <Flex customclass={"countwrapper"}>
            <button disabled={validCount(count-1)} onClick={handleCount} className="item_count">-</button>
            <div>{count}</div>
            <button disabled={validCount(count+1)} onClick={handleCount} className="item_count" id="btnAdd">+</button>
        </Flex>
    )
}