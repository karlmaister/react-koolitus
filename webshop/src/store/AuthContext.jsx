import React, { createContext, useEffect, useState } from 'react';

// Create the context
export const AuthContext = createContext();

// Create a provider component
export const AuthContextProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const url = "https://securetoken.googleapis.com/v1/token?key=AIzaSyDNXR4CB6rCoIa2BCpr0s9D96-iX0nnEag"

    const [loggedInUser, setLoggedInUser] = useState({});
    const url2 = "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyDNXR4CB6rCoIa2BCpr0s9D96-iX0nnEag"
    

    useEffect(() => {
        if (sessionStorage.getItem !== null) {
            const payLoad = {

                "idToken": sessionStorage.getItem("id_token"),
            }

            fetch(url2, { "method": "POST", "body": JSON.stringify(payLoad) })
                .then(res => res.json())
                .then(json => {
                    if (json.error === undefined) {
                        setLoggedInUser(json);
                    }
                });
        }
    }, [loggedIn]);


    useEffect(() => {
        if (sessionStorage.getItem !== null) {
            const payLoad = {
                "grant_type": "refresh_token",
                "refresh_token": sessionStorage.getItem("refresh_token"),
            }

            fetch(url, { "method": "POST", "body": JSON.stringify(payLoad) })
                .then(res => res.json())
                .then(json => {
                    if (json.id_token !== undefined) {
                        setLoggedIn(true);
                    } else {
                        setLoggedIn(false);
                    }
                });
        }
    }, []);

    const emptyUser = () => {
        setLoggedInUser({});
    }

    return (
        <AuthContext.Provider value={{ loggedIn, setLoggedIn, loggedInUser, emptyUser }}>
            {children}
        </AuthContext.Provider>
    );
};