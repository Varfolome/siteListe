# siteListe

C'est une site de liste Naga, le meuilleur mdrrr. Fuck les autres.
C'est une guide dans l'architecture de site.

## Liens utiles
### React
[React](https://reactjs.org/docs/hello-world.html)

### CSS et HTML
[CSS](https://www.w3schools.com/cssref/)
[BootStrap](https://getbootstrap.com/docs/4.5/layout/overview/)
[Fonts](https://www.1001fonts.com/free-fonts-for-commercial-use.html)

### Pourquoi React

On peut créer beaucoup d'éléments adaptive en JSX et les combiner sur le site et les modifier facilement

### Animation

[react-spring](https://blog.logrocket.com/animations-with-react-spring/#:~:text=%20Implementing%20animations%20in%20React%20with%20React%20Spring,best%20way%20to%20add%20React%20Spring...%20More%20)

## Avant de commencer...

Voud devez installer [Node.js](https://nodejs.org/en/)

# Structure de projet

## Application

Le class fonctionnel principal est App.js. La version finale de l'application est contenue dedans.
C'est une application mono-page, càd tout est contenu en une seul page avec l'affichage conditionnel.
Les commentaires sont en anglais.

## Les components

### StaticPageElements
Dossier StaticPageElements contient des parties de la page qui ne changent pas (sont présentes partout et sont toujours visibles). Cettes parties doivent être adaptive et autonome. Chaque cette partie peut exister séparemment et peut être regrouper avec les autres.

#### StaticPageElements/Menu
Ce dosssier contient
  1) ControlPages.js qui contrôle l'affichage des pages en fonction de l'argument pageToShow
  2) MenuList.js qui est la classe de menu qui change l'état (state) et "render" alors des différentes page
  à l'aide de ControlPages.js

### Pages

Ce dossier contient des pages dont l'affichage on côntrole avec le ControlPages.js qui est statique. En théorie ce sont les seuls fichiers où on est autorisé d'utiliser BootStrap.

### WidgetsAndElements

Ce dossier contient tous les petits bloques avec lesquelles on construit notre sites (boutons, text, spinner, etc...).
Ces éléments sont adaptives (s'adaptent aux écrans) et réutilisable. On crée ainsi notre porpre bibliothéque d'éléments
