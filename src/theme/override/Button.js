// ----------------------------------------------------------------------

export default function Button(theme) {
  return {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          padding: "7px 15px",
          border: "1px solid #4640DE",
          borderRadius: "8px",
          fontSize: "15px"
        },
        outlinedPrimary: {
          padding: "5px 15px",
          border: "1px solid #4640DE",
          borderRadius: "8px",
          fontSize: "15px",
          fontWeight: 700,
        },
        outlinedError: {
          padding: "5px 15px",
          border: "1px solid #E31D1C",
          borderRadius: "8px",
          fontSize: "15px",
          fontWeight: 700,
        }
      }
    },
  };
}
