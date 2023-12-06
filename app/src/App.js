import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import NavbarComponent from "./components/navbar/NavbarComponent";
import Home from "./components/home/Home";
import Blogs from "./components/blogs/Blogs";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { DetailsProvider } from "./context/context";
import Default from "./components/Default";
import Quotes from "./components/quotes/Quotes";

function App() {
  return (
    <React.Fragment>
      <NavbarComponent />
      <Quotes />
      <DetailsProvider>
        <Switch>
          <Route exact path="/" component={Home} />          
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route
            exact path="/blogs/:name"
            render={(props) => {
              return <Blogs {...props}/>;
            }}
          />
          <Route component={Default} />
        </Switch>
        <Footer />        
      </DetailsProvider>
    </React.Fragment>
  );
}

export default App;
