import React, { useEffect, useState } from 'react';

const MealFinder = () => {

    const [search, setSearch] = useState('');
    const [searchMeal, setSearchMeal] =useState([]);

    useEffect(()=> {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${search}`)
        .then(result => result.json())
        .then(jsonData => setSearchMeal(jsonData.meals));
    }, [search])

    const handleChange = searchMe => {
        // console.log(events.target.value);
        setSearch(searchMe.target.value)
    }
    return (
        <div>
            <input onChange={handleChange} type="text" placeholder="Search Your obligate food"/>
            <p>searching result: {search}</p>
            <p>meal found : {searchMeal?.length ||0}</p>

        <ul>
            {
                searchMeal?.map( meal => <li>{meal?.strMeal}</li>)
            }
        </ul>
        </div>
    );
};

export default MealFinder;