import React from 'react'
import api from '../img/api.txt'
import Post from "./Post"

function Home() {
    return (
        <div>
                        <h1>
            WELCOME TO BLOG-ME</h1>
            <h2>ABOUT US</h2>
            <p> Blog-Me is a data collection site that concern's itself with gathering and measuring information on targeted 
variables in an established system, which then enables one to
 answer relevant questions and evaluate outcomes.
 Data collection is a component of research in all fields
  of study including physical and social sciences, humanities,
  and business. While methods vary by discipline, the emphasis
   on ensuring accurate and honest collection remains the same.
   The goal for all data collection is to capture quality 
   evidence that allows analysis to lead to the formulation
    of convincing and credible answers to the questions that
     have been posed.</p>

     <Post/>

            <p>{api}</p>

        </div>
    )
}

export default Home;
