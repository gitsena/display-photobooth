import Foto from '../../components/Foto';
import Logo from '../../components/Foto/itemLogo';
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
import imagemLogo from "../../display-template/images/logo-AI.png";

const PaginaFotos = () => {

    return (
        <div className='divDisplay'>

            <div className='div3'>
                <Logo linkImagem={imagemLogo} ></Logo>
            </div>

            <div className='div1'>
                <div className='texto'>
                    O texto entra aqui…
                    <Foto linkImagem={imagem012} ></Foto>
                </div>
                <div className='texto'>
                    O texto entra aqui…
                    <Foto linkImagem={imagem013}></Foto>
                </div>
                <div className='texto'>
                    O texto entra aqui…
                    <Foto linkImagem={imagem014}></Foto>
                </div>
                <div className='texto'>
                    O texto entra aqui…
                    <Foto linkImagem={imagem017}></Foto>
                </div>
                <div className='texto'>
                    O texto entra aqui…
                    <Foto linkImagem={imagem026}></Foto>
                </div>
                <div className='texto'>
                    O texto entra aqui…
                    <Foto linkImagem={imagem018}></Foto>
                </div>
                <div className='texto'>
                    O texto entra aqui…
                    <Foto linkImagem={imagemFrida}></Foto>
                </div>

            </div>

            <div className='div2'>
                <div className='texto'>
                    O texto entra aqui…
                    <Foto linkImagem={imagem019}></Foto>
                </div>
                
                <div className='texto'>
                    O texto entra aqui…
                    <Foto linkImagem={imagem020}></Foto>
                </div>

                <div className='texto'>
                    O texto entra aqui…
                    <Foto linkImagem={imagem021}></Foto>
                </div>

                <div className='texto'>
                    O texto entra aqui…
                    <Foto linkImagem={imagem022}></Foto>
                </div>

                <div className='texto'>
                    O texto entra aqui…
                    <Foto linkImagem={imagem023}></Foto>
                </div>

                <div className='texto'>
                    O texto entra aqui…
                    <Foto linkImagem={imagem024}></Foto>
                </div>

                <div className='texto'>
                    O texto entra aqui…
                    <Foto linkImagem={imagem025}></Foto>
                </div>
            </div>
        </div>
    )
}

export default PaginaFotos;


