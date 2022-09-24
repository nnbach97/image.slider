import "./App.css";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import ImageSlide from "./components/ImageSlide";
import { listImages } from "./assets/listImage";

function App() {
  return (
    <div className="App">
      <div className="Main">
        <ImageSlide listImages={listImages} />
      </div>
    </div>
  );
}

export default App;
