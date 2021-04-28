import React, {useState} from 'react';
import './PagesStyles/Prix.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import md5 from "react-native-md5";
import pedros from '../photos/pedros_bg.jpg';

export default function Prix(props) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
      let text = document.querySelector('.code-input').value;
      let code = md5.hex_md5(text);
      if(code === "4f3926cdb3d8d09c0f9b0ccf3ca037e7") {
          setShow(true);
      }
    }

    return(
      <div className="prix-container">
        <h1>Entrez le code secrèt et récuperer votre prix</h1>
        <br/>
        <hr/>
        <br/>
        <div className="centered-container">
          <input type="password" className="code-input"/>
          <br/>
          <br/>
          <Button variant="success" onClick={handleShow}>Send</Button>
          <br/>
          <br/>
        </div>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pedros</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="pedro"></div></Modal.Body>
        </Modal>
      </div>
    );
}
