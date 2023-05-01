import React, { useState } from 'react';
import Checkout from '../checkout';

export default function Order() {
    const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);

    function setCheckoutTrue() {
        setIsCheckoutComplete(true);
    }

    function setCheckoutFalse() {
        setIsCheckoutComplete(false);
    }

    return (
        <>
            {!isCheckoutComplete && (
                <>
                    <h1>ORDER MEALS!!</h1>
                    <button onClick={() => setCheckoutTrue()} >Test order</button>
                </>
            )}
            {isCheckoutComplete && (
                <Checkout setCheckoutFalse={setCheckoutFalse} />
            )}
        </>
    );
}
