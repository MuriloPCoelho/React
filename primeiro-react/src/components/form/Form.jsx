import TextInput from "../textInput/TextInput"
import SelectInput from "../selectInput/SelectInput"
import SubmitBtn from "../submitBtn/SubmitBtn"
import { useState } from "react"

function Form(props) { 

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  const aoSalvar = (evento) => {
    evento.preventDefault()
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className="flex justify-center my-20">
      <form onSubmit={aoSalvar} className="bg-cinza-claro w-[80%] rounded-lg py-6 px-16 shadow-3xl text-preto">
        <h2 className="font-Prata text-3xl text-preto">Preencha os dados para criar o card do colaborador</h2>
        <TextInput 
          obrigatorio={true} 
          label="Nome" 
          placeholder="Digite seu nome" 
          valor={nome}
          aoAlterado={valor => setNome(valor)}
        />
        <TextInput 
          obrigatorio={true} 
          label="Cargo" 
          placeholder="Digite seu cargo" 
          valor={cargo}
          aoAlterado={valor => setCargo(valor)}
        />
        <TextInput 
          label="Imagem" 
          placeholder="Digite o endereço da imagem" 
          valor={imagem}
          aoAlterado={valor => setImagem(valor)}
        />
        <SelectInput 
          label="Time" 
          itens={props.times}
          valor={time}
          aoAlterado={valor => setTime(valor)}
        />
        <SubmitBtn>
          Criar Card
        </SubmitBtn>
      </form>
    </section>
  )
}

export default Form