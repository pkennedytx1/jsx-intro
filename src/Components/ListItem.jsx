import { CardContainer, Spacer } from './ListItem.styles';

const ListItem = ({ person, value, handleRemoveAppointment }) => {
    const { firstName, lastName, beachOrMountains } = person;
    return(
        <CardContainer isPink={beachOrMountains === 'Beach'}>
            <img
                alt={beachOrMountains === 'Beach' ? 'beach' : 'mountains'}
                height='46px'
                src={beachOrMountains === 'Beach' ? 'beach.svg' : 'mountain.svg'}
            />
            <h1>{firstName} {lastName}</h1>
            <button value={value} onClick={(e) => handleRemoveAppointment(e.target.value)}>Remove Appt</button>
        </CardContainer>
    )
}

export default ListItem;