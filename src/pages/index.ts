/**
 *
 */

import {Detail} from './detail';
import {Home} from './home';

const Stacks = [
  {
    name: 'Home',
    component: Home,
    options: {headerShow: false},
  },
  {
    name: 'Detail',
    component: Detail,
    options: {headerShow: false},
  },
];

export {Stacks};
