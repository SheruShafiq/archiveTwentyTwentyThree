import { useRef, useState } from "react";

import {
  Box,
  Button,
  Divider,
  LinearProgress,
} from "@mui/material";

import ButtonIcon from "@mui/icons-material/Search";

import DatePicker from "@/components/DatePicker";
import InputField from "@/components/InputField";

import PageHeading from "@/components/PageHeading";

import StartSearch from './StartSearch';
import Results from "./Results";
import NoResults from "./NoResults";

import { useWindowSize } from 'usehooks-ts'

const Search = () => {
  const { width } = useWindowSize();
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const lastNameInputRef = useRef();
  const postalCodeInputRef = useRef();
  const houseNumberInputRef = useRef();
  const customerNumberInputRef = useRef();
  const birthdateInputRef = useRef();
  const policyNumberInputRef = useRef();

  const searchHandler = async () => {
    const fields = {
      last_name: lastNameInputRef.current?.value,
      postal_code: postalCodeInputRef.current?.value,
      house_number: houseNumberInputRef.current?.value,
      customer_number: customerNumberInputRef.current?.value,
      birthdate: birthdateInputRef.current?.value,
      policy_number: policyNumberInputRef.current?.value,
    }

    const searchParams = Object.entries(fields).reduce((a,[k,v]) => (v ? (a[k]=v, a) : a), {})

    setLoading(true);
    const response = await fetch('/api/relations/search?' + new URLSearchParams(searchParams));
    const data = await response.json();
    setSearchResults(data)
    setLoading(false);
  };

  return (
    <>
      <PageHeading
        subtitle={"Portefeuille"}
        title={"Zoeken klant"}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          width: "100%",
        }}
      >
        {width <= 900 && width >= 600 ? (
          <Box display={"flex"}>
            <Box
              display={"flex"}
              flex={1}
              flexDirection={"column"}
              paddingRight={"1rem"}
            >
              <InputField
                ref={lastNameInputRef}
                label="Achternaam"
              />

              <InputField
                ref={policyNumberInputRef}
                label="Polisnummer"
              />
              <DatePicker
                ref={birthdateInputRef}
                label="Geboortedatum"
              />
            </Box>
            <Box display={"flex"} flex={1} flexDirection={"column"}>
              <Box display={"flex"} flexDirection={"row"}>
                <InputField
                  ref={postalCodeInputRef}
                  label="Postcode"
                  style={{ flex: 2 }}
                />
                <InputField
                  ref={houseNumberInputRef}
                  label="Huisn."
                  style={{ flex: 1 }}
                />
              </Box>
              <InputField
                ref={customerNumberInputRef}
                label="Klantnummer"
              />
              <Box alignSelf={"flex-end"}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={searchHandler}
                  sx={{
                    width: "9rem",
                    alignSelf: "flex-end",
                  }}
                >
                  Zoeken
                </Button>
                {loading && (
                  <LinearProgress
                    variant="query"
                    color="info"
                    sx={{
                      position: "relative",
                      width: "9rem",
                      py: "1.03rem",
                      top: "-2.3rem",
                      left: "0",
                      borderRadius: "0.3rem",
                      opacity: 0.5,
                    }}
                  />
                )}
              </Box>
            </Box>
          </Box>
        ) : (
          <Box
            display={"flex"}
            flexDirection={"column"}
            width={{ xs: "100%", md: "15.75rem" }}
            bgcolor={"#fff"}
            zIndex={"10"}
          >
            <InputField
              ref={lastNameInputRef}
              label="Achternaam"
            />
            <Box
              display={"flex"}
              flexDirection={{
                xs: "column",
                md: "row",
              }}
            >
              <InputField
                ref={postalCodeInputRef}
                label="Postcode"
                style={{ flex: 2 }}
              />
              <InputField
                ref={houseNumberInputRef}
                label="Huisn."
                style={{ flex: 1 }}
              />
            </Box>
            <InputField
              ref={customerNumberInputRef}
              label="Klantnummer"
            />
            <DatePicker
              ref={birthdateInputRef}
              label="Geboortedatum"
            />
            <InputField
              ref={policyNumberInputRef}
              label="Polisnummer"
            />

            <Box>
              <Button
                variant="contained"
                color="primary"
                startIcon={<ButtonIcon />}
                onClick={searchHandler}
                sx={{
                  width: "9rem",
                  alignSelf: "flex-end",
                }}
              >
                Zoeken
              </Button>
              {loading && (
                <LinearProgress
                  variant="query"
                  color="info"
                  sx={{
                    position: "relative",
                    width: "9rem",
                    py: "1.03rem",
                    top: "-2.3rem",
                    left: "0",
                    borderRadius: "0.3rem",
                    opacity: 0.5,
                  }}
                />
              )}
            </Box>
          </Box>
        )}

        <Box
          display={"flex"}
          flexDirection={"column"}
          flexGrow={1}
          alignItems={"center"}
          paddingLeft={{ xs: "0", md: "2rem" }}
          paddingTop={{ xs: "2rem", md: "0" }}
        >
          {searchResults.length === 0 && (
            <StartSearch />
          )}
          {searchResults.length === 0 && <NoResults />}
          {searchResults.length > 0 && (
            <Results data={searchResults} />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Search;
