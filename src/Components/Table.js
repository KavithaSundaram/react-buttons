import React from 'react';

const Table = ({ columns }) => {
    var cols = []
    var datacols = []
    for (let i = 1; i <= columns; i++) {
        cols.push(<td key={i}>Column {i}</td>)
        datacols.push(<td key={i}>Column Data{i}</td>)
    }

    return (
        <div className="table-container container">
            <div className="title mt-4">
                <h3>Details</h3>
            </div>
            {columns !== 0 ? (
                <>
                    <table className="table table-info mt-4">
                        <thead>
                            <tr>{cols}</tr>
                        </thead>
                        <tbody>
                            <tr>{datacols}</tr>
                        </tbody>
                    </table>
                    
                </>
            ) : (
                <p className='bg-danger p-4 text-white'>Need to import column!</p>
            )}
        </div>
    );
}

export { Table };