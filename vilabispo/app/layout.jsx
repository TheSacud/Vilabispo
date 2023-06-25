import '@styles/globals.css';
import Nav from '@components/Nav';

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <head>
          <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
            integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
            crossorigin=""/>
        </head>
        <body>
            <div className='main'>
                <div className='gradient' />
            </div>
            <main className='app'>
                <Nav />
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;