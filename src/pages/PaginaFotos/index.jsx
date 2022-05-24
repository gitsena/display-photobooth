import Foto from '../../components/Foto';
import './style.css'
import imagem012 from "../../display-template/images/012.jpg";
import imagem013 from "../../display-template/images/013.jpg";
import imagem014 from "../../display-template/images/014.jpg";
import imagem017 from "../../display-template/images/017.jpg";
import imagem018 from "../../display-template/images/018.jpg";
import imagem019 from "../../display-template/images/019.jpg";
import imagem020 from "../../display-template/images/020.jpg";
import imagem021 from "../../display-template/images/021.jpg";
import imagem022 from "../../display-template/images/022.jpg";
import imagem023 from "../../display-template/images/023.jpg";
import imagem024 from "../../display-template/images/024.jpg";
import imagem025 from "../../display-template/images/025.jpg";
import imagem026 from "../../display-template/images/026.jpg";
import imagemFrida from "../../display-template/images/Frida.jpg";

const PaginaFotos = () => {

    return (
        <div className='divDisplay'>
            <div className='div1'>
            <Foto linkImagem={imagem012}></Foto>
            <Foto linkImagem={imagem013}></Foto>
            <Foto linkImagem={imagem014}></Foto>
            <Foto linkImagem={imagem017}></Foto>
            <Foto linkImagem={imagem026}></Foto>
            <Foto linkImagem={imagem018}></Foto>
            <Foto linkImagem={imagemFrida}></Foto>
            </div>
            <div className='div2'>
            <Foto linkImagem={imagem019}></Foto>
            <Foto linkImagem={imagem020}></Foto>
            <Foto linkImagem={imagem021}></Foto>
            <Foto linkImagem={imagem022}></Foto>
            <Foto linkImagem={imagem023}></Foto>
            <Foto linkImagem={imagem024}></Foto>
            <Foto linkImagem={imagem025}></Foto>
            </div>
        </div>
    )
}

export default PaginaFotos;


