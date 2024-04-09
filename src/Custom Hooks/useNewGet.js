import React, { useEffect, useState } from 'react'

const useNewGet = (endPoint) => {
    const [data, setData]=useState();
    useEffect(()=>{
endPoint.then(res => {
    console.log(res)
    setData(res.data)
}).catch(err=> console.log(err))
    },[]);
  return  [data]
 
}

export default useNewGet