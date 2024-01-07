import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import Grid from "../../components/Grid/Grid";
import DestinationsView from "../DestinationsView/DestinationsView";
import "./_homeView.css";

function HomeView() {
  return (
    <React.Fragment>
      <div className="home-view">
        <Gallery />
        <div style={{ height: "100%", overflow: "auto" }}>
          {/* <Grid /> */}
          <DestinationsView />
        </div>
      </div>
    </React.Fragment>
  );
}

export default HomeView;
