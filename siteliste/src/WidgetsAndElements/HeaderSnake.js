import './Styles/HeaderSnake.css';

export default function HeaderSnake(props) {

  document.onreadystatechange = () => {
    if(document.readyState === 'complete') {
      const snake = document.querySelector('.c-snake');
      const snakeWrapper = document.querySelector('.snake');
      const permanent = document.querySelector('.c-rainbow__layer--green');
      let pixel_per_degree = 5;
      let mult_x_y = 0.18;
      let i=0;
      let add = 1;
      let mark = false;
      //permanent.style.display = 'none';
        setInterval(function(){
          if(i === 180) {
            add=-1;

          }
          if(i === -1 || mark) {
            i=0;
            mark=true;
          }
          let left_pixel = i * pixel_per_degree;
          let left_pixel_val = left_pixel + "px";
          let param = i * Math.PI / 180;
          let top_pixel = 0 - left_pixel * mult_x_y * Math.sin(param*param) / param;
          //console.log(Math.sin(i * Math.PI / 180));
          let top_pixel_val = top_pixel + "px";
          snake.style.left = left_pixel_val;
          let rot = i>=45 ?  ((i-90) / 12) : (-i / 12);
          snake.style.transform = "rotateZ("+ rot + "deg)";
          snake.style.top = top_pixel_val;
          i+=add;
        },25);
    }
  };

  return (
    <div className="snake">
    <ul className="c-snake">
    <li className="c-snake_layer c-rainbow__layer--green">{props.text}</li>
 <li className="c-snake_layer c-rainbow__layer--white">{props.text}</li>
 <li className="c-snake_layer c-rainbow__layer--paleyellow">{props.text}</li>
 <li className="c-snake_layer c-rainbow__layer--black">{props.text}</li>
</ul>
</div>
  );
}
