import React from 'react';
import ReactDOM from 'react-dom';

const ReactTest = () => {
    return (
        <div style={{ 
            padding: '20px', 
            backgroundColor: '#2ecc71', 
            color: 'white',
            margin: '20px',
            borderRadius: '4px'
        }}>
            <h2>React Component Working!</h2>
            <p>This component is bundled with Webpack and Babel.</p>
        </div>
    );
};

ReactDOM.render(<ReactTest />, document.getElementById('root'));