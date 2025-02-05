import React from 'react'
import feature1 from '../assets/Feature-image/feature-1.jpg'
import feature2 from '../assets/Feature-image/feature-2.jpg'
import feature3 from '../assets/Feature-image/feature-3.jpg'
import feature4 from '../assets/Feature-image/feature-4.jpg'
import feature5 from '../assets/Feature-image/feature-5.jpg'
import feature6 from '../assets/Feature-image/feature-6.jpg'
function Feature() {
  return (
    <>
      <section>
            <>
            <h1 className='text-2xl my-3 font-bold md:text-5xl text-center text-green-800 md:mt-20 '>Property Inside Image</h1>
            <p className='text-center px-1'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus quos sit vero odio maiores praesentium enim deserunt eius eaque eveniet.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, blanditiis.</p>
            </>
        {/* Main Section  */}
        <main className="carousel carousel-center  rounded-box  space-x-4 p-4">
          <div className="carousel-item ">
            <img
              src={feature1}
              className="rounded-box border-green-950 border-x-2 border-y-2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={feature2}
              className="rounded-box border-green-950 border-x-2 border-y-2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={feature3}
              className="rounded-box border-green-950 border-x-2 border-y-2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={feature4}
              className="rounded-box border-green-950 border-x-2 border-y-2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={feature5}
              className="rounded-box border-green-950 border-x-2 border-y-2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={feature6}
              className="rounded-box border-green-950 border-x-2 border-y-2"
            />
          </div>
        </main>
      </section>
    </>
  );
}

export default Feature
