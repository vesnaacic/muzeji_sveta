function Muzej({muz, dodaj}) {


    return (
     <div className = 'muzeji' >

        <div className="card"   >
        <img src={muz.slika} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-title">{muz.naziv}</p>
          <p className="card-text">{muz.opis} <br /> Telefon: {muz.telefon} <br /> Adresa: {muz.adresa} <br /> </p>
          <button href="#" className="btn btn-primary" style={{marginLeft: "20px" , opacity: "80%", 
          padding:"5px", paddingLeft: "10px", paddingRight: "10px", border: "3px solid #EEEFEB"}}
          onClick={()=>dodaj(muz.id)} > Dodaj u omiljene </button>
        </div>
      </div>

    </div>
    );
  }

  export default Muzej;