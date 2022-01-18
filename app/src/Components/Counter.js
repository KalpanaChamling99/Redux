import Card from './../UI/Card';
import classes from './style.module.scss';
const Counter = () => {
    return(
        <Card class={classes.counter}>
            <h2 className={classes['counter-title']}>Redux counter</h2>
            <div className={classes['counter-value']}>Counter Value</div>
            <div className={classes['button-section']}>
                <button className={classes['default']}>Toggle Counter</button>
            </div>
        </Card>
    )
}
export default Counter;