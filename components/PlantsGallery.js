import React from 'react'
import styles from '../styles/PlantsGallery.module.scss'

const plantsList = [
    {
        name: 'Areca Palm',
        imgSrc: 'plants/arecapalm.png'
    },
    {
        name: 'China lily',
        imgSrc: 'plants/chinalily.png'
    },
    {
        name: 'Areca Palm',
        imgSrc: 'plants/arecapalm2.png'
    },
    {
        name: 'Fern',
        imgSrc: 'plants/fern.png'
    }

]

const PlantsGallery = ({plants = plantsList}) => {

    const plantList = () => {
        return plants.map( plant => {
            return(
                <div className={styles.plant}>
                    <img className={styles.plant__img} src={`images/${plant.imgSrc}`} alt={plant.name} />
                    <h3 className={styles.plant__name}>{plant.name}</h3>
                </div>
            )
        })
    }

    return (
        <section className={styles.container}>
            <h2 className={styles.header}>Plants <span className={styles.header__stroke}>we use</span></h2>
            <div className={styles.plantsWrap}>
                {plantList()}
            </div>
            
        </section>
    )
}


export default PlantsGallery;