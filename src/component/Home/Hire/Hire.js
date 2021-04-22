import React from 'react';
import Payment from '../Payment/Payment';

const Hire = () => {
    const styles ={
        width:'100vh',
        height:'100vh',
        marginTop: '6%',
        
    }
    return (
        <div style={styles} className=" w-100 h-100 py-5   container">
           <h6 className="font-weight-bold pb-3">Add Credit or debit card</h6>
            <Payment />
        </div>
    );
};

export default Hire;