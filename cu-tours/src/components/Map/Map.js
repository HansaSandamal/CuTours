import React from "react";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

  

const Map = () => {
  return (
    <ComposableMap>
        <ZoomableGroup center={[79.8612, 6.9271]} zoom={160}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              coordinates={[79.8612, 6.9271]}
              style={{ fill: "red", stroke: "black", strokeWidth: 2 }}
              onMouseEnter={() => {
                console.log("Colombo");
              }}
            />
          ))
        }
      </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default Map;
