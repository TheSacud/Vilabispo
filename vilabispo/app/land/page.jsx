import Image from 'next/image'

function Land() {
  return (
    <section className="w-full flex-center flex-col">
      <span className="orange_gradient">Land in Vila do Bispo</span>
      <p className="desc tex-center">There are 7 areas that in total are more or less 170 Ha.</p>
      <br className="max-md:hidden"/>
      <p>The actual land area is almost the same as represented on the map.<br />
      But it can be verified on the official Portuguese government site https://snic.dgterritorio.gov.pt/visualizadorCadastro
      The following image has the necessary information to obtain the real areas and boundaries of the land
      
      </p>
    </section>
  )
}

export default Land;