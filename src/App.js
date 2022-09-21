import { LayoutComponent } from "./components/Layout/Layout";
import { SliderComponent } from "./components/Slider/Slider";
import './app.scss'
import { GChart } from "./components/GChart/GChart";
import { Map } from "./components/Map/Map";
import { Switch, Route } from "react-router-dom";
import Details from "./Page/Hospital/Details";
import List from "./Page/Hospital/List";


function App() {
  return <LayoutComponent >
    <Switch>
      
     
      <Route exact path={["/", "/hospital"]} component={List} />
      <Route exact path="/hospital/:id" component={Details} />
      <Route exact path="/hospital"  component={List} />
    </Switch>
  </LayoutComponent>;
}

export default App;
// AIzaSyBHAg852x7fYORQ0iGvHcDPJeKiFzZWMSQ