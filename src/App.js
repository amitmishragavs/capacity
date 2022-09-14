import { LayoutComponent } from "./components/Layout/Layout";
import { SliderComponent } from "./components/Slider/Slider";
import './app.scss'

function App() {
  return <LayoutComponent >
    <SliderComponent className="app-wrapper" />
  </LayoutComponent>;
}

export default App;
