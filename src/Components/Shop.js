import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index'
import { useSelector } from 'react-redux';

const Shop = () => {
    const dispatch = useDispatch();
    const { withdrawMoney, depositMoney } = bindActionCreators(actionCreators, dispatch)
    const balance = useSelector(state => state.amount)
    return (
        <div>
            <h2>Deposit/withdraw Money</h2>
            <button className="btn btn-primary" onClick={() => { depositMoney(100) }}>+</button>
            Update balance={balance}
            <button className="btn btn-primary" onClick={() => { withdrawMoney(100) }}>-</button>

            {/* <button className="btn btn-primary" onClick={() => { dispatch(actionCreators.depositMoney(100)) }}>+</button> */}
            {/* Update balance */}
            {/* <button className="btn btn-primary" onClick={() => { dispatch(actionCreators.withdrawMoney(100)) }}>-</button>  */}
        </div>
    )
}

export default Shop
