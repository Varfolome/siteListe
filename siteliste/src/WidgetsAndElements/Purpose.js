import './Styles/Purpose.css';

export default function Purpose(props) {


    return(
      <div className="purpose-wrapper">
        <img src={props.purposeImg} className="purpose-img" />
        <p className="purpose-description">{props.purposeDescription}</p>
      </div>
    );

}
