import React from 'react'

const Dropdown = ({genre,setgid}) => {
  console.log("genrename",(genre.genres))
  const garray=genre.genres
  
  return (
    <div>
     <select className="p-2 bg-gray-600 bg-opacity-60 backdrop-blur-md text-white border rounded" onChange={(e)=>{setgid(e.target.value)}}> 
        <option value={0}>All genres </option>
        {
          garray.map((g)=>{
            return(
              <option key={g.id} value={g.id} >{g.name} </option>
            )
          })
        }
     </select>
    </div>
  )
}

export default Dropdown
