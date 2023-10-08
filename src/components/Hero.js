import React, { useEffect } from 'react'
import {
    MagnifyingGlassIcon
  } from '@heroicons/react/24/outline'
import Card from './Card'
import { useState } from 'react';
import Recent from './Recent';
import Hits from './Hits';

const Hero = () => {
  const clientId = "6016518b59b64013b45da4e61855c839";
  const clientSecret = "e3970216ec23416c8cc37d6577a1cc22";

  const [search, setSearch] = useState("");
  const [keepSearch, setKeepSearch] = useState([]);
  const [accessToken, setAccessToken] = useState("");

  useEffect(() => {
    // api access token
    var authparams = {
      method:'POST',
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id='+clientId+'&client_secret='+clientSecret,
    }

    fetch("https://accounts.spotify.com/api/token", authparams)
    .then(res=> res.json())
    .then(data => setAccessToken(data.access_token));
  }, []);
  


  // parameters for the track and albums-------------
  var trackparams = {
      method: 'GET',
      headers:{
        'Content-Type':'application/json',
        'Authorization': 'Bearer '+ accessToken
      }
    }


  

  const funSearch = async()=>{
    
    // trackId---------------
    const trackId = await fetch("https://api.spotify.com/v1/search?q="+search+"&type=album%2Ctrack",trackparams)
    .then(res => res.json())
    .then(data => {
      console.log(data.tracks.items[0].id)
    });
  }




  return (
    <>
        <div className="container mx-auto px-4 relative">
            <div className="px-4 py-2 h-15 bg-blue-gray-600 text-white rounded-md flex items-center justify-end gap-2">
                <input type="text" className="w-full bg-transparent focus:border-b-2 outline-none" placeholder='Search Here'
                value={search}
                  onChange={(e)=>{
                    setSearch(e.target.value);
                  }}
                  onKeyDown={(e)=>{
                    if(e.key == "Enter"){
                      funSearch();
                    }
                  }}
                />
                <button onClick={funSearch}>
                    <MagnifyingGlassIcon className="h-6"/>
                </button>
            </div>
            {search.length != 0 && (
              <div className='w-11/12 max-h-52 overflow-y-auto bg-gray-50 mt-2 p-1 rounded-md absolute shadow-lg flex flex-col gap-1'>
                <p className="py-1 px-2 bg-orange-200">A</p>
                <p className="py-1 px-2 bg-orange-200">A</p>
                <p className="py-1 px-2 bg-orange-200">A</p>
                
              </div>
            )}
            <Recent/>
            <Hits/>
            <Card/>
        </div>
    </>
  )
}

export default Hero