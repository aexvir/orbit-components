// @flow

import * as React from "react";
import { darken } from "polished";
import * as tokens from "orbit-design-token";

type Props = {
  name: string,
  label: string,
  value: string,
  error?: boolean,
  disabled: boolean,
  checked?: boolean,
  onChange: (SyntheticEvent<HTMLInputElement>) => any,
};

const RadioButton = (props: Props) => {
  const { name, label, value, error, disabled, checked, onChange } = props;

  let borderColor = tokens.borderColorInput;
  let iconColor = tokens.colorIconRadioButton;

  if (error && !disabled && !checked) {
    borderColor = tokens.borderColorInputError;
  } else if (disabled) {
    iconColor = tokens.colorIconRadioButtonDisabled;
  }
  return (
    <label htmlFor={value}>
      <input
        id={value}
        value={value}
        type="radio"
        name={name}
        disabled={disabled}
        checked={checked && "checked"}
        onChange={onChange}
      />
      <span className="radioBox">
        <span className="glyph" />
      </span>
      <span className="labelText">{label}</span>
      <style jsx>{`
        label {
          display: flex;
          flex-direction: row;
          align-items: center;
          height: ${tokens.heightCheckbox};
          opacity: ${disabled ? tokens.opacityCheckboxDisabled : "1"};
          cursor: ${disabled ? "default" : "pointer"};
          position: relative;
        }
        input[type="radio"] {
          visibility: hidden;
          display: none;
        }
        .radioBox {
          position: relative;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${tokens.backgroundInput};
          height: ${tokens.heightCheckbox};
          width: ${tokens.widthCheckbox};
          border-radius: ${tokens.borderRadiusCircle};
          overflow: hidden;
          border: 1px solid ${borderColor};
          transform: scale(1);
          transition: all ${tokens.durationFast} linear;
        }
        .radioBox .glyph {
          visibility: hidden;
          height: ${parseInt(tokens.heightCheckbox, 10) - 8}px;
          width: ${parseInt(tokens.heightCheckbox, 10) - 8}px;
          border-radius: ${tokens.borderRadiusCircle};
          background-color: ${iconColor};
        }
        input[type="radio"]:checked + .radioBox .glyph {
          visibility: visible;
        }
        label:focus {
          outline-width: 0;
        }
        label:focus .radioBox {
          outline-width: 0;
          box-shadow: 0 0 3px rgb(77, 144, 254);
        }
        label:hover .radioBox {
          border-color: ${disabled
            ? tokens.borderColorInput
            : darken(tokens.modifierDarkenHover, tokens.borderColorInput)};
        }
        .labelText {
          font-family: ${tokens.fontFamily};
          font-weight: ${tokens.fontWeightNormal};
          font-size: ${tokens.fontSizeLabelForm};
          color: ${tokens.colorLabelForm};
          margin-left: ${tokens.spaceXSmall};
        }
        input[type="radio"]:checked ~ .labelText {
          font-weight: ${tokens.fontWeightMedium};
        }
        label:active .radioBox {
          border-color: ${disabled
            ? borderColor
            : darken(tokens.modifierDarkenActive, tokens.borderColorInput)};
          ${!disabled ? `transform: scale(${tokens.modifierScaleButtonActive})` : ""};
        }
      `}</style>
    </label>
  );
};

RadioButton.defaultProps = {
  error: false,
  disabled: false,
  checked: false,
};

export default RadioButton;
