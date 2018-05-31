import React from "react";
import { LinearProgress } from "@material-ui/core"

const styles = {
  loader: {
    height: "2px",
    flexGrow: 1
  }
}

const Loader = () => {
  return (
    <LinearProgress style={styles.loader} />
  );
}

export default Loader;
