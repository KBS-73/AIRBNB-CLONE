import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./Pages/SearchPage/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            {/* Search Page */}
            <SearchPage />
          </Route>
          <Route path="/">
            {/* Home page */}
            <Home />
          </Route>
        </Switch>
        <Footer />

        {/* Search Page */}
      </Router>
    </div>
  );
}

export default App;
