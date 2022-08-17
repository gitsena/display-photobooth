import Foto from '../../components/Foto';
import Logo from '../../components/Foto/itemLogo';
import QRCode from '../../components/Foto/itemQrCode';
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
import qrCode from "../../display-template/images/qr-code-photo.png";

const PaginaFotos = () => {

    return (
        <div className='divRoot'>

            <div className='divDisplay'>

                <div className='div3'>
                    <Logo linkImagem={imagemLogo} ></Logo>
                </div>

                <div className='div1'>
                    <div className='texto'>
                        Autor Wassily Kandinsky,<br />
                        Composição VII 1913
                        <Foto linkImagem={imagem012} ></Foto>
                    </div>
                    <div className='texto'>
                        Autor Kanagawa Hokusai,<br />
                        A Grande Onda 1830
                        <Foto linkImagem={imagem013}></Foto>
                    </div>
                    <div className='texto'>
                        Autor desconhecido, <br />
                        Pilares da Criação 1995
                        <Foto linkImagem={imagem014}></Foto>
                    </div>
                    <div className='texto'>
                        Autor Van Gogh<br />
                        Noite Estrelada,1889
                        <Foto linkImagem={imagem017}></Foto>
                    </div>
                    <div className='texto'>
                        Autor Amadeo de Souza<br />
                        Figura Negra, 1915
                        <Foto linkImagem={imagem026}></Foto>
                    </div>
                    <div className='texto'>
                        Autor Edward Munch<br />
                        O Grito, 1893
                        <Foto linkImagem={imagem018}></Foto>
                    </div>
                    <div className='texto'>
                        Autor Frida Kablo<br />
                        Roots, 1943
                        <Foto linkImagem={imagemFrida}></Foto>
                    </div>

                </div>

                <div className='div2'>
                    <div className='texto'>
                        Autor Pablo Picasso<br />
                        Senhoras de Avignon, 1907
                        <Foto linkImagem={imagem019}></Foto>
                    </div>

                    <div className='texto'>
                        Autor Pablo Picasso<br />
                        Man With a Violin, 1912
                        <Foto linkImagem={imagem020}></Foto>
                    </div>

                    <div className='texto'>
                        Autor Pablo Picasso<br />
                        Still Life, 1911
                        <Foto linkImagem={imagem021}></Foto>
                    </div>

                    <div className='texto'>
                        Autor Desconhecido<br />
                        Uma Faisca no Escuro
                        <Foto linkImagem={imagem022}></Foto>
                    </div>

                    <div className='texto'>
                        Autor Gyula Derkovits<br />
                        Woman Head, 1922
                        <Foto linkImagem={imagem023}></Foto>
                    </div>

                    <div className='texto'>
                        Autor Amadeo de Souza<br />
                        Still Life, 1913
                        <Foto linkImagem={imagem024}></Foto>
                    </div>

                    <div className='texto'>
                        Autor Gyulia Derkovits<br />
                        Wheelbarrow, 1920
                        <Foto linkImagem={imagem025}></Foto>
                    </div>
                </div>
            </div>

            <div className='divCode'>

                <div className='textoCode'>Entre em nosso site<br />usando o QR code
                    <QRCode linkImagem={qrCode} ></QRCode>
                </div>
            </div>
        </div>

    )
}

export default PaginaFotos;


