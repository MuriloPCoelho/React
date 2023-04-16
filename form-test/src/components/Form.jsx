import TextInput from "./TextInput"

function Form() {

  const listaDeLegendas = [
    {
      legenda: "Nome",
      cor: "red-500"
    },
    {
      legenda: "Email",
      cor: "blue-500"
    },
    {
      legenda: "Senha",
      cor: "green-500"
    },
    {
      legenda: "Confirme a senha",
      cor: "yellow-500 "
    }
  ]


  return (
    <form className="w-[640px] flex-col p-8 flex bg-slate-300 gap-4 rounded-sm shadow-lg">
      {listaDeLegendas.map((item) => <TextInput key={item.legenda} legenda={item.legenda} cor={item.cor} />)}
    </form>
  )
}

export default Form