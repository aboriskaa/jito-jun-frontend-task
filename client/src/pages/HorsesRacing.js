import { useEffect } from 'react';
import { connect } from 'react-redux';
import { setHorses } from '../redux/horses_reducer';
import styles from './HorsesRacing.module.css';
import Horse from './Horse';

function HorsesRacing({ horses, setHorses, winner }) {

    useEffect(() => {
        setHorses();
    }, []);

    return (
        <div className={styles.horsesList}>
            {winner.length > 0 ? <div className={styles.winner}><p>{winner[0]} is a winner!!!</p></div> : ""}
            <div>{horses.map(u => <Horse name={u.name} distance={u.distance} />)}</div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        horses: [...state.horsesReducer.horses],
        winner: [...state.horsesReducer.winner]
    }
}

export default connect(mapStateToProps, { setHorses })(HorsesRacing);

