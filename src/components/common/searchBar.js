import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { Paper, TextField } from "@material-ui/core/";
import { Search as SearchIcon } from "@material-ui/icons";
import { Clear as ClearIcon } from "@material-ui/icons";
import Loader from "./loader";

const styles = {
    searchContainer: {
        width: "98%",
        minHeight: "40px",
        padding: "10px",
        margin: "auto",
        textAlign: "center",
    },
    searchField: {
        width: "92%",
        fontSize: "3em"
    },
    inlineIcon: {
        position: "relative",
        top: "5px",
        left: "-15px",
        fontSize: "1em",
        margin: 0
    },
    inlineIconDisabled: {
        position: "relative",
        top: "5px",
        left: "-15px",
        fontSize: "1em",
        margin: 0,
        color:'grey'
    },
    searchButton: {
        position: "relative",
        top: "-5px",
        margin: 0
    }

};

class SearhBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: ""
        };
    }

    handleChange = (event) => {
        const { value } = event.target;
        this.setState({
            value
        });
    }

    clearSearch = () => {
        if(!this.props.isLoading){
        this.setState({
            value: ""
        });}
    }

    search = () => {
        if (!(this.state.value && this.props.onSearch)) {
            return;
        }
        this.props.onSearch(this.state.value);
    }

    render() {
        const shouldSearchDisabled = !this.state.value || this.props.isLoading;
        const renderClearButton = !(!this.state.value);
        return (
            <Paper variant="raised">
                <div style={styles.searchContainer}>
                    <TextField
                        label={this.props.label || "Search"}
                        id="searchfield"
                        style={styles.searchField}
                        value={this.state.value}
                        onChange={this.handleChange}
                        disabled={this.props.isLoading}
                    />
                    {
                        renderClearButton && (
                            <ClearIcon
                                style={this.props.isLoading ? styles.inlineIconDisabled : styles.inlineIcon}
                                onClick={this.clearSearch}
                            />
                        )
                    }
                    <Button
                        variant="raised"
                        color={"primary"}
                        onClick={this.search}
                        disabled={shouldSearchDisabled}
                        style={styles.searchButton}
                    >
                        <SearchIcon />
                    </Button>
                </div>
                <div>
                    {
                        this.props.isLoading && (
                            <Loader />
                        )
                    }
                </div>
            </Paper>
        );
    }
};

export default SearhBar;