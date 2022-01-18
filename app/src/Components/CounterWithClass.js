import { Component } from 'react';
import { connect } from 'react-redux';
import Card from './../UI/Card';
import store from './../Store/index';
import classes from './style.module.scss';


class Counter extends Component{
    incrementHandler(){
        this.props.increment();
    }
    decrementHandler(){
        this.props.decrement();
    }
    toggleCounterHandler(){

    }
    render(){
        return(
            <Card class={classes.counter}>

                <h2 className={classes['counter-title']}>Redux counter</h2>
                <div className={classes['counter-value']}>{this.props.counter}</div>

                <div className={classes['button-section']}>
                    
                    <button className={classes['default']} onClick={this.incrementHandler.bind(this)}>Increment</button>
                    <button className={classes['default']} onClick={this.decrementHandler.bind(this)}>Decrement</button>
                    
                    <button className={classes['default']} onClick={this.toggleCounterHandler}>Toggle Counter</button>
                </div>

            </Card>
        );
    }
}
const mapStateToProps = state => {
    return{
        counter: state.counter
    }
};
const mapDispatchToProps = dispatch => {
    return{
        increment: () => dispatch({ type: 'increment'}),
        decrement: () => dispatch({ type: 'decrement'}),
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter); 