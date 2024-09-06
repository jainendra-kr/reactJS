import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/jainendra-kr')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
            
    //     })
    // },[])
  return (
    <div className='bg-gray-600 text-center text-3xl m-4 p-4 text-white'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Github Image" width={300} className='rounded-xl' />
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/jainendra-kr')
    return response.json()
}