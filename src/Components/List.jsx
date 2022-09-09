import React, { useEffect } from 'react';
import ListItem from './ListItem';
import ListInput from './ListInput';
import { Spacer } from './ListItem.styles';
import { ListContainer } from './List.styles';
import axios from 'axios'

const List = ({ showAppointments = false }) => {
    const [data, setData] = React.useState([]);

    useEffect(() => {
        setData([]);
        axios
            .get(`http://localhost:1337/api/appointments?token=${process.env.REACT_APP_API_TOKEN}`)
            .then((response) => {
                const apptData = response.data.data.map((appointment) => {
                    return {
                        id: appointment.id,
                        firstName: appointment.attributes.first_name,
                        lastName: appointment.attributes.last_name,
                        vacationPreference: appointment.attributes.vacation_preference,
                        vacationLocation: appointment.attributes.vacation_location,
                        meetingDate: appointment.attributes.appointment_date
                    }
                })
                setData(apptData);
            })
            .catch((error) => {
                console.error(error)
            })
    }, []);
    const handleNewPerson = ({ firstName, lastName, vacationLocation, vacationPreference, meetingDate }) => {
        const lastId = data[data.length - 1].id;
        setData([...data, {
            id: lastId + 1,
            firstName,
            lastName,
            vacationPreference,
            vacationLocation,
            meetingDate,
        }])
    }

    const handleStateReset = (setFormState) => {
        setFormState({
            firstName: '',
            lastName: '',
            vacationPreference: '',
            vacationLocation: '',
            meetingDate: '',
        })
    }
    
    const handleRemoveAppointment = (id) => {
        const updatedData = data.filter((appt) => appt.id !== +id);
        console.log(updatedData, id);
        setData(updatedData);
    }

    return(
        <ListContainer>
            {showAppointments ?
                data?.map((person) => {
                    return (
                        <>
                        <ListItem
                            value={person.id}
                            handleRemoveAppointment={handleRemoveAppointment}
                            key={`${person.firstName}-${person.lastName}`}
                            person={person}
                        />
                        <Spacer mt={'10px'} />
                        </>
                    )
                }) :
                <ListInput handleNewPerson={handleNewPerson} handleStateReset={handleStateReset}/>    
            }
        </ListContainer>
    )
}

export default List;