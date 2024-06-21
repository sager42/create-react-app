import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import { styled } from '@mui/system';


const StyledTextField = styled(TextField)`
  
    .MuiInputLabel-root {
    margin-top: 10px; /* Adjust as needed */
  }

`;


export const Searchbar = ({ setRecipes }) => {
  const [query, setQuery] = useState("chicken");
  console.log(query);
  async function fetchRecipes() {
    const response = await fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=9e817bf5&app_key=8ae78a21f708759e41356bd99f9cb5a6`,
      
    );
    const data = await response.json();
    setRecipes(data.hits);
  }

  function handleChange(event) {
    setQuery(event.target.value);
  }

  useEffect(() => {
    // eslint-disable-next-line
    fetchRecipes();
    // eslint-disable-next-line
  }, [query]);

  return (
    <StyledTextField
      label="Search"
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment>
            <IconButton onClick={fetchRecipes}>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
      fullWidth
    />
  );
};
