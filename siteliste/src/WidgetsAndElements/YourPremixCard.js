import './Styles/YourPremixCard.css';
import Choice from './Choice';

export default function YourPremixCard(props) {
  return(
    <div className="your-premix-card">
      <div className="your-theme-logo"></div>
      <div className="your-card-content">
        <div className="your-premix-image-wrapper">
          <img src={props.premixPhoto} className="rounded mx-auto d-block img-fluid premix-photo" alt="" />
          </div>
          <div className="premix-description-wrapper">
            <span className="premix-description">{props.description}</span>
          </div>
      </div>
      <div className="container">
      <div className="choice-menu">
        <Choice object="alcool" options="vodka martini wiski"/>
        <Choice object="diluant" options="jus coca fanta" />
        <Choice object="epices" options="sel poivre romarin" />
      </div>
      </div>
      <div className="confirm-menu">
        <button type="button" class="btn btn-danger choice-control-button">Recommencer</button>
        <button type="button" class="btn btn-warning choice-control-button">Aleatoire</button>
        <button type="button" class="btn btn-dark choice-control-button">Commander</button>
      </div>
    </div>
  );
}
