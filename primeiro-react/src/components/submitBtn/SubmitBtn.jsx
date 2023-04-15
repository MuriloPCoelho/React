function SubmitBtn(props) {
  return (
    <>
      <input className="bg-azul-principal p-4 rounded-lg font-semibold text-white text-lg hover:cursor-pointer hover:bg-indigo-600 duration-75" type="submit" value={props.children} />
    </>
  )
}

export default SubmitBtn