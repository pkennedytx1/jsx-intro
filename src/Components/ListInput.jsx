import React from 'react';

const ListInput = ({ handleNewPerson }) => {
    const [input, setInput] = React.useState();
    return(
        <>
            <input value={input} onChange={(e) => {
                setInput(e.target.value);
            }} />
            <button onClick={() => handleNewPerson(input)} >Add Person</button>
        </>
    )
}

export default ListInput;