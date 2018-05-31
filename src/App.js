import React, {Component} from "react";
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import "./App.css";
import MovieBrowser from "./components/movie/movieBrowser";

class App extends Component {
    render() {
        return (
            <div className="App">
                <AppBar position="static" color="primary" title="Movie Browser">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Movie Browser
                        </Typography>
                    </Toolbar>
                </AppBar>
                <MovieBrowser/>                
            </div>
        );
    }
}

export default App;