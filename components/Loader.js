import React from 'react'
import { CirclesWithBar } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className="flex items-center justify-center">
            <CirclesWithBar
                height="50"
                width="50"
                color="#ffffff"
                outerCircleColor="#ffffff"
                innerCircleColor="#ffffff"
                barColor="#fde047"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loader