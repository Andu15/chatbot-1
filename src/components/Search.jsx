import React from 'react'

export const Search = ({onChange}) => {
    
 console.log(onChange)
    // const handleSearch = (e) => {
      

    // }
    return (
        <section className="searchProducts">
            <div className="input-group">
              <input type="search" className="form-control mySearchProducts" placeholder="Buscar" aria-label="Search"
              aria-describedby="search-addon" />
            <span className="input-group-text mySearchProducts" id="search-addon">
              <i className="fas fa-search"></i>
            </span>
          </div>
        </section>
    )
}