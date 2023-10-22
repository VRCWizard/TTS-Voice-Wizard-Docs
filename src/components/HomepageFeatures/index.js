import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'High Quality Speech Recognition',
    image: require('@site/static/img/Voice.png').default,
    description: (
      <>
      Leverage OpenAI's powerful Whisper speech recognition technology, ensuring accurate and reliable speech-to-text conversion.
      </>
    ),
  },
  {
    title: 'Hundreds Of Voices',
    image: require('@site/static/img/Listen.png').default,
    description: (
      <>
         Personalize your speech synthesis by choosing from a wide array of voices and customization options, find the voice that best suits you.
      </>
    ),
  },
  {
    title: 'Speak Any Language',
    image: require('@site/static/img/Speak.png').default,
    description: (
      <>
        Speak with your friends from all over the world, translate your speech to any of <a href="http://ttsvoicewizard.com/docs/Translation/SupportedLanguages">over 70 supported languages</a>.
      </>
    ),
  },
  // Add more features for the second row
  {
    title: 'Share Your Heart Rate',
    image: require('@site/static/img/Workout.png').default,
    description: (
      <>
        Seamlessly connect your heart rate monitor and share your real-time heart rate data with others to express your emotions.
      </>
    ),
  },
  {
    title: 'VRChat Interactions',
    image: require('@site/static/img/VR.png').default,
    description: (
      <>
      Control VRChat avatar parameters with voice commands, Display Customizable Interactive Counters based on VRChat Contact Receivers, Display Tracker and Controller Battery Life ...and much more.
      </>
    ),
  },
 
];


function Feature({ image, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} alt={title} className={styles.featureSvg} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.centeredRow)}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}