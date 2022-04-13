import React from 'react';

const Header = ({title}) => {
    return (
        <header>
            <div className="container">
                <div className="content">
                    <h1 className="title">{title}</h1>
                    <p className="text">Ejemplo para practicar solicitudes con React Hooks</p>
                </div>
            </div>
        </header>
    );
};

export default Header;