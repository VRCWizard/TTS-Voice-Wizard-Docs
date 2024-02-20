import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageServices from '@site/src/components/HomepageServices';



import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  const titleImageSrc = "img/VRChatTTSColoredBanner.png"; 
  const backgroundImageSrc = "img/Fwiends.png"; 

 // <header
  //className={clsx('hero hero--primary', styles.heroBanner)}
 // style={{ backgroundImage: `url(${backgroundImageSrc})` }} >
  //const backgroundImageSrc = "img/VRChatTTSColoredBanner.png"; // Replace with your image file name

  return (
   // <header className={clsx('hero hero--primary', styles.heroBanner)}>
     <header
  className={clsx('hero hero--primary', styles.backBanner)}
  style={{ backgroundImage: `url(${backgroundImageSrc})` }} >
  

      <div className="container">
      <img src={titleImageSrc} alt="Homepage Title" className="hero__title-image" />
        <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="https://github.com/VRCWizard/TTS-Voice-Wizard/releases/download/v1.6.7/TTSVoiceWizard-v1.6.7-x64.zip">
                Download TTSVoiceWizard-v1.6.7-x64.zip
              </Link>
            </div>
         

        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="A free and open-source Speech-To-Text and Text-To-Speech application designed for all your VRChat, VTuber and Streamer needs.">
      <HomepageHeader />
      
      
      <main>
          <Link
            to="/docs/intro"
            style={{
              fontSize: '30px', // Adjust the font size as needed
              textDecoration: 'underline',
              display: 'block',
              margin: '10px',
              textAlign: 'center',
            }}
          >
            Features
              </Link>
         
       

        <HomepageFeatures />

        <Link
            to="/docs/getting-started/textToSpeech#tts-methods-list"
            style={{
              fontSize: '30px', // Adjust the font size as needed
              textDecoration: 'underline',
              display: 'block',
              margin: '10px',
              textAlign: 'center',
            }}
          >
            Integrated Services
              </Link>

        

        <HomepageServices />

      </main>
      
    </Layout>
  );
}
