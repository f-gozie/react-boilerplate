import React from 'react';
import Navigation from './Navigation'

function Header() {
    return (
        <header className="border-b p-3 flex items-center justify-between">
            <span className="font-bold">
                DigiBank
            </span>

            <Navigation />
        </header>
    )
}

export default Header;