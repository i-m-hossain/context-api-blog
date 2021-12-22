import React, { createContext } from 'react';
export const AuthContext = createContext()
let user = {
    name: 'john',
    age: '25'
}
const AuthProvider = ({ children }) => {

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
