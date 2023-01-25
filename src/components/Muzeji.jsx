import Muzej from "./Muzej";

  function Muzeji({muzeji}) {
    return (
    <div className="row">
          {muzeji.map((muz)=> <div className="col-sm-3"><Muzej key={muz.id} muz={muz}></Muzej><br /></div>)}
    </div>
        );

  }

  export default Muzeji;