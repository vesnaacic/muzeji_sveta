import Muzej from "./Muzej";

function Omiljeni({muzeji,kriterijum,izbaci}) {
    return (
        <div className="omiljeni">
    <div className="row">
        {kriterijum==""
        ?
        muzeji.map((muz)=> <div className="col-sm-3"><Muzej  key={muz.id} muz={muz} mod={2} izbaci={izbaci} ></Muzej><br /></div>)
        :
        <>
        {muzeji
        .filter((muz)=>muz.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((muz)=> <div className="col-sm-3"><Muzej  key={muz.id} muz={muz} mod={2} izbaci={izbaci}></Muzej><br /></div>)}
        </>
        }

      </div>
      </div>
    );
  }

  export default Omiljeni;