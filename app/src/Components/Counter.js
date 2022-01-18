import { useSelector, useDispatch } from 'react-redux';
import Card from './../UI/Card';
import store from './../Store/index';
import classes from './style.module.scss';

const Counter = () => {
    const dispatch = useDispatch();

    const counter = useSelector( state => state.counter);

    const incrementHandler = () => {
        dispatch({type:'increment'});
    }
    const decrementHandler = () => {
        dispatch({type:'decrement'});
    }
    const toggleCounterHandler = () => {

    }
    return(
        <Card class={classes.counter}>

            <h2 className={classes['counter-title']}>Redux counter</h2>
            <div className={classes['counter-value']}>{counter}</div>

            <div className={classes['button-section']}>
                
                <button className={classes['default']} onClick={incrementHandler}>Increment</button>
                <button className={classes['default']} onClick={decrementHandler}>Decrement</button>
                
                <button className={classes['default']} onClick={toggleCounterHandler}>Toggle Counter</button>
            </div>

        </Card>
    )
}
export default Counter;