import Colaborador from "../colaborador/Colaborador"

function Time(props) {
  
  const css = [
    {backgroundColor: props.corSecundaria},
    {borderColor: props.corPrimaria}
  ]

  return (
    (props.colaboradores.length > 0) ? <section className='text-center p-8' style={css[0]}>
      <h3 className="inline-block font-Prata text-xl text-preto"> {props.nome} </h3>
      <hr className='mx-auto border-t-4 w-8' style={css[1]}/>
      <div className="flex justify-around gap-4 flex-wrap mt-8">
        {props.colaboradores.map(colaborador => <Colaborador
          key={colaborador.nome} 
          nome={colaborador.nome} 
          cargo={colaborador.cargo} 
          imagem={colaborador.imagem} 
          corDeFundo={props.corPrimaria}
        />)}
      </div>
    </section>
    :''
  )
}

export default Time