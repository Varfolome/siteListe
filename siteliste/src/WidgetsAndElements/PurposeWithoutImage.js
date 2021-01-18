import './Styles/Purpose.css';

export default function PurposeWithoutImage(props) {


    return(
      <div className="center-sup-wrapper">
      <div className="purpose-wrapper">
        <div className="purpose-text-wrapper">
          <h1 className="purpose-name">{props.purposeName}</h1>
          <p className="purpose-description">{props.purposeDescription}</p>
        </div>
      </div>
      </div>
    );

}
