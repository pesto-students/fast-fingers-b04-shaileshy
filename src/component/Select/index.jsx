import React from 'react'

const Select = ({ level, options, onLevelChange}) =>  {
    return (
        <select onChange={(e) => onLevelChange(e.target.value)} value = {level}>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>

        </select>
    )
}

export default Select;