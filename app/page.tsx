'use client'
import React, { useEffect, useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";

import Links from "./components/links/links";

import HomePage from './home/page'

export default function Home() {
  
  return (
    <main  style={{backgroundColor:'#F7F8F9'}} >
      <HomePage/>
    </main>
  );
}
