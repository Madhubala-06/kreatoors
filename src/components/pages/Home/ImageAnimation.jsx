

import React, { useMemo } from 'react';


import one from '../../../assets/images/grid-images/Frame 1597884900.png';
import two from '../../../assets/images/grid-images/Frame 1597884897.png';

import three from '../../../assets/images/grid-images/Frame_1597884861-removebg-preview.png';
import four from '../../../assets/images/grid-images/Frame 1597884863.png';

import five from '../../../assets/images/grid-images/Frame 1597884899 (1).png';
import six from '../../../assets/images/grid-images/Frame 1597884854.png';

import seven from '../../../assets/images/grid-images/Frame 1597884864.png';
import eight from '../../../assets/images/grid-images/Frame 1597884871.png';

import nine from '../../../assets/images/grid-images/Frame 1597884867.png';
import ten from '../../../assets/images/grid-images/Frame 1597884856.png';

import eleven from '../../../assets/images/grid-images/Frame 1597884857.png';
import twelve from '../../../assets/images/grid-images/Frame 1597884868.png';

import thirteen from '../../../assets/images/grid-images/Frame 1597884860.png';
import fourteen from '../../../assets/images/grid-images/Frame 1597884852.png';

import fifteen from '../../../assets/images/grid-images/Frame 1597884902.png';
import sixteen from '../../../assets/images/grid-images/Frame 1597884859.png';

import seventeen from '../../../assets/images/grid-images/17.png';
import eighteen from '../../../assets/images/grid-images/18.png';

import nineteen from '../../../assets/images/grid-images/19.png';
import twenty from '../../../assets/images/grid-images/Frame 1597884853.png';

import twentyone from '../../../assets/images/grid-images/Frame 1597884903.png';
import twentytwo from '../../../assets/images/grid-images/Frame 1597884906.png';

import twentythree from '../../../assets/images/grid-images/Frame 1597884905.png';
import twentyfour from '../../../assets/images/grid-images/Frame 1597884872.png';


const importImages = {
  one: one,
  two: two,
  three: three,
  four: four,
  five: five,
  six: six,
  seven: seven,
  eight: eight,
  nine: nine,
  ten: ten,
  eleven: eleven,
  twelve: twelve,
  thirteen: thirteen,
  fourteen: fourteen,
  fifteen: fifteen,
  sixteen: sixteen,
  seventeen: seventeen,
  eighteen: eighteen,
  nineteen: nineteen,
  twenty: twenty,
  twentyone: twentyone,
  twentytwo: twentytwo,
  twentythree: twentythree,
  twentyfour: twentyfour,
};

const ImageRow = React.memo(({ images, direction }) => (
  <div className={`flex whitespace-nowrap ${direction === 'right' ? 'animate-marquee-right' : 'animate-marquee-left'}`}>
    {[...images, ...images].map((img, index) => (
      <div key={index} className="inline-block">
        <div className="w-48 h-48 overflow-hidden">
          <img
            src={img}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    ))}
  </div>
));

ImageRow.displayName = 'ImageRow';

const SlidingImages = () => {
  const imageRows = useMemo(() => {
    const images = Object.values(importImages);
    return [
      images.slice(0, 8),
      images.slice(8, 16),
      images.slice(16, 24)
    ];
  }, []);

  const redistributedRows = useMemo(() => {
    const allImages = imageRows.flat();
    const halfLength = Math.ceil(allImages.length / 2);
    return [
      allImages.slice(0, halfLength),
      allImages.slice(halfLength)
    ];
  }, [imageRows]);

  return (
    <div className="w-full overflow-hidden">
      <div className="hidden xl:block">
        {redistributedRows.map((row, index) => (
          <ImageRow
            key={`redistributed-${index}`}
            images={row}
            direction={index % 2 === 0 ? 'right' : 'left'}
          />
        ))}
      </div>

      <div className="block xl:hidden">
        {imageRows.map((row, index) => (
          <ImageRow
            key={`regular-${index}`}
            images={row}
            direction={index % 2 === 0 ? 'right' : 'left'}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(SlidingImages);