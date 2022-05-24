import './style.css'

const Foto = (props) => {

    return (
        <div className='imgFotoPintura' style={{backgroundImage : `url(${props.linkImagem})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition:"center"}}>
            <img src={props.linkImagem} alt="" width= "80%" height= "80%"/>
        </div>
    )
}


export default Foto;
