import './flex.css'

export default function Flex({column=false, wrap=false, customclass, children}) {
    let flex = "flexclass"
    flex += column ? " fcol" : " frow"
    flex += wrap ? " fwrap" : " fnowrap"
    customclass && (flex += ` ${customclass}`)

    return (
        <div className={flex}>
            {children}
        </div>
    )
}
