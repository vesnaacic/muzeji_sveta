import Muzej from "./Muzej";

  function Muzeji({muzeji,kriterijum,dodaj}) {
    return (
      <div className="muzeji">
    <div className="row">
      {kriterijum==""
        ?
        muzeji.map((muz)=> <div className="col-sm-3"><Muzej dodaj={dodaj} key={muz.id} muz={muz} mod={1}></Muzej><br /></div>)
        :
        <>
        {muzeji.filter((muz)=>muz.naziv.toLowerCase().includes(kriterijum.toLowerCase()))
        .map((muz)=> <div className="col-sm-3"><Muzej dodaj={dodaj} key={muz.id} muz={muz} mod={1}></Muzej><br /></div>)}
        </>
        } 
    </div>
    </div>
        );

  }

  export default Muzeji;