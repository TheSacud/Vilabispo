
import dynamic from 'next/dynamic'

const Map = dynamic(() => import("@/components/Map"), {
  loading: () => <p>loading...</p>,
  ssr: false
})

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <head>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossorigin=""/>
      </head>
        
        <h1 className="head_text text-center">VilaBispo</h1>
        <br className="max-md:hidden"/>
        <span className="orange_gradient">Land in Vila do Bispo</span>
        <p className="desc tex-center">Project to document the journey of trying to create something useful</p>
        <Map />
        <h1 className="head_text text-center">What is this? And why am I doing this?</h1>
        <br className="max-md:hidden"/>
        <p className="desc tex-center">
          These are questions I ask myself every time I work on this project... 
          <br />
          My family owns about 165 hectares in the Algarve, near Vila do Bispo.
          <br />
          For many years we have been trying to sell the land, but it is difficult because it is complicated to get building permits and we have no capital to invest.
          <br />
          Most of the land is only allowed to be farmed, with a few exceptions.
          Having said this, I believe there is something that can be done with the land, we just need ideas and capital to get started. And that is the goal of this project.
        </p>
    </section>
  )
}

export default Home;