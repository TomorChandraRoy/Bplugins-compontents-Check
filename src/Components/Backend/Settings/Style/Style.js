import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  AnglePickerControl,
  AlignmentMatrixControl,
  __experimentalBorderControl as BorderControl,
  __experimentalBorderBoxControl as BorderBoxControl,
  __experimentalBoxControl as BoxControl,
} from "@wordpress/components";
import { useState } from "react";

// BorderBoxControl
const borderColors = [
  { name: "Red 20", color: "#e67373" },
  { name: "Green 20", color: "#72e673" },
];

//BorderControl
const colors = [{ name: "Blue 20", color: "#72aee6" }];

const Style = () => {
  const [angle, setAngle] = useState(0);
  console.log("AnglePickerControl:", angle);

  // AlignmentMatrixControl
  const [alignment, setAlignment] = useState("center center");
  console.log("AlignmentMatrixControl:", alignment);

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
  console.log("BorderBoxControl : ", borders);

  //BorderControl
  const [border, setBorder] = useState({ color: "#0000FF" });
  console.log("BorderControl:", border);

  //BoxControl 
  const [ values, setValues ] = useState( {
    top: '50px',
    left: '10%',
    right: '10%',
    bottom: '50px',
  } );
console.log("BoxControl :", values);

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
      <BoxControl
      __next40pxDefaultSize
      values={ values }
      onChange={ setValues }
    />
    </>
  );
};

export default Style;
