import React, { useEffect, useState } from 'react'

function Effect(props) {
    const [count, setCount] =  useState(props.count);
    useEffect(() => {
        console.log("Render lại trang sẽ chạy vào useEffect(callback,[]) này");
    }, []);
    useEffect(() => {
        console.log("Render lại trang sẽ chạy vào useEffect(callback,[deps]) này");
    }, [count]);
    return (
        <div>
            <div>useEffect(callback,[])</div>
        </div>
    )
}

export default Effect