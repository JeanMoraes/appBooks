import React from 'react';
import "./SearchArea.css";

const SearchArea = () => {
    return(
        <div className="search-area">
            <form action="">
                <input type="text" placeholder="Digite o título do livro aqui..." />
                <button type="submit">
                    <i class="fas fa-search"></i>
                </button>
            </form>

        </div>
    )
}

export default SearchArea;