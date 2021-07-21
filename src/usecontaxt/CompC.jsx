import React, { useContext } from 'react'
import { BioData, Subject, Profile } from '../A2it';

const CompC = () => {
   const name = useContext(BioData);
   const subject = useContext(Subject);
   const profile = useContext(Profile);
    return (
        <>
            <h1 className="text-center mt-5"> hello i am component {name} {subject} {profile} </h1>
        </>
    )
}

export default CompC;
