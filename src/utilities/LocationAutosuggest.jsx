import React, { useState } from 'react';
import Autosuggest from 'react-autosuggest';
import { useField, useFormikContext } from 'formik';

const LocationAutosuggest = ({ name }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [field, , helpers] = useField(name);
  const { setFieldValue } = useFormikContext();

  const fetchSuggestions = async ({ value }) => {
    if (value.length > 2) {
      try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${value}`);
        const data = await response.json();
        console.log(data)
        setSuggestions(data.map(place => ({
          description: place.display_name,
          placeId: place.place_id,
        })));
      } catch (error) {
        console.error('Error fetching location suggestions:', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    setFieldValue(name, suggestion.description);
  };

  const getSuggestionValue = (suggestion) => suggestion.description;

  const renderSuggestion = (suggestion) => <div>{suggestion.description}</div>;

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={fetchSuggestions}
      onSuggestionsClearRequested={() => setSuggestions([])}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      inputProps={{
        ...field,
        onChange: (_, { newValue }) => helpers.setValue(newValue),
        placeholder: 'Location'
      }}
      onSuggestionSelected={onSuggestionSelected}
    />
  );
};

export default LocationAutosuggest;
