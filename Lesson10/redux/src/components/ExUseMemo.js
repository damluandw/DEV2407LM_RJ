import React, { useMemo, useRef, useState } from 'react'

function ExUseMemo() {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [products, setProducts] = useState([]);
    const nameRef = useRef();
    const handleSubmit = () => {
        setProducts(
            [...products,
            {
                name: name,
                price: +price
            }]
        )
        setName('');
        setPrice('');
        nameRef.current.focus();

    }

    const total = useMemo(() => {
        const result = products.reduce((result, prod) => {
            console.log('tính toán lại')
            return result + prod.price
        }, 0)
        return result;
    }, [products])

    return (
        <div>
            <input
                type='text'
                ref={nameRef}
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder='nhap name' />
            <br />
            <input
                type='text'
                value={price}
                onChange={e => setPrice(e.target.value)}
                placeholder='nhap giá' />
            <br />
            <button onClick={handleSubmit}>Submit</button>
            <br/>
            <div>Total: {total}</div>
            <br/>
            <ul>
                {products.map((prod,index)=>(
                    <li key={index}>{prod.name} - {prod.price}</li>
                ))}
            </ul>
        </div>
    )
}

export default ExUseMemo