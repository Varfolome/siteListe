import './Styles/Choice.css';

export default function Choice(props) {

  let options = props.options.split(" ");
  const optionsList = options.map((word) => <option>{word}</option>);

  return(
    <div>
      <select class="form-select" aria-label={props.object}>
      <option selected>{props.object}</option>
      {optionsList}
      </select>
    </div>
  );
}
