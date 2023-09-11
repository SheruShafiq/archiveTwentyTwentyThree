import React from "react";
import { TextField } from "@mui/material";


const InputField = React.forwardRef(({
  label,
  value,
  onChange,
  error,
}, ref) => {
  return (
    <TextField
      inputRef={ref}
      variant="outlined"
      label={label}
      value={value}
      onChange={onChange}
      size="small"
      error={error}
      sx={{
        maxWidth: { xs: "100%", md: "15.75rem" },
        minWidth: "6.125rem",
        pb: "1.5rem",
        pr: "0.5rem",
      }}
      test-id="generic-input-field"
      className="generic-input-field"

      //   placeholder={label}
    />
  );
});
InputField.displayName = "InputField";

export default InputField;
