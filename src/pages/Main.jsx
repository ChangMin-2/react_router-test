/*eslint-disable*/  //노란줄을 없애줌
import React from 'react'
import data from '../components/data'

export default function Main() {
  return (
    <>
      <div className='visual-main'>
        <img src='/images/visual_main_01.jpg'/>
      </div>

      <div className='container'>
        {
          data.map((value, index)=>{
            return(
              <div className={`col-md-3 ${value.class}`}>
                {/* 리엑트의 매력 !! */}
                <img src={`/images/best_0${index+1}.png`} width='280px'></img>    
                <h3>{value.title}</h3>
                <p>{value.price}</p>
              </div>
            )
          })
        }
      </div> {/*container*/}
    </>
  )
}
