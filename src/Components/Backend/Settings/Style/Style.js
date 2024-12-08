import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  AnglePickerControl,
  AlignmentMatrixControl,
  __experimentalBorderControl as BorderControl,
  __experimentalBorderBoxControl as BorderBoxControl,
  __experimentalBoxControl as BoxControl,
  CheckboxControl,
  ClipboardButton,
  ColorPalette,
  ColorPicker,ComboboxControl
} from "@wordpress/components";
import { useState } from "react";

// BorderBoxControl
const borderColors = [
  { name: "Red 20", color: "#e67373" },
  { name: "Green 20", color: "#72e673" },
];

//BorderControl
const colors = [{ name: "Blue 20", color: "#72aee6" }];

// ComboboxControl
const options = [
  {
      value: 'small',
      label: 'Small',
  },
  {
      value: 'normal',
      label: 'Normal',
  },
  {
      value: 'large',
      label: 'Large',
  },
];

const Style = () => {
  const [angle, setAngle] = useState(0);
  // console.log("AnglePickerControl:", angle);

  // AlignmentMatrixControl
  const [alignment, setAlignment] = useState("center center");
  // console.log("AlignmentMatrixControl:", alignment);

  //BorderBoxControl
  const defaultBorder = {
    color: "#72aee6",
    style: "dashed",
    width: "1px",
  };
  const [borders, setBorders] = useState({
    top: defaultBorder,
    right: defaultBorder,
    bottom: defaultBorder,
    left: defaultBorder,
  });
  const onChange = (newBorders) => setBorders(newBorders);
  // console.log("BorderBoxControl : ", borders);

  //BorderControl
  const [border, setBorder] = useState({ color: "#0000FF" });
  // console.log("BorderControl:", border);

  //BoxControl
  const [values, setValues] = useState({
    top: "50px",
    left: "10%",
    right: "10%",
    bottom: "50px",
  });
  // console.log("BoxControl :", values);

  // part2
  // CheckboxControl
  const [isChecked, setChecked] = useState(true);
  console.log("CheckboxControl:", isChecked);

  //ClipboardButton
  const [hasCopied, setHasCopied] = useState(false);
  console.log("ClipboardButton:", hasCopied);

  //ColorPalette
  const [color, setColor] = useState("#f00");
  const colorsPalette = [
    { name: "red", color: "#f00" },
    { name: "white", color: "#fff" },
    { name: "blue", color: "#00f" },
  ];
  console.log("ColorPalette", color);

  // colorPicker
  const [colorPicker, setColorPicker] = useState();
  console.log("colorPicker: ",colorPicker);

// ComboboxControl
const [ fontSize, setFontSize ] = useState();
const [ filteredOptions, setFilteredOptions ] = useState( options );
console.log("ComboboxControl:",  fontSize);


  return (
    <>
      <PanelBody
        className="bPlPanelBody"
        title={__("Color Picker", "b-blocks")}
        initialOpen={false}
      >
        {/* AnglePickerControl  */}
        <AnglePickerControl value={angle} onChange={setAngle} />

        {/* AlignmentMatrixControl */}
        <AlignmentMatrixControl value={alignment} onChange={setAlignment} />
      </PanelBody>

      {/*BorderControl */}
      <BorderControl
        __next40pxDefaultSize
        colors={colors}
        label={__("Border")}
        onChange={setBorder}
        value={border}
      />

      {/* BorderBoxControl */}
      <BorderBoxControl
        __next40pxDefaultSize
        borderColors={borderColors}
        label={__("Borders")}
        onChange={onChange}
        value={borders}
      />

      {/*BoxControl   */}
      <BoxControl __next40pxDefaultSize values={values} onChange={setValues} />

      {/* PART 2 */}
      {/* CheckboxControl */}

      <CheckboxControl
        __nextHasNoMarginBottom
        label="Is author"
        help="Is the user a author or not?"
        checked={isChecked}
        onChange={setChecked}
      />

      {/*ClipboardButton  */}
      <ClipboardButton
        variant="primary"
        text="Text to be copied."
        onCopy={() => setHasCopied(true)}
        onFinishCopy={() => setHasCopied(false)}
      >
        {hasCopied ? "Copied!" : "Copy Text"}
      </ClipboardButton>

      {/* ColorPalette  */}
      <ColorPalette
        colorsPalette={colorsPalette}
        value={color}
        onChange={(color) => setColor(color)}
      />

      {/* ColorPicker */}
      <ColorPicker
        ColorPicker={ColorPicker}
        onChange={setColorPicker}
        enableAlpha
        defaultValue="#000"
      />

     {/* ComboboxControl */}
        <ComboboxControl
            __next40pxDefaultSize
            __nextHasNoMarginBottom
            label="Font Size"
            value={ fontSize }
            onChange={ setFontSize }
            options={ filteredOptions }
            onFilterValueChange={ ( inputValue ) =>
                setFilteredOptions(
                    options.filter( ( option ) =>
                        option.value === inputValue
                    )
                )
            }
        />

      
    </>
  );
};

export default Style;
