function SelectInput(props) {
  return (
    <div className="mb-6">
      <label className="block mb-2 text-lg font-semibold" htmlFor="selectTime">{props.label}</label>
      <select onChange={evento => props.aoAlterado(evento.target.value)} value={props.valor} className="bg-white shadow-lg w-full text-lg p-5 rounded-lg" id="selectTime">
        {props.itens.map(item => <option value={item} key={item}>{item}</option>)}
      </select>
    </div>
  )
}

export default SelectInput