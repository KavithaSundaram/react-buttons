import { useNavigate } from 'react-router-dom'

const Buttons = ({ setColumns, columns }) => {
    const navigate = useNavigate()
    const handleClick = (column_size) => {
        setColumns(column_size)
        navigate('/table')
    }

    return (
        <div className="buttons container mt-5 d-flex flex-wrap">
            <button className="btn btn-primary m-3" onClick={() => handleClick(1)}>Button 1</button>
            <button className="btn btn-primary m-3" onClick={() => handleClick(2)}>Button 2</button>
            <button className="btn btn-primary m-3" onClick={() => handleClick(3)}>Button 3</button>
            <button className="btn btn-primary m-3" onClick={() => handleClick(4)}>Button 4</button>
            <button className="btn btn-primary m-3" onClick={() => handleClick(5)}>Button 5</button>
        </div>
    )
}

export { Buttons }