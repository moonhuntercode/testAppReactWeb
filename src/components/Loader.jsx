import imageLoader from "../assets/mirada.jpg";
import "../styles/Loader.css";
export function Loader() {
  return (
    <div className="loader">
      <img src={imageLoader} alt="mirada" />
      <h1>CARGANDO... LOADER PRIMERO, LUEGO LO DEMÁS</h1>
    </div>
  );
}
