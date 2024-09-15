import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { BsMicFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Searchlist from './Searchlist'; 
import './Searchbar.css';
import { useSelector } from 'react-redux';

const Searchbar = () => {
    const [searchList, setSearchList] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const titleArray = useSelector(s=>s?.videoreducer)?.data?.filter(q=>q?.videotitle.toUpperCase().includes(searchQuery?.toUpperCase())).map(m=>m?.videotitle)
    console.log(useSelector(s=>s.videoreducer))
//    const titleArray = ["video1", "video2", "song", "bhole baba song", "hanuman chalisa"]
 //       .filter(q => q.toUpperCase().includes(searchQuery.toUpperCase()));

    return (
        <div className="Searchbar-Container">
            <div className="Searchbar-Container2">
                <div className="search-div">
                    <input 
                        type="text" 
                        className="iBox-SearchBar" 
                        placeholder="Search" 
                        onChange={e => setSearchQuery(e.target.value)} 
                        value={searchQuery} 
                        onClick={() => setSearchList(true)} 
                    />
                    <Link to={`search/${searchQuery}`} className="SearchIcon-Searchbar">
                        <FaSearch  />
                    </Link>
                </div>
                <BsMicFill className='Mic-Searchbar' />
                {searchList && searchQuery !== "" &&
                <Searchlist setSearchQuery={setSearchQuery} titleArray={titleArray} />}
            </div>
        </div>
    );
};

export default Searchbar;
