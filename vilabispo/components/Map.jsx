"use client";

import { MapContainer ,TileLayer, LayerGroup, Polygon } from 'react-leaflet';
import { allDivs } from '@public/assets/geojson/allDivs';

function Map() {

  function PolygonElem({ index, coords, artigo }) {
    return (
        <>
            <Polygon
                key={index}
                positions={coords}
                eventHandlers={{
                    mouseover: (e) => {
                        const layer = e.target;
                        layer.setStyle({
                            dashArray: "",
                            fillColor: "#BD0026",
                            fillOpacity: 0.7,
                            weight: 2,
                            opacity: 1,
                            color: "white",
                        })
                    },
                    mouseout: (e) => {
                        const layer = e.target;
                        layer.setStyle({
                            fillOpacity: 0.7,
                            weight: 2,
                            dashArray: "3",
                            color: 'white',
                            fillColor: '#FD8D3C'
                        });
                    },
                    click: (e) => {
                    }
                }}
            >
            </Polygon>
        </>
    )
}

  return (
    
    <MapContainer center={[37.11966784866188, -8.890331717719054]} zoom={14} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <LayerGroup>
      {allDivs.features.map((artigo, index) => {
                            const coords = artigo.geometry.coordinates[0].map((item) => [item[1], item[0]]);
                            return (
                                <PolygonElem
                                    index={index}
                                    coords={coords}
                                    artigo={artigo}
                                    key={index}
                                />)
                        })}
      </LayerGroup>
    </MapContainer>
  )
}

export default Map;