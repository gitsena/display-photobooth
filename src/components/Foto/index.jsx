import "./style.css";

const Foto = (props) => {
  return (
    <div
      className="imgFotoPintura"
      style={{
        backgroundImage: `url(${props.linkImagem})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
    </div>
  );
};

export default Foto;
