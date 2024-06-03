import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Github.css'

export default function Github() {
    const [data, setData] = useState([]);
    const resp = fetch('https://api.github.com/users/hiteshchoudhary');

    resp.then(res => res.json())
    .then(data => setData(data));
    return (
        <main>
            <h1>Github = User : {data.name} and Followers are : {data.followers}</h1>
        </main>
    );
}