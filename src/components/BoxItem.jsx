import React from "react";
import { GrUserWorker } from "react-icons/gr";

function BoxItem() {
  return (
    <>
      <section className="my-20 md:w-9/12 mx-auto bg-base-300 shadow-xl ">
        <main className="grid md:grid-cols-3 gap-3 p-10 space-y-6 md:space-y-0">
          <>
            <div className="p-3 rounded-md shadow-2xl space-y-3 border-green-700">
              <GrUserWorker className="text-7xl " />
              <h1 className="text-xl md:text-3xl md:font-bold">Well Design</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate ipsam asperiores quos nobis nam adipisci, possimus
                illo omnis delectus perferendis!
              </p>
            </div>
          </>
          <>
            <div className="p-3 rounded-md shadow-2xl space-y-3 border-green-700">
              <GrUserWorker className="text-7xl " />
              <h1 className="text-xl md:text-3xl md:font-bold">Well Design</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate ipsam asperiores quos nobis nam adipisci, possimus
                illo omnis delectus perferendis!
              </p>
            </div>
          </>
          <>
            <div className="p-3 rounded-md shadow-2xl space-y-3 border-green-700">
              <GrUserWorker className="text-7xl " />
              <h1 className="text-xl md:text-3xl md:font-bold">Well Design</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate ipsam asperiores quos nobis nam adipisci, possimus
                illo omnis delectus perferendis!
              </p>
            </div>
          </>
        </main>
      </section>
    </>
  );
}

export default BoxItem;
