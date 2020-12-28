import TestApi from "./components/TestApi";
import './App.css';
import Header from "./components/Header";
import fetchUrls from "./fetchUrl"
import {BrowserRouter,Route,Switch} from "react-router-dom";
import Home from "./components/Home"

function App() {
  return (
    <BrowserRouter>
    <div className="app">
    <Header/>
   <Switch>
   <Route  path="/" exact  render={()=>(<Home/>)}/>
     <Route path="/topheadline"  render={(props)=>(<TestApi {...props} endpoint={fetchUrls.topHeadlines}/>)}/>
     <Route path="/technology"  render={(props)=>(<TestApi {...props} endpoint={fetchUrls.technology}/>)}/>
     <Route path="/business" render={(props)=>(<TestApi {...props} endpoint={fetchUrls.business}/>)}/>
   </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
