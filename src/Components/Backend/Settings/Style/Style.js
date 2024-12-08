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
  ColorPicker,
  ComboboxControl,
  CustomSelectControl,
  __experimentalDimensionControl as DimensionControl,
  Disabled, TextControl ,Button,DropZone, DropZoneProvider 
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
    value: "small",
    label: "Small",
  },
  {
    value: "normal",
    label: "Normal",
  },
  {
    value: "large",
    label: "Large",
  },
];

//CustomSelectControl
const optionss = [
  {
    key: "small",
    name: "Small",
    style: { fontSize: "50%" },
  },
  {
    key: "normal",
    name: "Normal",
    style: { fontSize: "100%" },
  },
  {
    key: "large",
    name: "Large",
    style: { fontSize: "200%" },
  },
  {
    key: "huge",
    name: "Huge",
    style: { fontSize: "300%" },
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
  console.log("colorPicker: ", colorPicker);

  // ComboboxControl
  const [fontSize, setFontSize] = useState();
  const [filteredOptions, setFilteredOptions] = useState(options);
  console.log("ComboboxControl:", fontSize);

  //CustomSelectControl
  const [selectedItem, setSelectedItem] = useState(options[0]);

  const handleChange = (newItem) => {
    setSelectedItem(newItem);
  };
  console.log("CustomSelectControl:", selectedItem);

  //DimensionControl
  const [paddingSize, setPaddingSize] = useState("");
  console.log("DimensionControl:",paddingSize);

  // Disabled
  const [ isDisabled, setIsDisabled ] = useState( true );
  console.log("isDisabled :", Disabled);

  const input = (
    <TextControl
        __next40pxDefaultSize
        __nextHasNoMarginBottom
        label="Input"
        onChange={(value) => console.log('Input changed to:', value)}
    />
);
    // Toggle Disabled state
    const toggleDisabled = () => {
      setIsDisabled((state) => !state);
  };

// DropZone
const handleFilesDrop = (files) => {
  console.log('Dropped files:', files);
};

const handleHTMLDrop = (html) => {
  console.log('Dropped HTML:', html);
};

const handleDrop = (event) => {
  console.log('Generic drop:', event);
};
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
        value={fontSize}
        onChange={setFontSize}
        options={filteredOptions}
        onFilterValueChange={(inputValue) =>
          setFilteredOptions(
            options.filter((option) => option.value === inputValue)
          )
        }
      />
      {/* CustomSelectControl */}
      <CustomSelectControl
        __next40pxDefaultSize
        label="Font Size"
        options={optionss}
        value={selectedItem}
        onChange={handleChange}
      />

      {/* DimensionControl */}
      <DimensionControl
        __nextHasNoMarginBottom
        __next40pxDefaultSize
        label={"Padding"}
        icon={"desktop"}
        onChange={(value) => setPaddingSize(value)}
        value={paddingSize}
      />

      {/* Disabled */}
      <div>
            {/* Conditionally wrap input with Disabled */}
            {isDisabled ? <Disabled>{input}</Disabled> : input}

            {/* Button to toggle the disabled state */}
            <Button variant="primary" onClick={toggleDisabled}>
                {isDisabled ? 'Enable Input' : 'Disable Input'}
            </Button>
        </div>

{/* DropZone */}
<DropZoneProvider>
            <div style={{ backgroundColor: "#e7e7e7", padding: "56px 64px", textAlign: "center" }}>
                Drag and drop files or HTML content here
                <DropZone
                    onFilesDrop={handleFilesDrop}
                    onHTMLDrop={handleHTMLDrop}
                    onDrop={handleDrop}
                />
            </div>
        </DropZoneProvider>

    </>
  );
};

export default Style;
