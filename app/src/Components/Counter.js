import { useSelector, useDispatch } from 'react-redux';
import Card from './../UI/Card';
import classes from './style.module.scss';

const Counter = () => {
    const dispatch = useDispatch();

    const counter = useSelector( state => state.counter);
    const showCounterValue = useSelector( state => state.showCounter);
    const incrementHandler = () => {
        dispatch({type:'increment'});
    }
    const increasedHandler = () => {
        dispatch({type:'increased',incrementValue: 10});
    }
    const decrementHandler = () => {
        dispatch({type:'decrement'});
    }
    const toggleCounterHandler = () => {
        dispatch({type:'toggle'});
    }
    return(
        <Card class={classes.counter}>

            <h2 className={classes['counter-title']}>Redux counter</h2>
            {showCounterValue && <div className={classes['counter-value']}>{counter}</div>}

            <div className={classes['button-section']}>
                <button className={classes['default']} onClick={incrementHandler}>Increment</button>
                <button className={classes['default']} onClick={increasedHandler}>Increased by 10</button>
                <button className={classes['default']} onClick={decrementHandler}>Decrement</button>
            </div>

            <div className={classes['button-section']}>
                <button className={classes['default']} onClick={toggleCounterHandler}>Toggle Counter</button>
            </div>

        </Card>
    )
}
export default Counter;