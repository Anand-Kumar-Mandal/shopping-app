import React, { useState } from "react";
import { ButtonGroup,Button } from '@mui/material'
import { SearchRounded } from "@mui/icons-material";
import './search-component.css';
import { useNavigate } from "react-router-dom";
export function SearchComponent() {
    const [input, setInput] = useState('');
    const navigate = useNavigate();
    function handleInput(e) {
        setInput(e.target.value)
    }
    function SearchButton() {
        if (input == 'mens') {
            navigate("/category/men's clothing");
        }
        else if (input == 'womens') {
            navigate("/category/women's clothing");
        }
        else if (input == 'jewelery') {
            navigate("/category/jewelery");
        }
        else if (input == 'electronics') {
            navigate("/category/electronics");
        }
        else {
            setInput("Not found")
       }
    }

    return (
        <div className="center">
            <ButtonGroup >
                <input id='inputBox' placeholder="search by category..." type='text' onChange={handleInput} />
                
                <Button id='btn' onClick={SearchButton}><SearchRounded id='icon'/></Button>
            </ButtonGroup>
            <div>Search only mens, womens, jewelery, electronics  </div>
            <div className="error">
                {input}
            </div>
        </div>
    )
}
