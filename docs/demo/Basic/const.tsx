import React from 'react';
import { IStep } from '../../../src/typings/guide';
import img1 from './img/1.jpeg';
import img2 from './img/2.jpeg';
import img3 from './img/3.jpeg';
import img4 from './img/4.jpeg';

export const ITEMS = [
  {
    title: 'Bunny',
    media: img1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  },
  {
    title: 'Koala',
    media: img2,
    text: 'Etiam sit amet tortor aliquet, sodales tellus eu, porttitor purus.',
  },
  {
    title: 'Lamb',
    media: img3,
    text: 'Donec euismod arcu et lacinia consequat. ',
  },
  {
    title: 'Seagull',
    media: img4,
    text: 'Sed et ex quam. ',
  },
];

export const STEPS: IStep[] = [
  {
    selector: '#Koala-media',
    title: '树赖',
    content: (
      <div style={{ color: 'red' }}>
        形状略似猴，动作迟缓，常用爪倒挂在树枝上数小时不移动，故称之为树懒
      </div>
    ),
    placement: 'left',
  },
  {
    selector: '#Lamb-title',
    title: '绵羊',
    content:
      '绵羊性温顺，胆小，行动缓慢。利用这一特性，可以训练羊群听从指挥，便于放牧管理',
    placement: 'right-top',
  },
  {
    selector: '#Seagull-text',
    title: 'Seagull',
    content: 'Curabitur suscipit tincidunt mauris placerat semper. ',
    placement: 'left-bottom',
  },
  {
    selector: '#gallery-title',
    title: 'Intro',
    content: 'Fusce nec arcu justo.',
    placement: 'left',
  },
  {
    selector: '#gallery-footer',
    title: '我是最一步啦',
    content: '感谢您的宝贵的时间',
    placement: 'right',
  },
];
