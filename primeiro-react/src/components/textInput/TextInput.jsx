const TextInput = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)

    }

    return (
        <div className="my-6">
            <label className="block mb-2 text-lg font-semibold" htmlFor="">{props.label}</label>
            <input onChange={aoDigitado} className="bg-white shadow-lg w-full text-lg p-5 rounded-lg" type="text" id="" placeholder={props.placeholder} required={props.obrigatorio} />
        </div>
    )
}

export default TextInput