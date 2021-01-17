import React from 'react';
import Purpose from '../WidgetsAndElements/Purpose';
import MenuContainer from '../WidgetsAndElements/MenuContainer';
import './PagesStyles/Programme.css';

import test from '../WidgetsAndElements/photos/instagram.png';

export default class Programme extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let textSoiree = "L'objectif est de rendre l'expérience des soirées à l'INT inoubliable en visant toujours plus haut, toujours plus gros. En plus des traditionnels Club B et soirées organisées par le BDE chaque année on organiserait une sortie sur Paris pour la Technoparade et une sorte de Dîner Presque Parfait de la soirée en partenariat avec les autres écoles de l'Institut Polytechnique de Paris où il serait promis au vainqueur gloire et prestige éternels.";
    let textSecu = "Faire en sorte que les étudiants puissent profiter au maximum des événements organisés en toute sécurité avec une organisation optimale et un staffing sérieux.";
    let textCom = "Tenir au courant l'INT des divers événements et fêtes organisés sur le campus pour leur donner envie de participer. C’est ainsi que le campus continuera à vivre, surtout en cette période difficile. Ne pas laisser de coté les élèves internationaux. Reprendre le menu de la semaine sur campus TMSP";
    let textPrev = "La prévention de cette année a pour but, si la situation sanitaire le permet, d'enseigner une nouvelle façon de s'amuser en soirée tout en respectant sa santé et ses envies. La prévention sera également consciente des potentiels excès et débordements qui peuvent survenir, et fera tout son possible pour en minimiser les effets indésirables.";
    let textRits = "Satisfaire vos estomacs en vous faisant découvrir nos recettes tout en s'adaptant à vos goûts. Assurer des stands de nourriture occasionnellement afin d'avoir un petit remontant pendant sa journée.";
    let textTres = "Notre objectif est d'optimiser au maximum le budget de la trésorerie en l'utilisant de manière judicieuse. Un budget bien géré pour un campus plus dynamique. Rattrapons les dégâts de la COVID-19 !";
    let textRE = "sgdgsdgsdg";
    let textNum ="Soigner une interface numérique entre la Liste et le reste du monde au travers d'un site Web, rassembler tout le campus à travers des jeux digitaux, et enfin offrir nos compétences aux autres pôles afin qu'ils puissent utiliser les outils numériques à leur guise, et proposer des activités interactives en ligne.";

    let textPougnes = "dasgsgsdg";
    let textTema = "Montrer aux 1A l'importance de T&MA pour les aider à bâtir un véritable réseau professionnel qui pourront les aider pour leur stages, tout en accompagnant les 2A/3A à décrocher un stage/CDI. Permettre la tenue d'un forum avec les anciens élèves. Poursuivre l'annuaire des anciens élèves grâce à David Chhean (notre interlocuteur auprès de l'asso T&MA !!)";
    let textStand = "Mise en place de stands de détente, d'activités mais aussi de nourriture pour tous les étudiants de l'INT. Ce seront des espaces où ils pourront effectuer une coupure avec le train train scolaire, discuter et faire des connaissances en toute convivialité.";
    let textSecret = "Optimiser l'organisation des ressources administratives de la liste pour maximiser la productivité. Permettre le bon déroulement des réunions pour faciliter la communication des informations. Offrir à nos sucesseurs une bonne base et de bons conseils pour un secrétariat efficace.";
    let textSWEI = "Organiser une SEI permettant de faire découvrir aux 1A l'ensemble du campus et de ses associations et un WEI reprennant les activités traditionnelles (saut à l'élastique, soirée, GR etc...) tout en ajoutant de nouvelles activités qui n'ont pas pu être réalisées l'année passée et le tout dans un endroit vous permettant de vous évader une ultime fois avant la rentrée scolaire.";
    let textVoyage = "Organiser des voyages qui permettront aux étudiants de découvrir de nouveaux lieux et de nouvelles cultures. L'objectif du pôle voyage est de planifier 3 destinations et un large panel d'activités qui sauront plaire et susciter l'envie chez chacun.";
    let textDD = "Promouvoir une réflexion écologique à l'aide d'activités plaisantes. Diminuer les consommations de ressources du campus. Ne pas oublier le côté social du développement durable en aidant les associations caritatives alentour.";

    if(this.props.lang === "english") {
      textSoiree = "The goal is to make the INT party experience unforgettable by aiming higher and bigger. In addition to the traditional Club B and parties organized by the BDE every year we would organize an outing to Paris for the Technoparade and a kind of 'Dîner Presque Parfait' in partnership with other schools of Institut Polytechnique de Paris where glory and eternal prestige would be promised to the winner .";
      textSecu = "To ensure that students can make the most of the events organized safely with optimal organization and serious staffing.";
      textCom = "Keep the INT informed of the various events and parties organized on the campus to make them want to participate. This is how the campus will continue to live, especially in these difficult times. To not leave out the international students. Resume the menu of the week on campus TMSP.";
      textPrev = "The goal of this year's prevention is, if the health situation permits, to teach a new way of having fun in parties while respecting one's health and desires. Prevention will also be aware of the potential excesses and overflows that can occur, and will do everything possible to minimize the undesirable effects.";
      textRits = "Satisfy your stomachs by making you discover our recipes while adapting to your tastes. Provide food stalls occasionally to have a little pick-me-up during your day.";
      textTres = "Our aim is to optimize the treasury budget to its maximum by using it wisely. A well-managed budget for a more dynamic campus. Let's catch the damage of the COVID-19!";
      textRE ="sdgsdgsdg";
      textNum = "To provide a digital interface between us and the rest of the world through a website, to bring the whole campus together through digital games, and finally to offer our skills to the other departments so that they can use digital tools as they wish, and propose interactive online activities";

      textPougnes = "sdgsdgsdg";
      textTema = "Show freshmen how important it is to have a real professional network that will help them find their internship, while accompanying the second and third years students to get an internship/CDI. Organize a forum with the alumni. Carry on the alumni directory thanks to David Chhean (our interlocutor at the T&MA association!!).";
      textStand = "We set up booths for relaxation, activities but also food for every students in our campus. It will be spaces where they can hake a break from the routine of school, to chat and make acquaintances in a friendly way.";
      textSecret = "Optimize administrative resources to maximize productivity. Allow smooth running meetings to facilitate the communication of information. Offer our successors a good basis and good advice for an efficient secretariat.";
      textSWEI = "Organize new student orientation week to let freshmen discover the whole campus, its clubs/societies and an orientation week with traditional activities (bungee jumping, parties, GR etc...) while adding new activities that could not be carried out last year. We want a place allowing you to escape one last time before the return of school.";
      textVoyage = "Organize trips that will allow students to discover new places and new cultures. The purpose of the 'Pole Voyage' is to plan and organize 3 destinations and a wide range of activities that will please everyone.";
      textDD = "We would like to promote ecological thinking through fun activities. To reduce resource consumption inside the campus and to not forget the social aspect of sustainable development by helping the surrounding charities around the campus.";
    }

    let generalPurposes = [[test, "testafsgergergererh", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."], [test, "lol", "sdgsdgsgshshsfh"]];

    let specificPurposes1 = [
    [test,"Soirée",textSoiree],
    [test, "Séculog",textSecu],
    [test, "Com",textCom],
    [test,"Prévention",textPrev],
    [test,"RITZ",textRits],
    [test,"Trésorerie",textTres],
    [test,"RE",textRE],
    [test,"Numérique",textNum]
    ];

    let specificPurposes2 = [
      [test, "Pougnes", textPougnes],
      [test,"T&MA", textTema],
      [test,"Stand", textStand],
      [test,"Secrétariat", textSecret],
      [test,"SWEI", textSWEI],
      [test,"Voyage", textVoyage],
      [test,"DD",textDD]
    ];

    let generalPurposesJSX = generalPurposes.map((generalPurposeProps) => <li className="general-purposes-list-element" key={generalPurposeProps[1]}><Purpose purposeImg={generalPurposeProps[0]} purposeName={generalPurposeProps[1]} purposeDescription={generalPurposeProps[2]}/><br/><hr/><br/></li>);
    let specificPurposesJSX1 = specificPurposes1.map((specificPurposeProps) => <div className="specific-purposes-element" key={specificPurposeProps[1]}><Purpose purposeImg={specificPurposeProps[0]} purposeName={specificPurposeProps[1]} purposeDescription={specificPurposeProps[2]}/></div>);
    let specificPurposesJSX2 = specificPurposes2.map((specificPurposeProps) => <div className="specific-purposes-element" key={specificPurposeProps[1]}><Purpose purposeImg={specificPurposeProps[0]} purposeName={specificPurposeProps[1]} purposeDescription={specificPurposeProps[2]}/></div>);

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
        <MenuContainer start={0} control="Soirée Séculog Com Prévention RITZ Trésorerie RE Numérique" content={specificPurposesJSX1}/>
        <br/>
        <br/>
        <MenuContainer start={8} control="Pougnes T&MA Stand Secrétariat SWEI Voyage DD" content={specificPurposesJSX2} />
      </div>
    );
  }
}
