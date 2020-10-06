import React from 'react'
import Hero from '../cmps/Home/Hero'
import HPB1 from '../cmps/Home/HPB1'
import HPB2 from '../cmps/Home/HPB2'
import HPB3 from '../cmps/Home/HPB3'

export default function Home() {
    return (
        <React.Fragment>
            <Hero />
            <HPB1 />
            <HPB2 />
            <HPB3/>
        </React.Fragment>
    )
}
