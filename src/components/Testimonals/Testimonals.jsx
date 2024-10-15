import React from 'react'
import styles from "./Testimonals.module.css"
import avatar from "../../images/Avatar.png"
const Testimonals = () => {
 // Content for each card
 const cardContent = [
    {
       id: 1, 
      description: 'Venenatis enim auctor porta in nisl ultrices suspendisse. Ipsum scelerisque tellus et nibh. Egestas in at vitae interdum augue elit volutpat. Aliquet tempor adipiscing tortor sed venenatis egestas diam.',
      image: avatar,
      name: 'Jake Haditch',
      location: 'Arizona,Texas'
    },
    {
        id: 2,
        description: 'Venenatis enim auctor porta in nisl ultrices suspendisse. Ipsum scelerisque tellus et nibh. Egestas in at vitae interdum augue elit volutpat. Aliquet tempor adipiscing tortor sed venenatis egestas diam.',
        image: avatar,
        name: 'Jake Haditch',
        location: 'Arizona,Texas'
    },
    {
        id: 3,
        description: 'Venenatis enim auctor porta in nisl ultrices suspendisse. Ipsum scelerisque tellus et nibh. Egestas in at vitae interdum augue elit volutpat. Aliquet tempor adipiscing tortor sed venenatis egestas diam.',
        image: avatar,
        name: 'Jake Haditch',
        location: 'Arizona,Texas'
    },
    // {
    //     id: 4,
    //     description: 'Venenatis enim auctor porta in nisl ultrices suspendisse. Ipsum scelerisque tellus et nibh. Egestas in at vitae interdum augue elit volutpat. Aliquet tempor adipiscing tortor sed venenatis egestas diam.',
    //     image: avatar,
    //     name: 'Jake Haditch',
    //     location: 'Arizona,Texas'
    // },
  ];

  return (
    <div className={styles.TestimonalsContainer}>
        <div className={styles.HeadingInfo}>
            <p className={styles.BoldText}>Testimonials</p>
            <p className={styles.SmText}>What people Are Saying about Atarodo</p>
        </div>
        
            <div className={styles.CardContainer} >
            {cardContent.map(item=>{
            return(
            <div className={styles.Card} key={item.id}>
                <p className={styles.CardDesc}>{item.description}</p>
                <div className={styles.UserDetail}>
                    <img src={item.image} className={styles.image}/>
                    <div className={styles.User}>
                        <p className={styles.Username}>{item.name}</p>
                        <p className={styles.Userlocation}>{item.location}</p>
                    </div>
                </div>
            </div>)
            }) }
        </div>
        
        <div className={styles.RateBox}>
            <p className={styles.RatePercent}>85% of our users rate us</p>
            <p className={styles.Rating}><span className={styles.Rated}>4.5 </span>out of 5 stars</p>
        </div>
    </div>
  )
}

export default Testimonals