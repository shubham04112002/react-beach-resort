import React, { Component } from 'react'
import Title from "./Title"
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from "react-icons/fa"
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title: "free cocktails",
                info:"Our selection of fine spirits brands, listed from A to Z. This includes such names as Belvedere vodka, Tanqueray gin, Bacardi rum and Courvoisier Cognac."
            },
            {
                icon:<FaHiking/>,
                title: "Endless Hiking",
                info:"Our selection of fine spirits brands, listed from A to Z. This includes such names as Belvedere vodka, Tanqueray gin, Bacardi rum and Courvoisier Cognac."
            },
            {
                icon:<FaShuttleVan/>,
                title: "free Shuttles",
                info:"Our selection of fine spirits brands, listed from A to Z. This includes such names as Belvedere vodka, Tanqueray gin, Bacardi rum and Courvoisier Cognac."
            },
            {
                icon:<FaBeer/>,
                title: "Strong Beer",
                info:"Our selection of fine spirits brands, listed from A to Z. This includes such names as Belvedere vodka, Tanqueray gin, Bacardi rum and Courvoisier Cognac."
            }
            
        ]
    }
    render() {
        return (
            <section className="services">
               <Title title="services"/>
               <div className="services-center">
                   {this.state.services.map((item,index)=>{
                       return <article key={index} className="service">
                           <span>{item.icon}</span>
                           <h6>{item.title}</h6>
                           <p>{item.info}</p>
                       </article>
                   })}
               </div>
            </section>
        )
    }
}
