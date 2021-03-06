import React from 'react'

export default function Input({onChange, value}) {
    return (
        <input
            value = {value}
            onChange = { (e) => onChange(e.target.value)}
        />
    )
}
