import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList2 = [
  {
    title: '',
    image: require('@site/static/img/azureLogo.png').default,
    description: (
      <>
      
      </>
    ),
  },
  {
    title: '',
    image: require('@site/static/img/googleCloudLogo.png').default,
    description: (
      <>
         
      </>
    ),
  },
  {
    title: '',
    image: require('@site/static/img/AWSLogo.png').default,
    description: (
      <>
         
      </>
    ),
  },
  // Add more features for the second row
  {
    title: '',
    image: require('@site/static/img/IBMLogo.png').default,
    description: (
      <>
        
      </>
    ),
  },

 
];


function Feature({ image, title, description }) {
  return (
    <div className={clsx('col col--3')}>
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

export default function HomepageServices() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={clsx('row', styles.centeredRow)}>
          {FeatureList2.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}