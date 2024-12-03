import React from 'react';

import fourteen from '../../../assets/images/grid-images/Frame 1597884852.png';
import twenty from '../../../assets/images/grid-images/Frame 1597884853.png';
import six from '../../../assets/images/grid-images/Frame 1597884854.png';
import ten from '../../../assets/images/grid-images/Frame 1597884856.png';
import eleven from '../../../assets/images/grid-images/Frame 1597884857.png';
import sixteen from '../../../assets/images/grid-images/Frame 1597884859.png';
import thirteen from '../../../assets/images/grid-images/Frame 1597884860.png';
import four from '../../../assets/images/grid-images/Frame 1597884863.png';
import seven from '../../../assets/images/grid-images/Frame 1597884864.png';
import nine from '../../../assets/images/grid-images/Frame 1597884867.png';
import twelve from '../../../assets/images/grid-images/Frame 1597884868.png';
import eight from '../../../assets/images/grid-images/Frame 1597884871.png';
import twentyfour from '../../../assets/images/grid-images/Frame 1597884872.png';
import two from '../../../assets/images/grid-images/Frame 1597884897.png';
import five from '../../../assets/images/grid-images/Frame 1597884899 (1).png';
import one from '../../../assets/images/grid-images/Frame 1597884900.png';
import seventeen from '../../../assets/images/grid-images/17.png';
import nineteen from '../../../assets/images/grid-images/19.png';
import fifteen from '../../../assets/images/grid-images/Frame 1597884902.png';
import twentyone from '../../../assets/images/grid-images/Frame 1597884903.png';
import twentythree from '../../../assets/images/grid-images/Frame 1597884905.png';
import twentytwo from '../../../assets/images/grid-images/Frame 1597884906.png';
import three from '../../../assets/images/grid-images/Frame_1597884861-removebg-preview.png';
import eighteen from '../../../assets/images/grid-images/18.png';

const images = [
  [one, two, three, four, five, six, seven, eight],
  [nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen],
  [seventeen, eighteen, nineteen, twenty, twentyone, twentytwo, twentythree, twentyfour],
];

const SlidingImages = () => {
  return (
    <div className="w-full overflow-hidden">
      {images.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex whitespace-nowrap ${rowIndex % 2 === 0 ? 'animate-marquee-right' : 'animate-marquee-left'}`}
        >
          {[...row, ...row].map((img, imgIndex) => (
            <div key={imgIndex} className="inline-block">
              <div className="w-48 h-48 overflow-hidden">
                <img
                  src={img}
                  alt={`Slide ${imgIndex}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SlidingImages;
