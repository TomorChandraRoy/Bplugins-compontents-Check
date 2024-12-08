import { __ } from "@wordpress/i18n";
import {
  PanelBody,
  __experimentalInputControl as InputControl,
  Animate,
  Notice,
  BaseControl,
  useBaseControlProps,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardMedia,
  CardDivider,
  CardHeader,
} from "@wordpress/components";
import { useState } from "react";

const General = ({ children, ...baseProps }) => {
  const [value, setValue] = useState("");
  console.log(value);

  const { baseControlProps, controlProps } = useBaseControlProps(baseProps);

  return (
    <PanelBody
      className="bPlPanelBody"
      title={__("Purpose", "b-blocks")}
      initialOpen={false}
    >
      <InputControl
        value={value}
        onChange={(v) => {
          console.log(v);
          setValue(v);
        }}
      />

      {/* Animate */}
      <Animate type="slide-in" options={{ origin: "top" }}>
        {({ className }) => (
          <Notice className={className} status="success">
            <p>Animation finished.</p>
          </Notice>
        )}
      </Animate>

      {/* BaseControl */}
      <BaseControl {...baseControlProps} __nextHasNoMarginBottom>
        <textarea {...controlProps}>{children}</textarea>
      </BaseControl>

      {/* ButtonGroup */}
      <ButtonGroup>
        <Button variant="primary">Button 1</Button>
        <Button variant="primary">Button 2</Button>
      </ButtonGroup>

      <Button variant="secondary">Click me!</Button>

      <Card>
        <CardHeader>Card Header</CardHeader>
        <CardBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          hendrerit vel turpis in vehicula.{" "}
        </CardBody>
        <CardDivider />
        <CardBody size="large">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          hendrerit vel turpis in vehicula. Nam luctus condimentum mollis.{" "}
        </CardBody>
        <CardMedia>
          <img src="https://cdn.the-scientist.com/assets/articleNo/66864/aImg/35078/foresttb-m.jpg" />
        </CardMedia>
        <CardFooter>Card Footer</CardFooter>
      </Card>
    </PanelBody>
  );
};

export default General;
