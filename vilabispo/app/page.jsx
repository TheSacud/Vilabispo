import Map from "@components/Map";


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
    </section>
  )
}

export default Home;