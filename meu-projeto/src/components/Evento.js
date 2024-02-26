function Evento({ numero }) {

    function meuEvento() {
        console.log(`Opa, fui ativado! ${numero}`)
    }
    return (
        <div>
            <p>Click para disparar um Evento:</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento