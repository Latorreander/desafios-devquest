
const message = ()=>{
   
    alert('A Label desse botão é:',)
}

const Button = ({label}) =>{
    return <button onClick={message}>{label}</button>
}

export default Button

