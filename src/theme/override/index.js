import Button from "./Button";
import Typography from "./Typography";
import Container from "./Container";
import CheckBox from "./CheckBox";

// ----------------------------------------------------------------------

export default function ComponentsOverrides(theme) {
    return Object.assign(
        Button(theme),
        Typography(theme),
        Container(theme),
        CheckBox(theme),
    )
}
