import React, { useState } from 'react';


function CounterExample(props) {

    const [count, setCount] = useState(0);
    
    const increaseCounter = () => {
        setCount(count + 1);
    }

    const decreaseCounter = () => {
        setCount(count - 1);
    }

	return (
		<div>
            <button onClick={increaseCounter}>
                Increase
            </button>
            <h1>
			    {count}
            </h1>
            <button onClick={decreaseCounter}>
                Decrease
            </button>
		</div>
	);
}

export default CounterExample;