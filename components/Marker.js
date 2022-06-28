import { useState, useEffect } from "react"

export const Marker = (options) => {
  const [marker, setMarker] = useState();

  useEffect(() => {
    if (!marker) {
      setMarker(new google.maps.Marker());
    }

    // remove marker from map on unmount
    return () => {
      if (marker) {
        marker.setMap(null);
      }
    };
  }, [marker])

  useEffect(() => {
    if (marker) {
      marker.setOptions(options)
      // marker.gm_bindings_.position = position
    }
  }, [marker, options])

  return null
}