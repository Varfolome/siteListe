import './Styles/Purpose.css';

export default function Purpose(props) {


    return(
      <div className="center-sup-wrapper">
      <div className="purpose-wrapper">
        <img src={props.purposeImg} className="purpose-img" />
        <div className="purpose-text-wrapper">
          <h1 className="purpose-name">{props.purposeName}</h1>
          <p className="purpose-description">{props.purposeDescription}</p>
        </div>
      </div>
      </div>
    );

}
