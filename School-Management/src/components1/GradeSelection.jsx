import React from 'react'

const GradeSelection = () => {

    
  return (
    <div>
      <select className='p-2 border rounded-lg'
      onChange={(e)=>selectedGrade(e.target.value)}
      >

        {grades.map((item,index)=>{
            <option key={index} value={item.grade}>{item.grade}</option>
        })}
      </select>
    
    </div>
  )
}

export default GradeSelection
