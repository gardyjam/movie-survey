import './css/Introduction.css';

const StepOne = ({nextStep}) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    return (
        <div className="Introduction">
            <h2> 
            
            </h2>
            Jak myślisz, czy da się trafnie dopasować do danej osoby gatunek filmu na podstawie testu psychologicznego? <br></br>
            <h3>Pomóż mi to sprawdzić!</h3>
            <button onClick={ Continue } className="start-button">Wypełnij ankietę</button>
        </div>
    );
}

export default StepOne