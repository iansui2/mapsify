import { useState, useEffect } from 'react'
import { Box, Center, Spinner } from '@chakra-ui/react'
import { Wrapper, Status } from "@googlemaps/react-wrapper"
import { Marker } from '../components/Marker'
import { MyMapComponent } from '../components/MyMapComponent'
import { AppLayout } from '../layouts/AppLayout'

export default function Home() {
  const [position, setPosition] = useState({ lat: 14.582919, lng: 120.979683 });

  useEffect(() => {
    if (typeof window !== 'undefined' && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  const render = (status) => {
    switch (status) {
      case Status.LOADING:
        return (
          <Center minHeight="100vh">
            <Spinner size='xl' />
          </Center>
        );      
      case Status.SUCCESS:
        return <MyMapComponent />
    }
  }

  return (
    <AppLayout>
      <Box>
        <Wrapper apiKey='AIzaSyD6AUPIR0eIiGldIIo0b06uqLxlZDyQh-I' render={render}>
          <MyMapComponent position={position}>
            <Marker position={position} />
          </MyMapComponent>
        </Wrapper>
      </Box>
    </AppLayout>
  )  
}
