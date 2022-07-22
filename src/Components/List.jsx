import React from 'react';
import { data as initialData } from '../data';
import ListItem from './ListItem';
import ListInput from './ListInput';

const List = () => {
    const [data, setData] = React.useState(initialData);
    const handleNewPerson = ({ firstName, lastName }) => {
        setData([...data, {
            firstName: firstName,
            lastName: lastName,
            beachOrMountains: 'Mountains',
        }])
    }
    return(
        <>
            <ListInput handleNewPerson={handleNewPerson}/>
            {
                data?.map((person) => {
                    return (
                        <ListItem
                            key={`${person.firstName}-${person.lastName}`}
                            person={person}
                        />
                    )
                })
            }          
        </>
    )
}

export default List;