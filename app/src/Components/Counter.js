import { useSelector } from 'react-redux';
import Card from './../UI/Card';
import store from './../Store/index';
import classes from './style.module.scss';

const Counter = () => {

    const counter = useSelector( state => state.counter);

    const toggleCounterHandler = () => {

    }
    return(
        <Card class={classes.counter}>
            <h2 className={classes['counter-title']}>Redux counter</h2>
            <div className={classes['counter-value']}>{counter}</div>
            <div className={classes['button-section']}>
                <button className={classes['default']} onClick={toggleCounterHandler}>Toggle Counter</button>
            </div>
        </Card>
    )
}
export default Counter;