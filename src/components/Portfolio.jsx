import React from 'react'
const Portfolio = () => {
    const carditem=[
        {
            id:1,
            logo:"/react.png",
            name:"React JS"
        },
        {
            id:2,
            logo:"/flask.png",
            name:"Flask"
        },
        {
            id:3,
            logo:"/mysql.png",
            name:"MYSQL"
        }
    ]
  return (
    <div name='Portfolio' className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-10'> 
      <div>
        <h1 className='text-3xl font-bold mb-5'>PortFolio</h1>
        <span className='underline fon-semibold'>Featured Project</span>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-20 my-5'>
             {
                carditem.map(({id,logo,name}) =>(
                    <div className='md:w-[300px] md:h-[300px] border-[1px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                         <img src={logo} className='w-[120px] h-[120x] p-1 rounded-full border-[2x]' alt="" />
                         <div>
                            <div>
                               <div className='font-bold text-xl mb-2'>{name}</div> 
                               <p className='px-2 text-gray-700'> "In this project, I used React for the front-end, Flask for API development, and MySQL for the back-end."</p>
                            </div>
                            {/* <div className='justify-around space-x-3 px-6 py-4'>
                                <button className='bg-green-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>Source code</button>
                            </div> */}
                         </div>
                    </div>
                ) )
             }
        </div>
      </div>
    </div>
  )
}

export default Portfolio