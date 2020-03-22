import React from 'react';
import Card from '../Card'
import './style.css'

const Users = ({users}) => {
    const userCards = users.map(user => <Card key={user.id} data={user} />)

    return (
        <div className='Users' >
            {userCards}
        </div>
    );
}

export default Users;