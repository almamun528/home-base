import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Agents = () => {
    const loadAgent = useLoaderData()
    return (
      <>
        <section className="w-10/12 mx-auto py-10 grid md:flex gap-3 items-center justify-between">
          {loadAgent &&
            loadAgent.map((agent) => (
              <main key={agent.Email}>
                <picture>
                  <img className="h-72 mt-3 rounded" src={agent.Image} alt="" />
                  <h1 className="md:text-2xl text-xl font-bold my-3">Name: {agent.Name} </h1>
                </picture>
                <div className="space-y-2 mt-3">
                  <h1 className='text-gray-500' > Company: {agent?.Company} </h1>
                  <h1 className='text-gray-500' > Role: {agent?.Role}</h1>
                  <h1 className='text-gray-500' > Office: {agent?.Office}</h1>
                  <h1 className='text-gray-500' > Mobile: {agent?.Mobile}</h1>
                  <h1 className='text-gray-500' > Email: {agent?.Email}</h1>
                  <div className="divider divider-success"></div>
                </div>
              </main>
            ))}
        </section>
      </>
    );
};

export default Agents;

/**
 *   {
    "AgentID": "A55667",
    "Name": "Liam Brown",
    "Company": "Prime Properties",
    "Role": "Real Estate Consultant",
    "Office": "678 912 3456",
    "Mobile": "678 912 3457",
    "Fax": "890 123 4567",
    "Email": "liam@primeproperties.com",
    "Image": "https://i.ibb.co.com/2ZL2tMT/Artboard-2team.jpg"
  }
 */