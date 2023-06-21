
const Text = ({ children, color, textTransform }) => {
    return (
        <p style={{ color: color, textTransform: textTransform }}>
            {children}
        </p>
    )
}

Text.defaultProps = {
    color: 'black',
    textTransform: 'none',
    children: 'Esse texto pode ser alterado a cor, o text-transform e também pode ser colocado um texto dentro'
}

export default Text