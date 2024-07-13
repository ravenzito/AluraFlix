function Categoria({ nome, cor }) {
    const estilo = {
        backgroundColor: cor,
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        color: '#fff',
        textAlign: 'center'
    };

    return (
        <div style={estilo}>
            {nome}
        </div>
    );
}

export default Categoria;