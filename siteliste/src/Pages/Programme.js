import React from 'react';
import Purpose from '../WidgetsAndElements/Purpose';
import MenuContainer from '../WidgetsAndElements/MenuContainer';
import test from '../WidgetsAndElements/photos/instagram.png';
import './PagesStyles/Programme.css';

export default class Programme extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let generalPurposes = [[test, "testafsgergergererh", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."], [test, "lol", "sdgsdgsgshshsfh"]];
    let specificPurposes = [[test,"Soirée","L'objectif est de rendre l'expérience des soirées à l'INT inoubliable en visant toujours plus haut, toujours plus gros. En plus des traditionnels Club B et soirées organisées par le BDE chaque année on organiserait une sortie sur Paris pour la Technoparade et une sorte de Dîner Presque Parfait de la soirée en partenariat avec les autres écoles de l'Institut Polytechnique de Paris où il serait promis au vainqueur gloire et prestige éternels."],
    [test, "Séculog","Faire en sorte que les étudiants puissent profiter au maximum des événements organisés en toute sécurité avec une organisation optimale et un staffing sérieux."],
    [test, "Com","Mettre au courant les élèves des événements et fêtes organisés sur le campus pour leur donner envie de participer. C’est ainsi que le campus continuera à vivre, surtout en cette période difficile. Ne pas laisser de coté les élèves internationaux. Reprendre le menu de la semaine sur campus TMSP"],
    [test,"Prévention","La prévention de cette année a pour but, si la situation sanitaire le permet, d'enseigner une nouvelle façon de s'amuser en soirée tout en respectant sa santé et ses envies. La prévention sera également consciente des potentiels excès et débordements qui peuvent survenir, et fera tout son possible pour en minimiser les effets indésirables."]
    ];

    let generalPurposesJSX = generalPurposes.map((generalPurposeProps) => <li className="general-purposes-list-element" key={generalPurposeProps[1]}><Purpose purposeImg={generalPurposeProps[0]} purposeName={generalPurposeProps[1]} purposeDescription={generalPurposeProps[2]}/><br/><hr/><br/></li>);
    let specificPurposesJSX = specificPurposes.map((specificPurposeProps) => <div className="specific-purposes-element" key={specificPurposeProps[1]}><Purpose purposeImg={specificPurposeProps[0]} purposeName={specificPurposeProps[1]} purposeDescription={specificPurposeProps[2]}/></div>);

    return(
      <div className="programme">
        <h1>Nos objectifs généraux:</h1>
        <br/>
        <div className="general-purposes">
          <ul className="general-purposes-list">
            {generalPurposesJSX}
          </ul>
        </div>
        <br/>
        <br/>
        <h1>Nos objectifs spécifiques:</h1>
        <br/>
        <MenuContainer control="Soirée Séculog Com Prévention" content={specificPurposesJSX}/>
      </div>
    );
  }
}
