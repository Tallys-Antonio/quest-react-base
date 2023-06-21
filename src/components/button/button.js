import './button.css'

const alertLabel = (label) => {
    alert(`A label desse butão é ${label}`)
}

const Button = ({label}) => {
    return (
        <button className='btn' onClick={() => {alertLabel(label)}}>
            {label}
        </button>
    )
}

Button.defaultProps = {
    label: 'Clique Aqui'
}

export default Button