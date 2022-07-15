const ListItem = ({ person }) => {
    const { firstName, lastName, beachOrMountains } = person;
    return(
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <img
                alt={beachOrMountains === 'Beach' ? 'beach' : 'mountains'}
                height='46px'
                src={beachOrMountains === 'Beach' ? 'beach.svg' : 'mountain.svg'}
            />
            <h1>{firstName} {lastName}</h1>
        </div>
    )
}

export default ListItem;