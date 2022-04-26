import { useState } from "react";
import Actor from "./components/Actor";
import ImagenUpload from "./components/ImagenUpload";

function App() {


  const [actores, setActores] = useState("");
  return (
    <>
      {actores ? <Actor actores={actores} setActores={setActores} /> : <ImagenUpload actores={actores} setActores={setActores} />}
    </>
  );
}

export default App;
