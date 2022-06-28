import { Box } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import { Fragment, Children, cloneElement, isValidElement } from "react";

export const MyMapComponent = ({ children }) => {
  const ref = useRef()
  const [map, setMap] = useState()

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, { center: { lat: 14.582919, lng: 120.979683 }, zoom: 16 }));
    }
  }, [ref, map])

  return (
    <Fragment>
      <Box h="100vh" w="full" ref={ref} />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // set the map prop on the child component
          return cloneElement(child, { map });
        }
      })}
    </Fragment>
  ) 
}