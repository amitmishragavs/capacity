import { useEffect, useState } from "react";

export function useCurrentLocation() {
    const [location, setLocation] = useState({
      lat: 40,
      lng: -73
    });

    useEffect(()=>{
      
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(({coords})=>{
                if(coords){
                    const {latitude, longitude} = coords;
                    console.log(coords,latitude,longitude)
                    setLocation({lat:latitude,lng:longitude})
                }
              });
            } else {
                // console.log("failed")
            //   x.innerHTML = "Geolocation is not supported by this browser.";
            }
          
    },[])



    return location;
}