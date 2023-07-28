import { createContext, useState } from "react";

const LinkContext = createContext();

const LinkProvider = ({children}) => {

    const [underlineLink, setUnderlineLink] = useState("/");

    const resetUnderlineLink = () => {
        setUnderlineLink("");
    }

    return (
        <LinkContext.Provider value={{underlineLink, setUnderlineLink, resetUnderlineLink}}>
            {children}
        </LinkContext.Provider>
    );
}

export {LinkContext, LinkProvider};