import React from 'react';

import './PagesStyles/Poles.css';
import FirstBlock from '../WidgetsAndElements/FirstBlock';
import SecondBlock from '../WidgetsAndElements/SecondBlock';

import dd from '../photos/img_mdp/dd.jpg'
import stand from '../photos/img_mdp/stand.jpg'
import prev from '../photos/img_mdp/prevrespo.jpg'
import resporits from '../photos/img_mdp/ritsrespo.jpg'
import rits from '../photos/img_mdp/rits.jpg'

import respore from '../photos/img_mdp/rerespo.jpg'
import re from '../photos/img_mdp/re.jpg'
import resposecret from '../photos/img_mdp/secretrespo.jpg'
import secret from '../photos/img_mdp/secret.jpg'
import respotres from '../photos/img_mdp/tresrespo.jpg'
import tres from '../photos/img_mdp/tres.jpg'

import respocom from '../photos/img_mdp/comrespo.jpg'
import com from '../photos/img_mdp/com.jpg'
import swei from '../photos/img_mdp/swei.jpg'
import tema from '../photos/img_mdp/tema.jpg'


export default class Poles extends React.Component {

  constructor(props) {
    super(props)
  }



  render() {

    return (
      <div className="poles">
          <FirstBlock />
            <SecondBlock />
      </div>


    );
  }
}
