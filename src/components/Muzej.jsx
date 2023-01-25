function Muzej({muz}) {


    return (
     <div className = 'muzeji' >

        <div className="card"   >
        <img src={muz.slika} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-title">{muz.naziv}</p>
          <p className="card-text">{muz.opis} <br /> Telefon: {muz.telefon} <br /> Adresa: {muz.adresa} <br /> </p>
          <a href="#" className="btn btn-primary">Dodaj u omiljene</a>
        </div>
      </div>

    </div>
    );
  }

  export default Muzej;