import './Styles/PremixCard.css'

export default function PremixCard(props) {
  return(
    <div className="premix-card">
      <div className="theme-logo"></div>
      <div className="card-content">
        <div className="premix-image-wrapper">
          <img src={props.premixPhoto} className="rounded mx-auto d-block" alt="">
          </div>
          <div className="premix-description-wrapper">
          <span className="premix-description">{props.description}</span>
          </div>
      </div>

      <button type="button" class="btn btn-dark">Commander</button>
    </div>
  );
}
