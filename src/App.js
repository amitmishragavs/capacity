import { LayoutComponent } from "./components/Layout/Layout";
import { SliderComponent } from "./components/Slider/Slider";
import './app.scss'
import { GChart } from "./components/GChart/GChart";

function App() {
  return <LayoutComponent >
    <SliderComponent className="app-wrapper" />
    <section className="g-chart">
    <GChart />
    </section>
  </LayoutComponent>;
}

export default App;
