function Footer() {
  return (
    <footer className="flex flex-wrap gap-8 justify-evenly items-center py-16 bg-azul-principal bg-footer-texture bg-no-repeat bg-cover">
      <div className="flex gap-8">
        <a href="#"><img className="h-8" src="../public/images/fb.png" alt="Logo do Facebook" /></a>
        <a href="#"><img className="h-8" src="../public/images/tw.png" alt="Logo do Twitter" /></a>
        <a href="#"><img className="h-8" src="../public/images/ig.png" alt="Logo do Instagram" /></a>
      </div>
      <img className="w-[166px]" src="../public/images/logo.png" alt="" />
      <span className="text-white text-xl">Desenvolvido por Alura.</span>
    </footer>
  )
}

export default Footer