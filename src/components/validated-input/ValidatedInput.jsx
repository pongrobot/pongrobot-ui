import { useCallback, useState } from "react";

import { Keys, NumericInput } from "@blueprintjs/core";

// from https://stackoverflow.com/questions/175739/how-can-i-check-if-a-string-is-a-valid-number
function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

const ValidatedInput = ({ value, onValueChange, min, max, stepSize, minorStepSize, majorStepSize }) => {
    const [internalValue, setInternalValue] = useState(value + "");

    const onValidate = useCallback((newValue) => {
        // Validate and propagate state outside the app.
        // Update external value only if internal value is valid
        if (!isNumeric(newValue)) {
            // reset
            console.log('invalid value');
            setInternalValue(value + "");
        } else {
            console.log('valid value');
            setInternalValue(newValue + "");
            onValueChange(parseFloat(newValue));
        }
    }, [onValueChange, setInternalValue, value]);

    const handleBlur = useCallback((e) => {
        onValidate((e.target).value);
    }, [onValidate]);

    const handleKeyDown = useCallback((e) => {
        if (e.keyCode === Keys.ENTER) {
            onValidate((e.target).value);
        }
    }, [onValidate]);

    const handleValueChange = useCallback((_valueAsNumber, valueAsString) => {
        setInternalValue(valueAsString);
    }, []);

    const onButtonClick = useCallback((_valueAsNumber, valueAsString) => {
        onValidate(valueAsString);
    }, []);

    return (
        <NumericInput
            allowNumericCharactersOnly={false}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            onValueChange={handleValueChange}
            onButtonClick={onButtonClick}
            placeholder="Enter a number or expression..."
            min={min}
            max={max}
            stepSize={stepSize} 
            minorStepSize={minorStepSize}
            majorStepSize={majorStepSize}
            value={internalValue}
        />
    );
}

export default ValidatedInput;