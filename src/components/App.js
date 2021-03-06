import React from "react";
import HomePage from "./home/HomePage";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./common/PageNotFound";
import Header from "./common/Header";
import AboutPage from "./about/AboutPage";
import Footer from "./common/Footer";
import AlbumsPage from "./album/AlbumsPage";
import "./App.scss";
import ManageAlbumPage from "./album/ManageAlbumPage";
import ManageArtistPage from "./artist/ManageArtistPage";
import ArtistsPage from "./artist/ArtistsPage";

function App() {
  return (
    <>
      <div className="container-fluid main-container">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/albums" component={AlbumsPage} />
          <Route path="/album/:id" component={ManageAlbumPage} />
          <Route path="/album/" component={ManageAlbumPage} />
          <Route path="/artists" component={ArtistsPage} />
          <Route path="/artist/:id" component={ManageArtistPage} />
          <Route path="/artist/" component={ManageArtistPage} />
          <Route path="/NotFound" component={PageNotFound} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
