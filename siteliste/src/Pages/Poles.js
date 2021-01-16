import React from 'react';

import './PagesStyles/Poles.css';
import FirstBlock from '../WidgetsAndElements/FirstBlock';
import SecondBlock from '../WidgetsAndElements/SecondBlock';
import ThirdBlock from '../WidgetsAndElements/ThirdBlock';
import ForthBlock from '../WidgetsAndElements/ForthBlock';



export default class Poles extends React.Component {

  constructor(props) {
    super(props)
  }



  render() {


    return (
      <div className="poles">
          <FirstBlock lang={this.props.lang}/>
          <SecondBlock lang={this.props.lang}/>
          <ThirdBlock lang={this.props.lang}/>
          <ForthBlock lang={this.props.lang}/>
      </div>


    );
  }
}
