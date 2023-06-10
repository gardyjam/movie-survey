import './css/Confirmation.css'

const Confirmation = ({prevStep, handleSubmit}) => {
    
    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    const Submit = e => {
        e.preventDefault();
        handleSubmit();
    }
    
    return (
        <div className="confirmation">
            <text className="confirmation-text">To już koniec! <br></br>Chcesz zakończyć ankietę?</text>

            <button onClick={ Previous } className="back-button">Wróć do pytań</button>
            <button onClick={ Submit } className="finish-button">Zakończ i wyślij</button>
        </div>
    );
}

export default Confirmation