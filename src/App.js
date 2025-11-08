// App.js
import HelloWorld from './HelloWorld';
import Greeting from './Greeting';
import Profil from './Profil';
import Voiture from './Voiture';
import ListeCourses from './ListeCourses'

function App() {
  const utilisateur = { nom: 'Ettouyjer Yasmine', photo: '/bonjour.jpg' };

   // 🆕 Voici ta liste d’éléments à afficher
  const elements = ['Pommes', 'Pain', 'Lait', 'Fromage'];

  return (
    <div>
      <HelloWorld />
      <Greeting prenom="Ettouyjer" />
      <Profil utilisateur={utilisateur} taille={150} />

      <h1>Liste des voitures</h1>
      <Voiture marque="Toyota" modele="Corolla" couleur="Rouge" />
      <Voiture marque="Peugeot" modele="208" couleur="Bleu" />
      <Voiture marque="Renault" modele="Clio" couleur="Noir" />
     
      <h1>Liste des courses</h1>
      <ListeCourses elements={elements} />
    
    </div>
  );
}

export default App;
