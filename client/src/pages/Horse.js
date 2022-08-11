import styles from './Horse.module.css';

function Horse(props) {

    const animStyle = {
        width: "150px",
        paddingLeft: props.distance * 0.67
    };

    return (
        <div className={styles.horse}>
            <div style={animStyle}>
                <div>{props.name} is running at {props.distance} м.</div>
                <div><img style={{ width: "100px" }} src="https://zooclub.ru/attach/fotogal/anima/445.gif" alt=""></img></div>
                <div></div>
            </div>
        </div>
    );
}

export default Horse;