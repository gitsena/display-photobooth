import './style.css'

const Foto = (props) => {

    return (
        <div className='imgFotoPintura' style={{backgroundImage : `url(${props.linkImagem})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition:"center"}}>
            <img src={props.linkImagem} alt="" />
        </div>
    )
}


export default Foto;
