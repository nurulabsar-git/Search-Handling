import React, { useEffect, useState } from 'react';

const TestUseEffect = () => {

    const [users, setUsers] = useState([]);
    const [singleUser, setSingleUser] = useState({})
    const [differentObject, setDifferentObject] = useState({})

    useEffect(()=> {
     fetch("https://jsonplaceholder.typicode.com/users/")
     .then(result => result.json())
     .then(jsonData => setUsers(jsonData));

     fetch("https://jsonplaceholder.typicode.com/users/1")
     .then(result => result.json())
     .then(jsonData => setSingleUser(jsonData));


     fetch("https://randomuser.me/api/")
     .then(result => result.json())
     .then(jsonData => setDifferentObject(jsonData.results[0]));


    }, [])
    return (
        <div>
            {
                users.map(user => <li>{user.name}</li>)
            }

            <h4>{singleUser.name}</h4>
            <h3>{differentObject.gender}</h3>
            <h2>{differentObject.name && differentObject.name.title}</h2>
        </div>
    );
};

export default TestUseEffect;