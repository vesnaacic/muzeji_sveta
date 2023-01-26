import Muzej from "./Muzej";

function Omiljeni({muzeji,kriterijum}) {
    return (
        <div className="omiljeni">
    <div className="row">
        {kriterijum==""
        ?
        muzeji.map((muz)=> <div className="col-sm-3"><Muzej  key={muz.id} muz={muz}></Muzej><br /></div>)
        :
        <>
        {muzeji
        .filter((muz)=>muz.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((muz)=> <div className="col-sm-3"><Muzej  key={muz.id} muz={muz}></Muzej><br /></div>)}
        </>
        }

      </div>
      </div>
    );
  }

  export default Omiljeni;