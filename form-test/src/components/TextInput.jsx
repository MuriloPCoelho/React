
function TextInput({legenda, cor}) {
  
  return(
    <div className="">
      <label className={`block text-${cor}`} htmlFor="">{legenda}</label>
      <input className="w-full h-10 rounded-sm border-2 border-slate-100" type="text" id="" />
    </div>
  )

}

export default TextInput