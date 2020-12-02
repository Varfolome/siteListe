import './Styles/HeaderBloom.css';

export default function HeaderBloom(props) {
  return(
    <div className="bloom-wrapper">
      <h1 className="bloom">{props.text}</h1>
    </div>
  );
}
