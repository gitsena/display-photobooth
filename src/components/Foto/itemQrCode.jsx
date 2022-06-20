import "./styleQrCode.css";

const qrCode = (props) => {
  return (
    <div
      className="imgFotoQRCode"
      style={{
        backgroundImage: `url(${props.linkImagem})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
    </div>
  );
};

export default qrCode;