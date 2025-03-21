import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

// This function takes a component...
export function asPage(WrappedComponent) {
  return class extends React.Component {
    componentDidMount() {
      document.title = `${this.props.pageName} – TurboVax`;
    }

    render() {
      return (
        <div>
          <Box mb={8}>
            <Typography align="center" component="h2" variant="h3">
              {this.props.pageName}
            </Typography>
          </Box>
          <WrappedComponent />
        </div>
      );
    }
  };
}
