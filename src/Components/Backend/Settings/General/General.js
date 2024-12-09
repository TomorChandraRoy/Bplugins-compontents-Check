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
  ColorIndicator,
  Composite,
  __experimentalConfirmDialog as ConfirmDialog,
  Dashicon,
  DateTimePicker,
  __experimentalDivider as Divider,
  __experimentalText as Text,
  __experimentalVStack as VStack,
  Draggable,
  Panel,
  DropdownMenu,
  Dropdown,
  __experimentalElevation as Elevation,
  ExternalLink,
  Flex, FlexBlock, FlexItem,FocusableIframe,
  FormFileUpload

} from "@wordpress/components";
import {
  Icon,
  more,
  arrowLeft,
  arrowRight,
  arrowUp,
  arrowDown,
} from "@wordpress/icons";
import { useState } from "react";

const General = ({ children, ...baseProps }) => {
  const [value, setValue] = useState("");
  console.log(value);

  const { baseControlProps, controlProps } = useBaseControlProps(baseProps);

  const [date, setDate] = useState(new Date());



  const [imageURL, setImageURL] = useState(null);
  console.log(imageURL);
  

  const handleFileChange = (e) => {
      const file = e.target.files[0]; // প্রথম ফাইলটি নিন
      if (file) {
          const fileURL = URL.createObjectURL(file); // অস্থায়ী URL তৈরি করুন
          setImageURL(fileURL); // State-এ সেট করুন
          console.log('Generated Image URL:', fileURL);
      }
  };
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
      {/* Card */}
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
      {/* ColorIndicator */}
      <ColorIndicator colorValue="#0073aa" />
      {/* Composite  */}
      <Composite>
        <Composite.Group>
          <Composite.GroupLabel>Label</Composite.GroupLabel>
          <Composite.Item>Item 1</Composite.Item>
          <Composite.Item>Item 2</Composite.Item>
        </Composite.Group>
      </Composite>
      {/* ConfirmDialog */}
      <ConfirmDialog onConfirm={() => console.debug(" Confirmed! ")}>
        Are you sure? <strong>This action cannot be undone!</strong>
      </ConfirmDialog>
      {/*  Dashicon */}
      <div>
        <Dashicon icon="admin-home" />
        <Dashicon icon="products" />
        <Dashicon icon="wordpress" />
      </div>
      {/* DateTimePicker  */}
      <DateTimePicker
        currentDate={date}
        onChange={(newDate) => setDate(newDate)}
        is12Hour={true}
      />
      {/* Divider */}=
      <VStack spacing={4}>
        <Text>Some text here</Text>
        <Divider />
        <Text>Some more text here</Text>
      </VStack>
      {/*  Draggable */}
      <div id="draggable-panel">
        <Panel header="Draggable panel">
          <PanelBody>
            <Draggable elementId="draggable-panel" transferData={{}}>
              {({ onDraggableStart, onDraggableEnd }) => (
                <div
                  className="example-drag-handle"
                  draggable
                  onDragStart={onDraggableStart}
                  onDragEnd={onDraggableEnd}
                >
                  <Icon icon={more} />
                </div>
              )}
            </Draggable>
          </PanelBody>
        </Panel>
      </div>
      {/* DropdownMenu */}
      <DropdownMenu
        icon={more}
        label="Select a direction"
        controls={[
          {
            title: "Up",
            icon: arrowUp,
            onClick: () => console.log("up"),
          },
          {
            title: "Right",
            icon: arrowRight,
            onClick: () => console.log("right"),
          },
          {
            title: "Down",
            icon: arrowDown,
            onClick: () => console.log("down"),
          },
          {
            title: "Left",
            icon: arrowLeft,
            onClick: () => console.log("left"),
          },
        ]}
      />
      {/* Dropdown*/}
      <Dropdown
        className="my-container-class-name"
        contentClassName="my-popover-content-classname"
        popoverProps={{ placement: "bottom-start" }}
        renderToggle={({ isOpen, onToggle }) => (
          <Button variant="primary" onClick={onToggle} aria-expanded={isOpen}>
            Toggle Popover!
          </Button>
        )}
        renderContent={() => <div>This is the content of the popover.</div>}
      />

      {/* Elevation */}

  <button
  style={{
    background: 'transparent',
    border: 0,
    height: 150,
    position: 'relative',
    width: 150,
    marginTop: "20px" 
  }}
>
  Click me
  <Elevation
    isInteractive
    value={14}
  />
</button>

      {/* ExternalLink */}
      <div style={{ marginTop: "20px" }}>
    <ExternalLink href="https://wordpress.org">
        WordPress.org
    </ExternalLink>
</div>
      {/* FlexBlock */}
      {/* FlexItem */}
      {/* Flex */}
      <Flex style={{background:"red", marginTop: "20px"}}>
            <FlexItem>
                <p>Code</p>
            </FlexItem>
            <FlexBlock>
                <p>Poetry</p>
            </FlexBlock>
        </Flex>
      {/* FocusableIframe */}
      <div style={{marginTop: "20px"}}>
      <FocusableIframe
	src="https://www.youtube.com/embed/xK0kKbNXZc4"
	onFocus={ () => console.log( 'iframe is focused' ) }
/>
      </div>
      {/* FormFileUpload */}
      <div>
            <p>Upload an image below: </p>
            <FormFileUpload
                accept="image/*"
                onChange={handleFileChange}
                render={({ openFileDialog }) => (
                    <Button isSecondary onClick={openFileDialog}>
                        Upload Image
                    </Button>
                )}
            />
            {imageURL && (
                <div style={{ marginTop: '20px' }}>
                    <p>
                        <a href={imageURL} target="_blank" rel="noopener noreferrer">
                            Click here to view the image
                        </a>
                    </p>
                </div>
            )}
        </div>

      {/* Grid */}
      {/*HStack  */}
      {/* Heading */}
      {/* NavigateRegions */}
      {/* HigherOrder */}
      {/*  */}
      {/*  */}
      {/*  */}
      {/*  */}
    </PanelBody>
  );
};

export default General;
