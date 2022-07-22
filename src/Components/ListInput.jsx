import React from 'react';

const ListInput = ({ handleNewPerson }) => {
    const [input, setInput] = React.useState();
    return(
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '250px' }}>
            <h2>Vacation Inquiry</h2>
            <label for="first-name">First Name</label>
            <input id='first-name' value={input} onChange={(e) => {
                setInput(e.target.value);
            }} />
            <span style={{ margin: '5px' }} />
            <label for="last-name">Last Name</label>
            <input id='last-name' />
            <span style={{ margin: '5px' }} />
            <fieldset>
                <legend>Select prefered vacation.</legend>
                <div>
                    <input
                        type="radio"
                        id="mountains"
                        name="drone"
                        value="Mountains"
                    />
                    <label for="mountains">Mountains</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="beach"
                        name="drone"
                        value="Beach"
                    />
                    <label for="beach">Beach</label>
                </div>
            </fieldset>
            <span style={{ margin: '5px' }} />
            <label>Availability for appointment within the next seven days</label>
            <input type='date' />
            <span style={{ margin: '5px' }} />
            <button onClick={() => handleNewPerson(input)} >Add Client Appointment</button>
        </div>
    )
}

export default ListInput;