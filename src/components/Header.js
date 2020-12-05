import React from 'react';
import Navigation from './Navigation'

function Header() {
    return (
        <header className="border-b p-3 flex items-center justify-between">
            <Navigation />
            <span className="font-bold">
                DigiBank
            </span>
        </header>
    )
}

export default Header;