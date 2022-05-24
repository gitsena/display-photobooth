import "./styleLogo.css";

const Logo = (props) => {
  return (
    <div
      className="imgFotoLogo"
      style={{
        backgroundImage: `url(${props.linkImagem})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}>
    </div>
  );
};

export default Logo;