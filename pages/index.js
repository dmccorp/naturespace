import Head from 'next/head'
import Hero from '../components/Hero3D'
import VideoEditorial from '../components/VideoEditorial'
import Features from '../components/Features'
import Steps from '../components/Steps'
import Testimonials from '../components/Testimonial'
import Footer from '../components/Footer'
import WorksGallery from '../components/WorksGallery'

import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>naturespace</title>
        <meat name="keywords" content="interior, home interior, gardening, landscape, nature" />
      </Head>
      <main className={styles.main}>
        <Hero />
        <VideoEditorial />
        <Features />
        <WorksGallery />
        <Steps />
        <Testimonials />
        <Footer />
      </main>
    </div>
  )
}
