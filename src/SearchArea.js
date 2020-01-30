import React from 'react';
import "./SearchArea.css";

const SearchArea = (props) => {
    return(
        <div className="search-area">
            <form onSubmit={ props.searchBook } action="">
                <input onChange={props.handleSearch} type="text" placeholder="Digite o título do livro aqui..." />
                <button type="submit">
                    <i className="fas fa-search"></i>
                </button>
            </form>
        </div>
    )
}

export default SearchArea;