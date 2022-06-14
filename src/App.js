import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";


// console.log(galleries)


function App() {
  return (
    <GalleryNavigation galleries={harvardArt.records}/>
  );
}

export default App;
