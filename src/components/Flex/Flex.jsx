import './flex.css'

export default function Flex({column, wrap, gap, children}) {
    let flex = "flexclass"
    flex += column ? " fcol" : " frow"
    flex += wrap ? " fwrap" : " fnowrap"
    flex += gap && " fgap"

    return (
        <div className={flex}>
            {children}
        </div>
    )
}
