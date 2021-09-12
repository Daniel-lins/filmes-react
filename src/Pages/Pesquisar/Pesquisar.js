import { TextField } from "@material-ui/core";
import { useState } from "react";

function Pesquisar() {

    const [type, setType] = useState (0);
    return (
        <div>
            
        <TextField
        style={{ flex: 1}}
        className="searchBox"
        label="Search"
        variant="filled"
        // onChange={{e} => setSearchText(e.target.value)}
        />
        </div>
    )
}

export default Pesquisar
