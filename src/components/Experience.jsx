import React from 'react'
const Experience = () => {
    const carditem=[
        {
            id:1,
            logo:"/html.jpg",
            name:"HTML"
        },
        {
            id:2,
            logo:"/css.png",
            name:"CSS"
        },
        {
            id:3,
            logo:"/javasctipt.png",
            name:"Javascript"
        },
        {
            id:4,
            logo:"/react.png",
            name:"React JS"
        },
        {
            id:5,
            logo:"/flask.png",
            name:"Flask"
        },
        {
            id:6,
            logo:"/mysql.png",
            name:"MYSQL"
        }
    ]
  return (
    <div name='Experience' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 my-16'> 
      <div>
        <h1 className='text-3xl font-bold mb-5'>Experience</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-20 my-5'>
             {
                carditem.map(({id,logo,name}) =>(
                    <div className='flex flex-col items-center justify-center  border-[1px] rounded-full  md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                         <img src={logo} className='w-[150px]  rounded-full ' alt="" />
                         <div>
                            <div>
                               <div className=''>{name}</div> 
                            </div>
                         </div>
                    </div>
                ) )
             }
        </div>
      </div>
    </div>
  )
}

export default Experience