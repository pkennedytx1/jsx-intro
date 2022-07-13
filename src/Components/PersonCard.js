const PersonCard = ({ data: {firstName, lastName, beachOrMountains }}) => {
    return(
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <img
            height='40px'
            alt={beachOrMountains === 'Mountains' ? 'mountains' : 'beach'}
            src={beachOrMountains === 'Mountains' ? 'mountain.svg' : 'beach.svg'}
            />
            <h2>{firstName} {lastName}</h2>
        </div>
    )
}

export default PersonCard