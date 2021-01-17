import React from 'react';
import './PagesStyles/Pougnes.css';
import imtbs from '../photos/img_pougnes/IMTBS.jpg'
import tsp from '../photos/img_pougnes/TSP.jpg'
import bachelor from '../photos/img_pougnes/Bachelor.jpg'

export default class Pougnes extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return(
    	<div>
    	  	<h1 className="titre">Les pougnes</h1>
      	<div className="conteneur">
	        <div className="card">
	  			<a href="https://drive.google.com/drive/folders/1-6rFmBaUlKVMvaJBF1d4uT3szFX9n6km?usp=sharing">
          <img src={imtbs} className="card-img-top" alt="Ludivine pougne IMT BS" />
          </a>
	  			<div className="card-body">
	    			<h5 className="card-title">Pougnes IMT BS</h5>
	    				<p className="card-text">Le travail de pougne est parfois compliqué mais, c'est une mission nécessaire
	    				que j'accepte d'accomplir pour vous, étudiant•e•s de l'IMTBS. <br /><br />Vous pourrez ainsi profiter
	    				pleinement de votre vie étudiante et faire un carton plein aux devoirs. <br /><br />Naga Régale. <br /><br />Ludivine</p>
	    				<div className="d-grid gap-2 col-6 mx-auto">
  							<a href="https://drive.google.com/drive/folders/1-6rFmBaUlKVMvaJBF1d4uT3szFX9n6km?usp=sharing" className="btn btn-outline-success">Lien vers le Drive</a>
  							<div className="btn-group dropup">
  								<button type="button" className="btn btn-outline-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
								Anciennes <br /> pougnes
								</button>
  								<ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">
    								<li><a className="dropdown-item" href="https://drive.google.com/drive/folders/1b6OOCedWjSJ-m7-B4YQtOuNIJaz-MRUC?usp=sharing">Kraken</a></li>
    								<li><a className="dropdown-item" href="https://drive.google.com/drive/folders/1QTCtrdzPSy1duv6S_9ELESalaycwnvOB?usp=sharing">Whispers</a></li>
    								<li><a className="dropdown-item" href="https://drive.google.com/drive/folders/1mx84jXH1TnHJuzVamvbsxBiU3bRIJ8U-?usp=sharing">Spectre</a></li>
    								<li><a className="dropdown-item" href="https://drive.google.com/drive/folders/1u5Ymw__L4YKwrBbUqMVAatVT2Nl9ceQo?usp=sharing">Raven</a></li>
    								<li><a className="dropdown-item" href="https://drive.google.com/drive/folders/0BxEzdpDCmWpjMHNOX2xDeTdXN3c?usp=sharing">Apocalypse</a></li>
    								<li><a className="dropdown-item" href="https://drive.google.com/drive/folders/0BzPtVqAX9HqRUWNzSWR6WE0xZGM?usp=sharing">Skyline</a></li>
    								<li><a className="dropdown-item" href="https://drive.google.com/drive/folders/0B7bhsSc9HKvgdk9haVVsNlZVMVE?usp=sharing">Tigers</a></li>
  								</ul>
							</div>
						</div>
	  			</div>
			</div>
			<div className="card">
          <a href="https://drive.google.com/drive/folders/10fTjUCs1uFWHvkcFq1b2wStLslIecSm4?usp=sharing">
	  			<img src={tsp} className="card-img-top" alt="Gaëtan pougne TSP" />
          </a>
	  			<div className="card-body">
	    			<h5 className="card-title">Pougnes TSP</h5>
	    				<p className="card-text">Parce qu'on sait que la vie étudiante c'est beaucoup de temps en soirée et peu à réviser.
	    				Chez nous les pougnes on te propose une petite aide, un petit plus, qui t'aidera à passer ton année. Tu n'as plus
	    				à t'inquiéter de tous ces cours ratés sur BBB, avec nous c'est fini les 1B et bienvenue le club B. Ne soit plus
	    				désolé pour hier soir, on sera là pour t'épauler lors des révisions. Pougner c'est gagner !</p>
	    				<div className="d-grid gap-2 col-6 mx-auto">
  							<a href="https://drive.google.com/drive/folders/10fTjUCs1uFWHvkcFq1b2wStLslIecSm4?usp=sharing" className="btn btn-outline-success">Lien vers le Drive</a>
  							<div className="btn-group dropup">
  								<button type="button" className="btn btn-outline-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
								Anciennes <br /> pougnes
								</button>
  								<ul className="dropdown-menu w-100" aria-labelledby="dropdownMenuLink">
    								<li><a className="dropdown-item" href="https://drive.google.com/drive/folders/1B_6E5fbWF3fZcX2fHid3zqviUW_TqG6g?usp=sharing">Kraken</a></li>
    								<li><a className="dropdown-item" href="https://drive.google.com/drive/folders/1doQ1Y-v-xGVSW2MmVUnGjsccfnyDX3up?usp=sharing">Whispers</a></li>
    								<li><a className="dropdown-item" href="https://drive.google.com/drive/folders/1i5Adr0RdbIv-Q2ypF2O99wHxbwHJMEi6?usp=sharing">Spectre</a></li>
    								<li><a className="dropdown-item" href="https://drive.google.com/drive/folders/1a3Y1WnMTwdQte5peLpW_dq3HMM1nmCb5?usp=sharing">Eclipse</a></li>
    								<li><a className="dropdown-item" href="https://drive.google.com/drive/folders/1lhutNDs6iviJYlYlZZqnWnlMNFsURKJm?usp=sharing">Raven</a></li>
    								<li><a className="dropdown-item" href="https://drive.google.com/drive/folders/1mic3C7rpcICpfKflAKzisbEGRbtNOpo_?usp=sharing">Stratton</a></li>
    								<li><a className="dropdown-item" href="https://drive.google.com/drive/folders/1gzQPJK5wtDTn60OMfWT8QAdex3vTUzng?usp=sharing">Coconuts</a></li>
    								<li><a className="dropdown-item" href="https://drive.google.com/drive/folders/0B8A7mmKB-6MRSDc0aUdhTzJydTQ?usp=sharing">Apocalypse</a></li>
    								<li><a className="dropdown-item" href="https://drive.google.com/drive/folders/0By1UOiLorBPsQ2hEUUVTWndoRHc?usp=sharing">L'Embuscade</a></li>
    								<li><a className="dropdown-item" href="https://drive.google.com/drive/folders/0BzPtVqAX9HqRM2RlcV9KaGpxWDg?usp=sharing">Skyline</a></li>
    								<li><a className="dropdown-item" href="https://drive.google.com/drive/folders/0B5_oWsBWoxElTTQyYmlwQjl2MHM?usp=sharing">Phoenix</a></li>
  								</ul>
							</div>
						</div>
	  			</div>
			</div>
			<div className="card">
          <a href="https://drive.google.com/drive/folders/1ovl98unRvMVq4jUR2pQnMMcDbRENEXJQ?usp=sharing">
	  			<img src={bachelor} className="card-img-top" alt="Sarah pougne Bachelor" />
          </a>
	  			<div className="card-body">
	    			<h5 className="card-title">Pougnes Bachelor</h5>
	    				<p className="card-text">Sachant que c'est la première fois que ce pôle existe,
	    				j'espère le rendre différent cette année pour tous les étudiants en Bachelor de IMT-BS.
	    				Je ferai de mon mieux pour que vous puissiez vivre pleinement votre vie sociale tout en réussissant
	    				tous vos examens. Je suis à l'écoute de toutes vos questions et je suis également ouverte à toutes
	    				les critiques constructives pour m'améliorer et perfectionner mon travail. <br /><br />PS. Croyez-moi, j'aimerais
	    				vraiment que la vie d'un étudiant en bachelor ne soit qu'un livre de coloriage mais à ma surprise, ce
	    				n'est malheureusement pas le cas. <br /><br />Alors bonne révision et bon courage !<br /><br />
	    				Bises reptiliennes</p>
	    				<div class="d-grid col-6 mx-auto">
  							<a href="https://drive.google.com/drive/folders/1ovl98unRvMVq4jUR2pQnMMcDbRENEXJQ?usp=sharing" className="btn btn-outline-success">Lien vers le Drive</a>
						</div>
	  			</div>
			</div>
		</div>
		</div>
    );
  }
}
