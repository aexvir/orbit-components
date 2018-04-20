// @flow

import * as React from "react";
import { darken } from "polished";
import * as tokens from "orbit-design-token";

import { Check } from "../icons";

type Props = {
  label: string,
  name: string,
  value: string,
  error: boolean,
  disabled: boolean,
  checked: boolean,
  onChange: (SyntheticEvent<HTMLInputElement>) => any,
};

const CheckBox = (props: Props) => {
  const { label, name, value, error, disabled, checked, onChange } = props;

  const borderColor =
    error && !disabled && !checked ? tokens.borderColorInputError : tokens.borderColorInput;
  const iconColor = disabled ? tokens.colorIconCheckboxDisabled : tokens.colorIconCheckbox;

  return (
    <label htmlFor={name}>
      <input
        id={name}
        value={value || ""}
        type="checkbox"
        name={name}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      <span className="checkBox">
        <span className="glyph">
          <Check size="16px" color={iconColor} className="CheckIcon" />
        </span>
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
        input[type="checkbox"] {
          visibility: hidden;
          display: none;
        }
        .checkBox {
          position: relative;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: ${tokens.backgroundInput};
          height: ${tokens.heightCheckbox};
          width: ${tokens.widthCheckbox};
          border-radius: ${tokens.borderRadiusNormal};
          overflow: hidden;
          border: 1px solid ${borderColor};
          transform: scale(1);
          transition: all ${tokens.durationFast} linear;
        }
        .checkBox .glyph {
          visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        input[type="checkbox"]:checked + .checkBox .glyph {
          visibility: visible;
        }

        label:hover .checkBox {
          border-color: ${!disabled
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
        input[type="checkbox"]:checked ~ .labelText {
          font-weight: ${tokens.fontWeightMedium};
        }
        label:active .checkBox {
          border-color: ${disabled
            ? borderColor
            : darken(tokens.modifierDarkenActive, tokens.borderColorInput)};
          ${!disabled ? `transform: scale(${tokens.modifierScaleButtonActive})` : ""};
        }
        label:focus {
          outline-width: 3px;
        }
      `}</style>
    </label>
  );
};

CheckBox.defaultProps = {
  error: false,
  disabled: false,
  checked: false,
};

export default CheckBox;
