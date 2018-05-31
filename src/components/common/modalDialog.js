import React, { Component } from "react";
import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";

const styles = {
    content: {
        maxWidth: "100%",
        padding: "2px",
    }
}

class ModalDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: this.props.isOpen,
        };
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.isOpen !== prevState.isOpen) {
            return {
                isOpen: nextProps.isOpen
            };
        }
        return null;
    }

    handleClose = () => {
        this.setState({ isOpen: false });
        this.props.onClose();
    };

    render() {
        const haveContentToRender = !(!this.props.children);
        return (
            <div>
                {
                    haveContentToRender && (
                        <Dialog
                            open={this.state.isOpen}
                            onClose={this.handleClose}
                        >
                            <DialogContent style={styles.content}>
                                {this.props.children}
                            </DialogContent>
                        </Dialog>
                    )
                }
            </div >
        )
    }
}

export default ModalDialog;