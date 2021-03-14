import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// This function takes a component...
export function asPage(WrappedComponent) {
  return class extends React.Component {
    render() {
      return (
        <div>
          <Box mb={5}>
            <Typography component="h1" variant="h4">
              {this.props.pageName}
            </Typography>
          </Box>
          <WrappedComponent />
        </div>
      );
    }
  };
}
