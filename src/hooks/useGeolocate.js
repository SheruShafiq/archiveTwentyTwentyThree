import { useEffect, useState } from 'react';

const useGeolocate = ({ postalCode, houseNumber }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!postalCode || !houseNumber) return;
    const fetchData = async () => {
      try {
        const response = await fetch(
          "/api/address/geocode?" +
            new URLSearchParams({
              postal_code: postalCode,
              housenumber: houseNumber,
            }),
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if( !response.ok ) {
          throw new Error(response.statusText);
        }

        const data = await response.json()
        setData([
          parseFloat(data.latitude),
          parseFloat(data.longitude),
        ]);
      } catch (error) {
        console.error(error);
        setError(error);
      }
      setLoading(false);
    }
    fetchData();
  }, [houseNumber, postalCode]);

  return {
    data,
    error,
    loading
  }
}

export default useGeolocate;
