import React from 'react';
import { FetchDestinations } from '../fetchDestinations';

const ListInput = ({ handleNewPerson }) => {

    const [formData, setFormData] = React.useState({
        firstName: '',
        lastName: '',
        vacationPreference: '',
        meetingDate: '',
    });
    
    const [validationErrors, setValidationErrors] = React.useState({
        firstName: '',
        lastName: '',
        vacationPreference: '',
        meetingDate: '',
    })

    const hanldFormValidation = (formData) => {
        const tempValidationErrors = { ...validationErrors };
        let isError = false;
        Object.keys(formData).forEach((key) => {
            if (formData[key] === '') {
                tempValidationErrors[key] = 'Field is required';
                isError = true;
            } else {
                tempValidationErrors[key] = ''
            }
            if (key === 'meetingDate') {
                // do custommeeting date validation
            } 
        })
        setValidationErrors(tempValidationErrors);
        !isError && handleNewPerson(formData);
    }

    return(
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '250px' }}>
            <h2>Vacation Inquiry</h2>
            <label htmlFor="first-name">First Name</label>
            <input id='first-name'
                value={formData.firstName}
                onChange={(e) => {
                    setFormData({ ...formData, firstName: e.target.value });
                }} 
            />
            <span style={{ color: 'red' }}>{validationErrors.firstName}</span>
            <span style={{ margin: '5px' }} />
            <label htmlFor="last-name">Last Name</label>
            <input id='last-name'
                value={formData.lastName}
                onChange={(e) => {
                    setFormData({ ...formData, lastName: e.target.value });
                }}
            />
            <span style={{ color: 'red' }}>{validationErrors.lastName}</span>
            <span style={{ margin: '5px' }} />
            <fieldset>
                <legend>Select prefered vacation.</legend>
                <div>
                    <input
                        type="radio"
                        id="mountains"
                        name="drone"
                        value="Mountains"
                        checked={formData.vacationPreference === 'Mountains'}
                        onChange={(e) => {
                            setFormData({ 
                                ...formData,
                                vacationPreference: e.currentTarget.value
                            });
                        }}
                    />
                    <label htmlFor="mountains">Mountains</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="beach"
                        name="drone"
                        value="Beach"
                        checked={formData.vacationPreference === 'Beach'}
                        onChange={(e) => {
                            setFormData({ 
                                ...formData,
                                vacationPreference: e.currentTarget.value
                            });
                        }}
                    />
                    <label htmlFor="beach">Beach</label>
                </div>
            </fieldset>
            <span style={{ color: 'red' }}>{validationErrors.vacationPreference}</span>
            <FetchDestinations />
            <span style={{ margin: '5px' }} />
            <label>Availability for appointment within the next seven days</label>
            <input
                type='date'
                value={formData.meetingDate}
                onChange={(e) => {
                    setFormData({ 
                        ...formData,
                        meetingDate: e.target.value
                    });
                }}
            />
            <span style={{ color: 'red' }}>{validationErrors.meetingDate}</span>
            <span style={{ margin: '5px' }} />
            <button onClick={() => hanldFormValidation(formData)} >Add Client Appointment</button>
        </div>
    )
}

export default ListInput;