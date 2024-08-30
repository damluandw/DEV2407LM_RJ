import React, { memo } from 'react'

function ContentUseCallback({OnIncrease}) {
  return (
    <>
            <div>Chào cả nhà</div>
            <button onClick={OnIncrease}>
                    click here
            </button>
    </>
  )
}

export default memo(ContentUseCallback)