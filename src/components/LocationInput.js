import React from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import { RecipeContext } from "../context";

const LocationInput = () => {
  const context= React.useContext(RecipeContext);


  const [address, setAddress] = React.useState("");
  

  const handleSelect = async value => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    const location= {address: results[0].address_components[0].long_name, city:results[0].address_components[1].long_name };
    
    console.log( location,latLng);
    sessionStorage.setItem("coords", JSON.stringify(latLng));
    sessionStorage.setItem("location",JSON.stringify(location));
    
  };

  return (
    <PlacesAutocomplete
      value={address}
      onChange={setAddress}
      onSelect={handleSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
        <div className="input-place">
          <input {...getInputProps({ placeholder: "1 Example Street" })} />
          <div>
            {loading ? <div>...loading</div> : null}

            <div className="place-results">
              {suggestions.map(suggestion => {
                const style = {
                  backgroundColor: suggestion.active ? "#41b6e6" : "#fff"
                };
                
                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </PlacesAutocomplete>
  );
};

export default LocationInput;
