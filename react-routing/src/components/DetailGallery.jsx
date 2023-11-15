import { useParams } from "react-router-dom";

function DetailGallery() {
  // console.log(useParams());
  const { detailGallery } = useParams()
  return <div>{`Soy el detalle de la galería N° ${detailGallery}`}</div>;
}

export default DetailGallery;
