import "./itemlistcontainer.css"
import Item from "../Item/Item"
import Flex from "../Flex/Flex"

export default function ItemListContainer(props) {
    return (
        <div className="itemcard">
            <h2>{props.greeting}</h2>
            <Flex column={false} wrap={true} gap={true}>
                <Item imgfolder={"vestidofloral"} price={1234}/>
                <Item imgfolder={"remeraboton"} price={2234}/>
                <Item imgfolder={"vestidorayado"} price={3234}/>

                <Item imgfolder={"test"} price={3333}/>
                <Item imgfolder={"test"} price={3333}/>
                <Item imgfolder={"test"} price={3333}/>
            </Flex>
        </div>
    )
}