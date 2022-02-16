import usePlacesAutoComplete, {
  getGeocode,
  getLatLng, 
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption
} from "@reach/combobox";
import "@reach/combobox/styles.css"

const Search = ({panTo, locationSelector}) => {
  const {
    ready,
    value,
    suggestions: {status, data},
    setValue,
    clearSuggestions
  } = usePlacesAutoComplete({
    requestOptions: {
      location: {lat: () => 45.424721, lng: () => -75.695000},
      radius: 200 * 1000 // 200km  
    }
  })

return (
<div className='search'>

  <Combobox onSelect={async (address) => {

    // put the selected address in the search box after selecting option in dropdown
    setValue(address, false);
    clearSuggestions();

    try {
      const results = await getGeocode({address});
      const {lat, lng} = await getLatLng(results[0]);
      console.log(lat, lng);
      console.log(results[0].formatted_address);
      // pan to lat lng on map after selecting option in dropdown
      panTo({lat, lng});
      locationSelector({lat, lng});
    } catch(error) {
      console.log("error!");
    }
  }}>
    <ComboboxInput
      value={value}
      onChange={(e) => setValue(e.target.value)} 
      disabled={!ready}
      placeholder={"Enter an address"}
      style={{ width: 300, height: 20 }}
    />
    <ComboboxPopover>
      <ComboboxList>
        {status === "OK" && data.map(({id, description}) => <ComboboxOption
          key={id} 
          value={description}
        />)}
      </ComboboxList>
    </ComboboxPopover>
  </Combobox>
</div>
)}

export default Search;