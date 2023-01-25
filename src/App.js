
import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Pocetna from './components/Pocetna';
import Footer from './components/Footer';
import Muzeji from './components/Muzeji';
import { useState } from 'react';


function App() {
  const[sviMuzeji] = useState([

    {
        id:1,
        naziv:"The Louvre",
        slika: "https://www.unjourdeplusaparis.com/wp-content/uploads/2015/05/photo-louvre-insolite.jpg",
        opis:"Luvr je najveći svetski muzej umetnosti i istorijski spomenik. Njegova kolekcija obuhvata istoriju dugu 9.000 godina i uključuje neka od najpoznatijih umetničkih dela na svetu, kao što su Mona Liza i Miloska Venera. Muzej sadrzi preko 300 hiljada eksponata. ",
        telefon: "+33 1 40 20 50 50",
        adresa:  "Rue de Rivoli, 75001 Paris, France",

    },
    {
      id:2,
      naziv:"The Metropolitan Museum of Art",
      slika: "https://a.cdn-hotels.com/gdcs/production127/d1948/e007fddc-c80d-4583-b07a-c1d231093bff.jpg",
      opis:"Metropoliten muzej umetnosti, poznat i kao Met, jedan je od najvećih i najsveobuhvatnijih muzeja umetnosti na svetu. Njegova kolekcija obuhvata preko 2 miliona umetničkih dela od antičkih do modernih vremena, uključujući čuveni američki institut za krilo i kostim. ",
      telefon: "+1 212-535-7710",
      adresa:  "1000 5th Ave, New York, NY 10028, USA",

    },
    {
      id:3,
      naziv:"The British Museum",
      slika: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/27/5c/4e.jpg",
      opis:"Britanski muzej je posvećen ljudskoj istoriji i kulturi i ima kolekciju od preko 8 miliona predmeta. Poznat je po svojoj egipatskoj kolekciji, koja uključuje Rozetski kamen, i po Elginovim mermerima iz Partenona u Atini.",
      telefon: "+44 20 7323 8299",
      adresa:  "Great Russell St, Bloomsbury, London WC1B 3DG, UK",

     },
     {
      id:4,
      naziv:"The Uffizi Gallery",
      slika: "https://www.througheternity.com/upload/CONF83/20180228/masterpieces_uffizi_gallery_florence-tSa-1200X630.jpg",
      opis: "Galerija Ufici je jedan od najstarijih i najpoznatijih muzeja umetnosti na svetu, sa velikom kolekcijom renesansne umetnosti. Sadrži radove poznatih umetnika kao što su Botičeli, Mikelanđelo i Rafael.",
      telefon: "+39 055 238 8651",
      adresa:  "Piazzale degli Uffizi, 6, 50122 Firenze FI, Italy",

     },
     {
      id:5,
      naziv:"The Vatican Museums",
      slika: "https://travelingturks.com/wp-content/uploads/vatican-museum.jpg",
      opis:"Vatikanski muzeji su zbirka muzeja smeštenih u Vatikanu i prikazuju dela iz ogromne kolekcije koju je Rimokatolička crkva gradila tokom vekova. Sadrži skulpture, freske i remek-dela kao što je Sikstinska kapela.",
      telefon: "+39 06 69883860",
      adresa:  "Viale Vaticano, 00120 Città del Vaticano, Vatican City",

     },
     {
      id:6,
      naziv:"The Hermitage",
      slika: "https://images.locationscout.net/2019/12/state-hermitage-museum-russian-federation.jpg?h=1100&q=83",
      opis:"Državni muzej Ermitaž je jedan od najvećih i najstarijih muzeja na svetu, sa kolekcijom od preko 3 miliona predmeta. Poznat je po svojoj kolekciji zapadnoevropske umetnosti, uključujući dela Rembranta, Rubensa i Goje.",
      telefon: "+7 812 710-90-79",
      adresa:  "Palace Emb., 34, Sankt-Peterburg, Russia, 190000",

     },
     {
      id:7,
      naziv:"The Museo Nacional del Prado",
      slika: "https://cdn-imgix.headout.com/tour/33875/TOUR-IMAGE/60a88161-1bee-4e24-931a-55e66ddd11fa-17737-madrid-madrid-s-prado-museum-guided-tour---tapas-experience-02.jpeg",
      opis:"Muzej Prado je jedan od najvažnijih muzeja umetnosti na svetu, sa kolekcijom koja se proteže od 12. do 19. veka. Poznat je po svojoj kolekciji španske umetnosti, uključujući dela Velaskeza, Goje i El Greka.",
      telefon: "+34 913 302 863",
      adresa:  "Calle de Felipe IV, s/n, 28071 Madrid, Spain",

     },
     {
      id:8,
      naziv:"The Museum of Islamic Art",
      slika: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/a8/9e.jpg",
      opis:"Muzej islamske umetnosti je jedan od najznačajnijih muzeja na svetu posvećen islamskoj umetnosti i kulturi. Ima kolekciju od preko 10.000 islamskih artefakata, uključujući keramiku, metalne radove, tekstil i rukopise.",
      telefon: "Al Corniche St, Doha, Qatar",
      adresa:  "+974 4442 4444",

     },
    {
      id:9,
      naziv:"The National Museum of China",
      slika: "https://myartguides.com/wp-content/uploads/2019/11/China.Art_.Museum.640.4234-1.jpg",
      opis:"Nacionalni muzej Kine je najveći muzej kineske istorije i umetnosti na svetu. Sadrži preko 1,05 miliona artefakata i umetničkih dela, koji pokrivaju kinesku istoriju od najranijih vremena do danas. Sadrži drevnu kinesku umetnost i artefakte, bronzano posuđe, keramiku, žad, novčiće i kaligrafiju.",
      telefon: "+86 10 6511 6188",
      adresa:  "16 East Chang'an Avenue, Dongcheng District, Beijing, China",
    },
    {
      id:10,
      naziv:"The National Museum of Anthropology",
      slika: "https://mexicocity-parking.com/wp-content/uploads/2017/09/National-Museum-of-Anthropology.jpg",
      opis:"Nacionalni muzej antropologije je jedan od najvažnijih muzeja u Meksiku, posvećen proučavanju i očuvanju meksičke kulture i istorije. Sadrži ogromnu kolekciju pretkolumbijske umetnosti i artefakata, uključujući čuveni Astečki Sunčev kamen.",
      telefon: "+52 55 4040 5300",
      adresa:  "Av. Paseo de la Reforma s/n,11560 Ciudad de México, Mexico",
    }

  ]);


  return (
    <div>
    <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
            <Route path="/" element={<Pocetna></Pocetna>}></Route>
            <Route path="/muzeji" element={<Muzeji  muzeji={sviMuzeji}></Muzeji>}></Route>
          </Routes>
     </BrowserRouter>
     <Footer></Footer>
    </div>
  );
}

export default App;
