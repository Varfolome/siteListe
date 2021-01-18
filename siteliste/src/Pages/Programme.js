import React from 'react';
import Purpose from '../WidgetsAndElements/Purpose';
import PurposeWithoutImage from '../WidgetsAndElements/PurposeWithoutImage';
import MenuContainer from '../WidgetsAndElements/MenuContainer';
import './PagesStyles/Programme.css';

import boutique from '../WidgetsAndElements/photos/boutique.jpg';
import adm from '../WidgetsAndElements/photos/adm.jpg';
import eventwe from '../WidgetsAndElements/photos/eventwe.jpg';
import heritage from '../WidgetsAndElements/photos/heritage.jpg';
import assoc from '../WidgetsAndElements/photos/assoc.PNG';

export default class Programme extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let globalPurposes = "Nos objectifs généraux:";
    let specificPurposes="Nos objectifs spécifiques:";

    let texttitleBoutique = "Boutique de l’école";
    let textBoutique = "Elle proposerait des goodies TSP et IMT-BS comme des pulls, des polos, des t-shirts ou encore des jeux de cartes, eco-cups etc...";
    let texttitleAdm = "Défendre la vie associative auprès de l’administration";
    let textAdm = "Nous sommes fiers de la vie associative présente à l’INT et nous voulons la faire perdurer pour que chaque élève puisse continuer à s’épanouir en faisant ce qu’il aime sur le campus tout en étant en harmonie avec l’administration.";
    let texttitleEvent = "Evènements le week-end";
    let textEvent = "Notamment pour permettre aux étrangers qui sont présents presque toute l’année sur le campus d’avoir accès à des activités.";
    let texttitleTraditions = "Héritage et traditions";
    let textTraditions = "Nous nous engageons à rester en contact permanent avec les vieux pour faire perdurer la culture de l’INT.";
    let texttitlePartner = "Partenariats inter-associations";
    let textPartner = "Encourager les associations à travailler ensemble pour mettre en place des évènements plus riches et que les élèves puissent s’entre-aider et mieux apprendre à se connaître.";

    let textSoiree = "L'objectif est de rendre l'expérience des soirées à l'INT inoubliable en visant toujours plus haut, toujours plus gros. En plus des traditionnels Club B et soirées organisées par le BDE chaque année, on organiserait une sortie sur Paris pour la Technoparade et une sorte de Dîner Presque Parfait de la soirée en partenariat avec les autres écoles de l'Institut Polytechnique de Paris où il serait promis au vainqueur gloire et prestige éternels.";
    let textSecu = "Faire en sorte que les étudiants puissent profiter au maximum des événements organisés en toute sécurité avec une organisation optimale et un staffing sérieux.";
    let textCom = "Tenir au courant l'INT des divers événements et fêtes organisés sur le campus pour leur donner envie de participer. C’est ainsi que le campus continuera à vivre, surtout en cette période difficile. Ne pas laisser de coté les élèves internationaux. Reprendre le menu de la semaine sur campus TMSP";
    let textPrev = "La prévention de cette année a pour but, si la situation sanitaire le permet, d'enseigner une nouvelle façon de s'amuser en soirée tout en respectant sa santé et ses envies. La prévention sera également consciente des potentiels excès et débordements qui peuvent survenir, et fera tout son possible pour en minimiser les effets indésirables.";
    let textRits = "Satisfaire vos estomacs en vous faisant découvrir nos recettes tout en s'adaptant à vos goûts. Assurer des stands de nourriture occasionnellement afin d'avoir un petit remontant pendant sa journée.";
    let textTres = "Notre objectif est d'optimiser au maximum le budget de la trésorerie en l'utilisant de manière judicieuse. Un budget bien géré pour un campus plus dynamique. Rattrapons les dégâts de la COVID-19 !";
    let textRE = "Continuer d’aller dans le sens de partenariats qui profitent à la vie de campus et aux étudiants. Mettre en place un salon de la découverte qui permettrait aux étudiants de découvrir les produits de différentes entreprises : nourriture et boissons, mais aussi jeux vidéos, équipements sportifs";
    let textNum = "Soigner une interface numérique entre la Liste et le reste du monde au travers d'un site Web, rassembler tout le campus à travers des jeux digitaux, et enfin offrir nos compétences aux autres pôles afin qu'ils puissent utiliser les outils numériques à leur guise, et proposer des activités interactives en ligne.";

    let textPougnes = "Nous allons continuer d'entretenir nos drive, faire des fiches et à répondre à vos questions. Nous serons toujours là pour aider durant votre scolarité. Nous aimerions de plus organiser de vrai amphi de révision avec de plus des séances plus particulières pour ceux qui le souhaitent avec leurs CFs.";
    let textTema = "Montrer aux 1A l'importance de T&MA pour les aider à bâtir un véritable réseau professionnel qui pourront les aider pour leur stages, tout en accompagnant les 2A/3A à décrocher un stage/CDI. Permettre la tenue d'un forum avec les anciens élèves. Poursuivre l'annuaire des anciens élèves grâce à David Chhean (notre interlocuteur auprès de l'asso T&MA !!)";
    let textStand = "Mise en place de stands de détente, d'activités mais aussi de nourriture pour tous les étudiants de l'INT. Ce seront des espaces où ils pourront effectuer une coupure avec le train train scolaire, discuter et faire des connaissances en toute convivialité.";
    let textSecret = "Optimiser l'organisation des ressources administratives de la liste pour maximiser la productivité. Permettre le bon déroulement des réunions pour faciliter la communication des informations. Offrir à nos sucesseurs une bonne base et de bons conseils pour un secrétariat efficace.";
    let textSWEI = "Organiser une SEI permettant de faire découvrir aux 1A l'ensemble du campus et de ses associations et un WEI reprennant les activités traditionnelles (saut à l'élastique, soirée, GR etc...) tout en ajoutant de nouvelles activités qui n'ont pas pu être réalisées l'année passée et le tout dans un endroit vous permettant de vous évader une ultime fois avant la rentrée scolaire.";
    let textVoyage = "Organiser des voyages qui permettront aux étudiants de découvrir de nouveaux lieux et de nouvelles cultures. L'objectif du pôle voyage est de planifier 3 destinations et un large panel d'activités qui sauront plaire et susciter l'envie chez chacun.";
    let textDD = "Promouvoir une réflexion écologique à l'aide d'activités plaisantes. Diminuer les consommations de ressources du campus. Ne pas oublier le côté social du développement durable en aidant les associations caritatives alentour.";

    if (this.props.lang === "english") {
      globalPurposes="Our global Purposes:";
      specificPurposes="Our specifics Purposes:";

      texttitleBoutique = "School store";
      textBoutique = "It would offer TSP and IMT-BS goodies such as sweaters, polo shirts, t-shirts, card games, eco-cups etc...";
      texttitleAdm = "Defend the associative life with the administration";
      textAdm = "We are proud of the associative life at INT and we want to continue it so that each student can continue to flourish by doing what he or she likes on campus while being in harmony with the administration.";
      texttitleEvent = "Weekend events";
      textEvent = "In particular, to allow foreigners who are present on campus most of the year to have access to activities.";
      texttitleTraditions = "Heritage and traditions";
      textTraditions = "We are committed to staying in constant contact with the elderly to keep the culture of INT alive.";
      texttitlePartner = "Inter-association partnerships";
      textPartner = "Encourage associations to work together to set up richer events so that students can help each other and get to know each other better.";

      textSoiree = "The goal is to make the INT party experience unforgettable by aiming higher and bigger. In addition to the traditional Club B and parties organized by the BDE every year we would organize an outing to Paris for the Technoparade and a kind of 'Dîner Presque Parfait' in partnership with other schools of Institut Polytechnique de Paris where glory and eternal prestige would be promised to the winner .";
      textSecu = "To ensure that students can make the most of the events organized safely with optimal organization and serious staffing.";
      textCom = "Keep the INT informed of the various events and parties organized on the campus to make them want to participate. This is how the campus will continue to live, especially in these difficult times. To not leave out the international students. Resume the menu of the week on campus TMSP.";
      textPrev = "The goal of this year's prevention is, if the health situation permits, to teach a new way of having fun in parties while respecting one's health and desires. Prevention will also be aware of the potential excesses and overflows that can occur, and will do everything possible to minimize the undesirable effects.";
      textRits = "Satisfy your stomachs by making you discover our recipes while adapting to your tastes. Provide food stalls occasionally to have a little pick-me-up during your day.";
      textTres = "Our aim is to optimize the treasury budget to its maximum by using it wisely. A well-managed budget for a more dynamic campus. Let's catch the damage of the COVID-19!";
      textRE = "Continue to move towards partnerships that benefit campus life and students. Set up a discovery fair that would allow students to discover the products of different companies: food and beverages, but also video games, sports equipment, etc...";
      textNum = "To provide a digital interface between us and the rest of the world through a website, to bring the whole campus together through digital games, and finally to offer our skills to the other departments so that they can use digital tools as they wish, and propose interactive online activities";

      textPougnes = "We will continue to maintain our drives, make cards and answer your questions. We will always be there to help during your schooling. We would also like to organize a real revision room with more special sessions for those who wish to do so with their CFs.";
      textTema = "Show freshmen how important it is to have a real professional network that will help them find their internship, while accompanying the second and third years students to get an internship/CDI. Organize a forum with the alumni. Carry on the alumni directory thanks to David Chhean (our interlocutor at the T&MA association!!).";
      textStand = "We set up booths for relaxation, activities but also food for every students in our campus. It will be spaces where they can hake a break from the routine of school, to chat and make acquaintances in a friendly way.";
      textSecret = "Optimize administrative resources to maximize productivity. Allow smooth running meetings to facilitate the communication of information. Offer our successors a good basis and good advice for an efficient secretariat.";
      textSWEI = "Organize new student orientation week to let freshmen discover the whole campus, its clubs/societies and an orientation week with traditional activities (bungee jumping, parties, GR etc...) while adding new activities that could not be carried out last year. We want a place allowing you to escape one last time before the return of school.";
      textVoyage = "Organize trips that will allow students to discover new places and new cultures. The purpose of the 'Pole Voyage' is to plan and organize 3 destinations and a wide range of activities that will please everyone.";
      textDD = "We would like to promote ecological thinking through fun activities. To reduce resource consumption inside the campus and to not forget the social aspect of sustainable development by helping the surrounding charities around the campus.";
    }

    let generalPurposes =
      [[boutique, texttitleBoutique, textBoutique],
      [adm, texttitleAdm, textAdm],
      [eventwe, texttitleEvent, textEvent],
      [heritage, texttitleTraditions, textTraditions],
      [assoc, texttitlePartner, textPartner]

      ];

    let specificPurposes1 = [
      ["Soirée", textSoiree],
      ["Séculog", textSecu],
      ["Com", textCom],
      ["Prévention", textPrev],
      ["RITZ", textRits],
      ["Trésorerie", textTres],
      ["RE", textRE],
      ["Numérique", textNum]
    ];

    let specificPurposes2 = [
      ["Pougnes", textPougnes],
      ["T&MA", textTema],
      ["Stand", textStand],
      ["Secrétariat", textSecret],
      ["SWEI", textSWEI],
      ["Voyage", textVoyage],
      ["DD", textDD]
    ];

    let generalPurposesJSX = generalPurposes.map((generalPurposeProps) => <li className="general-purposes-list-element" key={generalPurposeProps[1]}><Purpose purposeImg={generalPurposeProps[0]} purposeName={generalPurposeProps[1]} purposeDescription={generalPurposeProps[2]} /><br /><hr />{/*<br /><br />*/}<br /></li>);
    let specificPurposesJSX1 = specificPurposes1.map((specificPurposeProps) => <div className="specific-purposes-element" key={specificPurposeProps[1]}><PurposeWithoutImage purposeName={specificPurposeProps[0]} purposeDescription={specificPurposeProps[1]} /></div>);
    let specificPurposesJSX2 = specificPurposes2.map((specificPurposeProps) => <div className="specific-purposes-element" key={specificPurposeProps[1]}><PurposeWithoutImage purposeName={specificPurposeProps[0]} purposeDescription={specificPurposeProps[1]} /></div>);

    return (
      <div className="programme">
        <h1>{globalPurposes}</h1>
        <br />
        <div className="general-purposes">
          <ul className="general-purposes-list">
            
        <hr />
            {generalPurposesJSX}
          </ul>
        </div>
        <br />
        <h1>{specificPurposes}</h1>
        <br />
        <MenuContainer start={0} control="Soirée Séculog Com Prévention RITZ Trésorerie RE Numérique" content={specificPurposesJSX1} />
        <br />
        <br />
        <MenuContainer start={8} control="Pougnes T&MA Stand Secrétariat SWEI Voyage DD" content={specificPurposesJSX2} />
      </div>
    );
  }
}
