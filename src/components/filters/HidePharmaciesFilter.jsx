import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";

export default function CheckboxLabels(props) {
  const pharmacyLabel = `Hide pharmacies (Educators, 50+, and those underlying conditions)`;

  return (
    <Box p={2}>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={props.hidePharmacies}
              onChange={props.handleHidePharmaciesChange}
              name="hidePharmacies"
              color="primary"
            />
          }
          label={pharmacyLabel}
        />
      </FormGroup>
    </Box>
  );
}
