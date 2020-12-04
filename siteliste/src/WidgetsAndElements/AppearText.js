import './Styles/AppearText.css';

export default function AppearText(props) {

  let text = props.appearText.split(" ");
  let id = 1;
  let n = text.length;
  const appearList = text.map((word) => <li className="appear-element" key={(++id).toString()} style={{animationDuration: 200*Math.sin(Math.PI / 180 * ((id + 3) / 5)) + "s"}}>{word}</li>);
  return(
    <div>
      <ul className="appear-list">{appearList}</ul>
    </div>
  );
}
