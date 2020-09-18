import React, {useState, useEffect} from 'react';
import firebase from "../../config/firebase"
import {Link} from "react-router-dom"
//import {useSelector} from "react-redux"
import NavBar from "../../components/NavBar"
import "./eventodetalhe.css"

function EventoDetalhe(props) {
  const [evento, setEvento] = useState({})
  const [urlImg, setUrlImg] = useState({})

  useEffect(()=> {
   firebase.firestore().collection('eventos').doc(props.match.params.id).get()
    .then(r => {
      setEvento(r.data())
      firebase.storage().ref(`imagens/${evento.foto}`).getDownloadURL()
      .then(url => setUrlImg(url))
    }) 
  })

  return (
    <>
      <NavBar/>
      <h1>Detalhes</h1>
      <div className="container-fluid">
        <div className="row">
          <img src={urlImg} className="img-banner" alt="banner"/>
          <h3 className="mx-auto">{evento.titulo}</h3>
        </div>

        <div className="row mt-5 d-flex justify-content-around">
          <div className="col-md-3 col-sm-12 box-info p-3 my-2">
            <i className="fas fa-ticket-alt fa-2x"></i>
            <h5><strong>Tipo</strong> </h5>
            <span className="mt-3">{evento.tipo}</span>
          </div>

          <div className="col-md-3 col-sm-12 box-info p-3 my-2">
            <i className="fas fa-calendar-alt fa-2x"></i>
            <h5><strong>Data</strong> </h5>
            <span className="mt-3">{evento.data}</span>
          </div>

          <div className="col-md-3 col-sm-12 box-info p-3 my-2">
            <i className="fas fa-clock fa-2x"></i>
            <h5><strong>Hora</strong> </h5>
            <span className="mt-3">{evento.hora}</span>
          </div>
        </div>

        <div className="row box-detalhes mt-5">
          <div className="col-12 text-center">
            <h5>Detalhes do evento</h5>
          </div>
          <div className="col-12 text-center">
            <p>{evento.detalhes}</p>
          </div>     
          
        </div>

        <Link to="" className="btn-editar"><i className="fas fa-pen-square fa-3x"></i> </Link>
      </div>
    </>
  )
}

export default EventoDetalhe;