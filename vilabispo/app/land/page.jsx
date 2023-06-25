import Image from 'next/image';
import dgTerritorio from '@public/assets/images/dgterritorio.png';

function Land() {
  return (
    <section className="w-full flex-center flex-col">
      <span className="orange_gradient">Land in Vila do Bispo</span>
      <p className="desc tex-center">There are 7 areas that in total are 164 Ha.</p>
      <br className="max-md:hidden"/>
      <p>The actual land area is almost the same as represented on the map.<br />
      But it can be verified on the official Portuguese government site https://snic.dgterritorio.gov.pt/visualizadorCadastro<br />
      The following image has the necessary information to obtain the real areas and boundaries of the land.
      <Image
        src={dgTerritorio}
      />
      </p>
    </section>
  )
}

export default Land;