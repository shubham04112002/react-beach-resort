import React from 'react'
import Hero from "../components/Hero"
import Banner from "../components/Banner"
import {Link} from "react-router-dom"
const Error = () => {
    return (
        <Hero>
            {/* <Banner title="404" subtitle="A wise man once asked… If you’ve come to a page that can not be found Does it actually exist?">
           <Link to="/" className="btn-primary">return home</Link>
             </Banner> */}
             <Banner title="404">
                 <h2 >A wise man once asked…</h2>
                 <h3>If you’ve come to a page that can not be found</h3>
                 <h4> Does it actually exist?</h4>
                 <Link to="/" className="btn-primary">return home</Link>
             </Banner>
        </Hero> )
}

export default Error
