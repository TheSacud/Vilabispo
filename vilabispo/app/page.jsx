
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
        <p className="desc tex-center">This are probabley the questions i do myself everytime i open this project... 
          And I'm still not sure why. My family owns some Ha. in Algarve near Vila do Bispo.
          For years we have been trying to sell the land, but it's been dificult, mostly because it's very hard to get an aproval to build in the area. 
          It's also very unfair because right next to the land there is a wind farm.
          That being said I believe it's possible to do something with that much space, we only need capital and a viable idea to build something useful and maybe unique and hopefully profitable.
        </p>
    </section>
  )
}

export default Home;