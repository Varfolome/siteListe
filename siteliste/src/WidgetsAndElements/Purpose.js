import './Styles/Purpose.css';
import {Accordion,Button,Card} from 'react-bootstrap';

export default function Purpose(props) {


    return(
      <div className="center-sup-wrapper">
      <div className="purpose-wrapper">
        <div className="purpose-text-wrapper">
          <h1 className="purpose-name">{props.purposeName}</h1>
          <img src={props.purposeImg} className="purpose-img" />
          <p className="purpose-description">{props.purposeDescription}</p>
        </div>
        <div>
        </div>
      </div>
      </div>
    );

}
