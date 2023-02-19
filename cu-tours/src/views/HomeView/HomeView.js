import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import Grid from "../../components/Grid/Grid";
import "./_homeView.css";

function HomeView() {
  return (
    <React.Fragment>
    <div className="home-view">
      <Gallery />
      <Grid />
    </div>
  </React.Fragment>
  );
}

export default HomeView;
