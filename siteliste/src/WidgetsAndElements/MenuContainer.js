import React from 'react';
import './Styles/MenuContainer.css';

export default class MenuContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {currentRenderingContentIndex: props.start};
  }

  showNewSection(newSectionNumber) {
    let idPrev = "";
    let idNext = "";
    idPrev += this.state.currentRenderingContentIndex;
    idNext += newSectionNumber;
    document.getElementById(idPrev).style="background: gray";
    document.getElementById(idNext).style="background: black";
    this.setState(state =>({
      currentRenderingContentIndex: newSectionNumber
    }));
  }

  menuControlItems = this.props.control.split(" ");
  i = this.props.start;
  menuControlItemsJSX = this.menuControlItems.map((controlItem) => <div key={controlItem} className="menu-container-control-element-wrapper rounded"><li id={this.i} className="menu-container-control-element" style={this.i === this.props.start ? {background: "black"} : {background: "gray"}} onClick={this.showNewSection.bind(this,this.i++)}>{controlItem}</li></div>);


  render() {


      return(
        <div className="menu-container-wrapper">
          <div className="menu-container">
            <div className="menu-container-control-wrapper">
              <ul className="menu-container-control">
                {this.menuControlItemsJSX}
              </ul>
            </div>
            <div className="menu-container-inner">
              {this.props.content[this.state.currentRenderingContentIndex - this.props.start]}
            </div>
          </div>
        </div>
      );
  }
}
