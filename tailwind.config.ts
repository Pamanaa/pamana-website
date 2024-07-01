import type { Config } from "tailwindcss";
import type { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: ['"Dongle"', 'sans-serif'],
        serif: ['"Cormorant SC"', 'serif'],
      },
      screens: {
      xs: '375px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
      colors:{
        'brown': '#7a4424',
        'light-brown': '#aa7b62',
        'beige': '#f8efd0',
        'aqua': '#468ea0',
        'green': '#8dbc83',
        'light': '#fefff3',
      }
    },
  },
  plugins: [
    function ({ addUtilities }: PluginAPI) {
      const newUtilities = {
        '.dongle-header-active':{
          fontSize: '2.5rem',
          fontWeight: '400',
          fontFamily: '"Dongle", sans-serif',
        },
        '.dongle-header-regular':{
          fontSize: '2.5rem',
          fontWeight: '300',
          fontFamily: '"Dongle", sans-serif',
        },
        '.dongle-h1-regular': {
          fontSize: '3.75rem',
          fontWeight: '400',
          fontFamily: '"Dongle", sans-serif',
        },
        '.dongle-h1-light': {
          fontSize: '3.75rem',
          fontWeight: '300',
          fontFamily: '"Dongle", sans-serif',
        },
        '.dongle-h1-bold': {
          fontSize: '3.75rem',
          fontWeight: '700',
          fontFamily: '"Dongle", sans-serif',
        },
        '.dongle-h2-regular': {
          fontSize: '3rem',
          fontWeight: '400',
          fontFamily: '"Dongle", sans-serif',
        },
        '.dongle-h2-light': {
          fontSize: '3rem',
          fontWeight: '300',
          fontFamily: '"Dongle", sans-serif',
        },
        '.dongle-h2-bold': {
          fontSize: '3rem',
          fontWeight: '700',
          fontFamily: '"Dongle", sans-serif',
        },
        '.dongle-h3-regular': {
          fontSize: '2.5rem',
          fontWeight: '400',
          fontFamily: '"Dongle", sans-serif',
        },
        '.dongle-h3-light': {
          fontSize: '2.5rem',
          fontWeight: '300',
          fontFamily: '"Dongle", sans-serif',
        },
        '.dongle-h3-bold': {
          fontSize: '2.5rem',
          fontWeight: '700',
          fontFamily: '"Dongle", sans-serif',
        },
        '.dongle-body-regular': {
          fontSize: '1.25rem',
          fontWeight: '400',
          fontFamily: '"Dongle", sans-serif',
        },
        '.dongle-body-light': {
          fontSize: '1.25rem',
          fontWeight: '300',
          fontFamily: '"Dongle", sans-serif',
        },
        '.dongle-body-bold': {
          fontSize: '1.25rem',
          fontWeight: '700',
          fontFamily: '"Dongle", sans-serif',
        },
        '.dongle-caption-regular': {
          fontSize: '1rem',
          fontWeight: '400',
          fontFamily: '"Dongle", sans-serif',
        },
        '.dongle-caption-light': {
          fontSize: '1rem',
          fontWeight: '300',
          fontFamily: '"Dongle", sans-serif',
        },
        '.dongle-caption-bold': {
          fontSize: '1rem',
          fontWeight: '700',
          fontFamily: '"Dongle", sans-serif',
        },
        '.ephesis-t1':{
          fontSize: '8.25rem',
          fontFamily: '"Ephesis", sans-serif',
        },
        '.ephesis-h1':{
          fontSize: '3.75rem',
          fontFamily: '"Ephesis", sans-serif',
        },
        '.ephesis-h2':{
          fontSize: '3rem',
          fontFamily: '"Ephesis", sans-serif',
        },
        '.cormorant-sc-t1-regular': {
          fontSize: '8.25rem',
          fontWeight: '300',
          fontFamily: '"Cormorant SC", serif',
        },
        '.cormorant-sc-t1-bold': {
          fontSize: '8.25rem',
          fontWeight: '700',
          fontFamily: '"Cormorant SC", serif',
        },
        '.cormorant-sc-t2-regular': {
          fontSize: '96px',
          fontWeight: '300',
          fontFamily: '"Cormorant SC", serif',
        },
        '.cormorant-sc-t2-bold': {
          fontSize: '6rem',
          fontWeight: '700',
          fontFamily: '"Cormorant SC", serif',
        },
        '.cormorant-sc-t3-regular': {
          fontSize: '4rem',
          fontWeight: '300',
          fontFamily: '"Cormorant SC", serif',
        },
        '.cormorant-sc-t3-bold': {
          fontSize: '4rem',
          fontWeight: '700',
          fontFamily: '"Cormorant SC", serif',
        },
        '.cormorant-sc-t4-regular': {
          fontSize: '2.25rem',
          fontWeight: '300',
          fontFamily: '"Cormorant SC", serif',
        },
        '.cormorant-sc-t4-bold': {
          fontSize: '2.25rem',
          fontWeight: '700',
          fontFamily: '"Cormorant SC", serif',
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
export default config;
