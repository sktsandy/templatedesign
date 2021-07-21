import React, { createContext } from 'react';
import CompA from './usecontaxt/CompA';

const BioData = createContext();
const Subject = createContext();
const Profile = createContext();

const A2it = () => {
  return (
    <>
      <BioData.Provider value={"sandeep kumar"}> 
         <Subject.Provider value={"react js "}> 
            <Profile.Provider value={"Devloper"}> 
               <CompA />
            </Profile.Provider>
           </Subject.Provider>    
      </BioData.Provider>
    </>
  )
}

export default A2it;
export { BioData, Subject, Profile };
