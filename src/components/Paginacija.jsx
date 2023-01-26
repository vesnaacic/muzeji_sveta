import React from "react";

const Paginacija = ({totalPosts, postsPerPage, setCurrentPage}) => {

    let pages = [];
    for(let i = 1; i<= Math.ceil(totalPosts/postsPerPage); i++) {
    pages.push(i);
        }

    return (
        <div className="paginacija">  
        {pages.map((page, index) => {
        return <button className="btnPaginacija" key= {index} onClick = {() => setCurrentPage(page)}> {page}</button>;
        })}


        </div>
    )

}

export default Paginacija