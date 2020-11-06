import './WebWidjetComponent.css';
import krakenimage from './Kraken.jpg';

export default function WebWidgetComponent() {

    return(
          <div class="wrapper">
            <div class="section">
              <div class = "card">
              <div class="kraken-circle-wrapper">
                <div class="kraken-wrapper">
                  <img src={krakenimage} class="kraken"></img>
                  </div>
                  <div class="circle">
                    </div>
                </div>
                <div class="text-wrapper">
                  <h1>Testing a 3D Widget</h1>
                  <h3>Just testing and nothing more, bro</h3>
                  </div>
              </div>
            </div>
          </div>
  );
}
