import React, {useState} from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);
    
    function handleDictionaryResponse(response) {
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);
    }

    function search() {
         let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey = 
        "563492ad6f91700001000001e56b4d89891a4598858a322f509c40c6";
        let pexelsApiUrl =
        `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = {"Authorization" : `Bearer ${pexelsApiKey}`};
        axios.get(pexelsApiUrl, { headers: headers}).then(handlePexelsResponse);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange (event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }
    
    if (loaded) {
    return ( <div className="Dictionary">
            <form onSubmit={handleSubmit}>  
                <input type="search" 
                    className="bar"
                    autoFocus={true}
                    onChange={handleKeywordChange} />
                <input type="submit" value="Search🔍" className="btn btn-primary" />
            </form>
        <Results  results={results} />
        <Photos photos={photos} />
    </div>
    );
    } else {
        load();
        return "Loading";
    }
}