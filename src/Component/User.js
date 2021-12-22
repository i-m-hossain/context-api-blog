import React from 'react';
import useAuth from './../hooks/useAuth';

const User = () => {
    const user = useAuth()
    console.log(user);
    return (
        <div>
            user name: {user.name}
        </div>
    );
};

export default User;