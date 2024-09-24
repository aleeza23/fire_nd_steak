// src/fonts.js or a similar file for font imports

import { Pirata_One } from 'next/font/google';
import { Rambla } from 'next/font/google';

// Initialize 'Pirata One' font
const pirata_init = Pirata_One({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pirata-one',
});

// Initialize 'Rambla' font
const rambla_init = Rambla({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-rambla',
});

export const pirata = pirata_init.variable;
export const rambla = rambla_init.variable;
