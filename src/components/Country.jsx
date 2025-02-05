import React from 'react'
import Marquee from 'react-fast-marquee'
import america from '../assets/Countey/America.png'
import austrilia from '../assets/Countey/australia.png'
import canada from '../assets/Countey/canada.png'
import england from '../assets/Countey/England.png'
import eu from '../assets/Countey/eu.png'
function Country() {
  return (
    <>
    <section>
        <h2 className='text-xl text-center text-green-800 mt-10 my-5 md:text-4xl'>We have available rooms in these country</h2>
        <p className='text-center mx-auto p-2 md:p-0 md:w-8/12'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam consequatur aliquam sed iusto nemo qui recusandae consectetur animi maiores eos autem, expedita assumenda neque omnis dicta quis delectus placeat vero!</p>
        {/* Country Image with marque tag */}
        <main className='my-10'>

          <Marquee>
                <div className='flex gap-3 w-8/12 mx-auto'>
                    <img src={america} alt="" />
                    <img src={canada} alt="" />
                    <img src={austrilia} alt="" />
                    <img src={eu} alt="" />
                    <img src={america} alt="" />
                    <img src={england} alt="" />
                </div>
         
          </Marquee>
        </main>
    </section>
      
    </>
  )
}

export default Country
