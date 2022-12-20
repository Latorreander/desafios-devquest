
const ColoredText = ({textColor, children}) =>

    <p style={{color: textColor}}>{children.toUpperCase()}</p>


export  {ColoredText}