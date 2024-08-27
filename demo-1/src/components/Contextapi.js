import React, { createContext, useState, useContext} from 'react'

const UserContext = createContext();

function Contextapi({ children }) {
    const [user, setUser] = useState({ name: 'Mohan'});
  return (
    <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
  );
}

function UserProfile() {
    const user = useContext(UserContext);
    return <h1>Welcome, {user.name}!</h1>
}

function App() {
    return (
        <UserProvider>
            <UserProfile />
        </UserProvider>
    );
}

export default App;
