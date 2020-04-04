import React from 'react';

const title = 'GeoBingo!';
const subtitle = 'The Social Bingo Template Generator.';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
        )
    }
}

export default Header;