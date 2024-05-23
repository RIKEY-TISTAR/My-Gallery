"use client";
import GlobalApi from '@/utils/GlobalApi';
import React, { useEffect, useState } from 'react';

const usePriseces = () => {
    const [prisecesList, setPrisecesList] = useState([]);

    useEffect(() => {
      getPrise();
    },[]);
  
    const getPrise = () => {
      GlobalApi.getPrise().then(resp => {
        console.log(resp.data.data);
        setPrisecesList(resp.data.data);
      });
    }

    return prisecesList;
}

export default usePriseces;