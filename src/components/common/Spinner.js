import React from 'react';

function Spinner() {
    return (
        <div className="row">
            <div className="col-md-1 offset-md-5">
                <div className="spinner-border" style={{ width: 6 + 'rem', height: 6 + 'rem' }} role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </div>
    );
}


export default Spinner;