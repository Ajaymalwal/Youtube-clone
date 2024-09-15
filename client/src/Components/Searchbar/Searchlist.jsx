import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Searchlist.css';

const Searchlist = ({ setSearchQuery, titleArray }) => {
    return (
        <div className="Container-searchlist">
            {titleArray.map(m => (
                <p key={m} onClick={() => setSearchQuery(m)} className="title-item">
                    <FaSearch /> {m}
                </p>
            ))}
        </div>
    );
};

export default Searchlist;
