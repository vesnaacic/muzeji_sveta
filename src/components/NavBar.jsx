import { Link } from 'react-router-dom';
import { GrSearch } from 'react-icons/gr';
function NavBar({pretrazi}) {
  return (
    <div>
        <nav className="nav">
            <div className="nav__title"><h1>MUZEJI SVETA</h1></div>
                <ul className="nav__list">

                    <li className="nav__item">   <Link to='/'>POCETNA</Link></li>
                    <li className="nav__item"> <Link to='/muzeji'>MUZEJI</Link></li>
                    <li className="nav__item"> <Link to='/omiljeni'>OMILJENI</Link></li>
                    <li className="nav__item"> 

                      <input type="text" id="kriterijum" placeholder="Search.." name="search" 
                        onChange={()=>pretrazi(document.getElementById('kriterijum').value)}/>
                        <button type="submit" className='dugmePretraga'  >   <GrSearch></GrSearch> </button>



                    </li>
                </ul>
        </nav>
    </div>
  );
}

export default NavBar;