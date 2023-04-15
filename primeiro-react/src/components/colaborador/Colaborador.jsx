function Colaborador({nome, cargo, imagem, corDeFundo}) {
  console.log(corDeFundo)
  return (
    <div className="w-full max-w-[280px]"> 
      <div className="rounded-t-lg" style={{backgroundColor: corDeFundo}}>
        <img className="mx-auto w-24 rounded-full relative top-10" src={imagem} alt="Foto de Murilo" />
      </div>
      <div className="bg-white rounded-b-lg pb-10 pt-14 shadow-md">
        <h4 className="text-lg font-bold mb-2 text-azul-principal">{nome}</h4>
        <h5 className="text-lg px-4 text-preto">{cargo}</h5>
      </div>
    </div>
  )
}

export default Colaborador