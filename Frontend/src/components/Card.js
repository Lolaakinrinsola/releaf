import React from 'react'
import {BsThreeDots} from 'react-icons/bs'
import {ImArrowDown,ImArrowUp} from 'react-icons/im'
import graph from '../assets/graph.png'
const Card = ({percentage,accountType,totalAmount}) => {
  return (
    <div className="w-full md:border-r-[1px] md:pr-[2em]">
            <div className="flex justify-between w-full items-center text-[1.5em] pb-[2em] text-[#7F7F7F]">
                <p className=''>{accountType}</p>
        <BsThreeDots size='1.5em' className="m-0" />

            </div>
            <div className="flex justify-between">
                <div className="grid">
                    <p className="text-[2em] font-semibold">
                        {totalAmount}
                    </p>
                    <div className={`${percentage > 20?'text-[#6FFC2D]':'text-[#E54843]'} flex gap-1 items-center`}>
                        {percentage > 20?<ImArrowUp/>: <ImArrowDown/>}
                    <p className={`  text-[1.2em]`}>{percentage}%</p>
                    </div>
                </div>
                <img src={graph} alt="" className='h-[4.5em]'/>
            </div>

            </div>
  )
}

export default Card