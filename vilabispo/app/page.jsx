import dynamic from 'next/dynamic'

const Map = dynamic(() => import("@/components/Map"), {
  loading: () => <p>loading...</p>,
  ssr: false
})

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      
        <h1 className="head_text text-center">VilaBispo</h1>
        <br className="max-md:hidden"/>
        <span className="orange_gradient">Land in Vila do Bispo</span>
        <p className="desc tex-center">Project to document the journey of trying to create something useful</p>
        <Map />
        <h1 className="head_text text-center">What is this? And why am I doing this?</h1>
        <br className="max-md:hidden"/>
        <div>
          <p className="desc tex-center">These are questions I ask myself every time I work on this project...
            My family owns about 164 hectares in the Algarve, near Vila do Bispo. The land is owned by 4 people, but they are all willing to sell.
            For many years we have been trying to sell the land, but it is difficult because it is complicated to get building permits and we have no capital to invest.
            Most of the land is only allowed to be farmed, with a few exceptions.
            Having said this, I believe there is something that can be done with the land, we just need ideas and capital to get started. And that is the goal of this project.
          </p>
        </div>
        
    </section>
  )
}

export default Home;