import React, { useContext } from 'react'
import { ThemeContext } from './Example';


function Info() {
    const theme = useContext(ThemeContext);
    console.log(theme);
    return (
        <div>
            <p className={theme}>
                Mí bà ko biết nấu ăn cũng có thể trổ tài nấu nướng với những loại sốt ngon siu hợp vị người Việt dưới đây, ngon như ngoài hàng, lấy lòng được cả người khó tính nhấttt
            </p>
        </div>
    )
}

export default Info