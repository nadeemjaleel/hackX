"use client"

import React from "react";
import styles from './style.module.css'
import {gsap} from 'gsap'
const Preloading = () => {
    const titles = gsap.utils.toArray('p')
    const tl = gsap.timeline();
    titles.forEach(title => {
    const splitTitle = new SplitTextJS(title);
    tl
        .from(splitTitle.chars, {
            opacity: 0,
            y: 80,
            rotateX: -90,
            stagger: .02
        }, "<")

        .to(splitTitle.chars, {
            opacity: 0,
            y: -80,
            rotateX: 90,
            stagger: .02
        }, "<1")
    })
    
    
    return (
        <div className="container">
            <div className="text-wrapper">
                <p className={styles.p}>Innov8X</p>
                <p className={styles.p}>Hackathon</p>
                <p className={styles.p}>Designathon</p>
                <p className={styles.p}>Ideathon</p>
            </div>
        </div>
    )
}

export default Preloading