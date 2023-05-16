import React, { useState } from 'react';
import Image from 'next/image';
import styles from './eventGallery.module.css';
import rightIcon from '../../assets/caret-right-solid.svg';
import leftIcon from '../../assets/caret-left-solid.svg';

const photos = [
  {
    id: 'p1',
    title: 'Humus',
    url: 'eventImages/Humus.jpg',
  },
  {
    id: 'p2',
    title: 'Pink-Humus',
    url: 'eventImages/Pink-Humus.jpg',
  },
  {
    id: 'p3',
    title: 'Musakhan',
    url: 'eventImages/Musakhan.jpg',
  },
  {
    id: 'p4',
    title: 'Mutabal',
    url: 'eventImages/Mutabal.jpg',
  },
  {
    id: 'p5',
    title: 'Fatayer-Kaese',
    url: 'eventImages/Fatayer-Kaese.jpg',
  },
];

export default function EventGallery() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  const prev = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  return (
    <>
      <div className={styles.sliderContainer}>
        {photos.map((photo) => (
          <div
            key={photo.id}

            className={
              photos[currentIndex].id === photo.id ? styles.fade : `${styles.slide} ${styles.fade}`
            }
          >
            <img src={photo.url} alt={photo.title} className={styles.photo} />
            <div className={styles.caption}>{photo.title}</div>
          </div>
        ))}

        <button onClick={prev} className={styles.prev}>
          <Image src={leftIcon} alt='left btn' width={15} className={styles.btn} />
        </button>

        <button onClick={next} className={styles.next}>
          <Image src={rightIcon} alt='next btn' width={15} className={styles.btn} />
        </button>
      </div>

      <div className={styles.dots}>
        {photos.map((photo) => (
          <span
            key={photo.id}
            className={
              photos[currentIndex].id === photo.id ? `${styles.dot} ${styles.active}` : styles.dot
            }
            onClick={() => setCurrentIndex(photos.indexOf(photo))}
          ></span>
        ))}
      </div>
    </>
  );
}