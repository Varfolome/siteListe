import './Styles/YourPremixCard.css';

export default function YourPremixCard(props) {
  return(
    <div className="your-premix-card">
      <div className="your-theme-logo"></div>
      <div className="your-card-content">
        <div className="your-premix-image-wrapper">
          <img src={props.premixPhoto} className="rounded mx-auto d-block" alt="">
          </div>
          <div className="premix-description-wrapper">
            <span className="premix-description">{props.description}</span>
          </div>
      </div>
      <div className="choice-menu">
        <Choice object="" options=""/>
      </div>
      <div className="confirm-menu">
        <button type="button" class="btn btn-danger">Recommencer</button>
        <button type="button" class="btn btn-warning">Aleatoire</button>
        <button type="button" class="btn btn-dark">Commander</button>
      </div>
    </div>
  );
}
