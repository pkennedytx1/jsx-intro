import React from 'react';
import { data as initialData } from '../data';
import ListItem from './ListItem';
import ListInput from './ListInput';
import { Spacer } from './ListItem.styles';

const List = () => {
    const [data, setData] = React.useState(initialData);
    const handleNewPerson = ({ firstName, lastName }) => {
        const lastId = data[data.length - 1].id;
        console.log(lastId);
        setData([...data, {
            id: lastId + 1,
            firstName: firstName,
            lastName: lastName,
            beachOrMountains: 'Mountains',
        }])
    }
    
    const handleRemoveAppointment = (id) => {
        const updatedData = data.filter((appt) => appt.id !== +id);
        console.log(updatedData, id);
        setData(updatedData);
    }

    return(
        <>
            <ListInput handleNewPerson={handleNewPerson}/>
            {
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
                })
            }          
        </>
    )
}

export default List;