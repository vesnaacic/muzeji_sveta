function Muzej({muz, dodaj, mod, izbaci}) {


    return (
     <div className = 'muzeji' >

        <div className="card"   >
        <img src={muz.slika} className="card-img-top" alt="..."/>
        <div className="card-body">
          <p className="card-title">{muz.naziv}</p>
          <p className="card-text">{muz.opis} <br /> Telefon: {muz.telefon} <br /> Adresa: {muz.adresa} <br /> </p>
          {mod==1 ?
            <button className="btnDodaj"
            style={{marginLeft: "20px" , opacity: "80%", padding:"10px", paddingLeft: "10px", paddingRight: "10px"}} 
            onClick={()=>dodaj(muz.id)}>Dodaj u omiljene</button>
            :
            <button className="btnIzbaci" 
            style={{marginLeft: "20px" , opacity: "80%", padding:"10px", paddingLeft: "10px", paddingRight: "10px" }}
            onClick={()=>izbaci(muz.id)}>Izbaci iz omiljenih</button>
          }
        </div>
      </div>

    </div>
    );
  }

  export default Muzej;