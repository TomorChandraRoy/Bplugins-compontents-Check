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
  Disabled,
  TextControl,
  Button,
  DropZone,
  DropZoneProvider,
  DuotonePicker,
  DuotoneSwatch,
  FocalPointPicker,
  FontSizePicker,
  FormToggle,
  FormTokenField,
  GradientPicker,
  withConstrainedTabbing,
  withFocusReturn,
  __experimentalInputControl as InputControl,
  IsolatedEventContainer,
  KeyboardShortcuts,
  MenuItem,
  MenuGroup, MenuItemsChoice,
  Modal ,
  TabbableContainer,
  NavigableMenu,
  __experimentalNavigation as Navigation,
  __experimentalNavigationGroup as NavigationGroup,
  __experimentalNavigationItem as NavigationItem,
  __experimentalNavigationMenu as NavigationMenu,
  __experimentalNumberControl as NumberControl,
  Popover,
  QueryControls
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

// DuotonePicker
const DUOTONE_PALETTE = [
  {
    colors: ["#8c00b7", "#fcff41"],
    name: "Purple and yellow",
    slug: "purple-yellow",
  },
  { colors: ["#000097", "#ff4747"], name: "Blue and red", slug: "blue-red" },
];

const COLOR_PALETTE = [
  { color: "#ff4747", name: "Red", slug: "red" },
  { color: "#fcff41", name: "Yellow", slug: "yellow" },
  { color: "#000097", name: "Blue", slug: "blue" },
  { color: "#8c00b7", name: "Purple", slug: "purple" },
];

// FormTokenField
const continents = [
  "Africa",
  "America",
  "Antarctica",
  "Asia",
  "Europe",
  "Oceania",
];
const ConstrainedTabbing = withConstrainedTabbing(({ children }) => children);

// WithFocusReturn
const EnhancedComponent = withFocusReturn(() => (
  <div>
    Focus will return to the previous input when this component is unmounted
    <TextControl
      __nextHasNoMarginBottom
      __next40pxDefaultSize
      autoFocus={true}
      onChange={() => {}}
    />
  </div>
));

// NavigableContainer

function onNavigate( index, target ) {
  console.log( `Navigates to ${ index }`, target );
}

const QUERY_DEFAULTS = {
  category: 1,
  categories: [
      {
          id: 1,
          name: 'Category 1',
          parent: 0,
      },
      {
          id: 2,
          name: 'Category 1b',
          parent: 1,
      },
      {
          id: 3,
          name: 'Category 2',
          parent: 0,
      },
  ],
  maxItems: 20,
  minItems: 1,
  numberOfItems: 10,
  order: 'asc',
  orderBy: 'title',
};


//#Style 

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
  console.log("DimensionControl:", paddingSize);

  // Disabled
  const [isDisabled, setIsDisabled] = useState(true);
  console.log("isDisabled :", Disabled);

  const input = (
    <TextControl
      __next40pxDefaultSize
      __nextHasNoMarginBottom
      label="Input"
      onChange={(value) => console.log("Input changed to:", value)}
    />
  );
  // Toggle Disabled state
  const toggleDisabled = () => {
    setIsDisabled((state) => !state);
  };

  // DropZone
  const handleFilesDrop = (files) => {
    console.log("Dropped files:", files);
  };

  const handleHTMLDrop = (html) => {
    console.log("Dropped HTML:", html);
  };

  const handleDrop = (event) => {
    console.log("Generic drop:", event);
  };

  // DuotonePicker
  const [duotone, setDuotone] = useState(["#000000", "#ffffff"]);

  //FormTokenField
  const [selectedContinents, setSelectedContinents] = useState([]);
  console.log(selectedContinents);

  // GradientPicker
  const [gradient, setGradient] = useState(null);

  // Guide
  // const [ isOpen, setIsOpen ] = useState( true );

  // if ( ! isOpen ) {
  //     return null;
  // }

  //   withConstrainedTabbing,
  const [isConstrainedTabbing, setIsConstrainedTabbing] = useState(false);
  let form = (
    <form>
      <TextControl
        __next40pxDefaultSize
        __nextHasNoMarginBottom
        label="Input 1"
        onChange={() => {}}
      />
      <TextControl
        __next40pxDefaultSize
        __nextHasNoMarginBottom
        label="Input 2"
        onChange={() => {}}
      />
    </form>
  );
  if (isConstrainedTabbing) {
    form = <ConstrainedTabbing>{form}</ConstrainedTabbing>;
  }

  const toggleConstrain = () => {
    setIsConstrainedTabbing((state) => !state);
  };
  //WithFocusReturn
  const [text, setText] = useState("");
  const unmount = () => {
    document.activeElement.blur();
    setText("");
  };
  console.log("WithFocusReturn :", text);

  // InputControl
  const [value, setValue] = useState("");

  // IsolatedEventContainer
  const clickHandler = () => {
    console.log("Isolated component clicked!");
  };

  //KeyboardShortcuts
    // State to track if the shortcut is pressed
    const [isAllSelected, setIsAllSelected] = useState(false);

    // Function to handle "select all" action
    const selectAll = () => {
        setIsAllSelected(true);
    };

    // Function to reset the state (optional)
    const resetSelection = () => {
        setIsAllSelected(false);
    };

    // MenuItem
    const [ isActive, setIsActive ] = useState( true );

   //MenuItemsChoice
   const [ mode, setMode ] = useState( 'visual' );
   const choices = [
       {
           value: 'visual',
           label: 'Visual editor',
       },
       {
           value: 'text',
           label: 'Code editor',
       },
   ];

  // Modal
   const [ isOpen, setOpen ] = useState( false );
   const openModal = () => setOpen( true );
   const closeModal = () => setOpen( false );

  // NumberControl
  const [ valuee, setValuee ] = useState( 10 );


  // Popover
  const [ isVisible, setIsVisible ] = useState( false );
  const toggleVisible = () => {
      setIsVisible( ( state ) => ! state );
  };

// QueryControls
  const [ query, setQuery ] = useState( QUERY_DEFAULTS );
  const { category, categories, maxItems, minItems, numberOfItems, order, orderBy  } = query;

  const updateQuery = ( newQuery ) => {
      setQuery( { ...query, ...newQuery } );
  };


// #main

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
          {isDisabled ? "Enable Input" : "Disable Input"}
        </Button>
      </div>
      {/* DropZone */}
      <DropZoneProvider>
        <div
          style={{
            backgroundColor: "#e7e7e7",
            padding: "56px 64px",
            textAlign: "center",
          }}
        >
          Drag and drop files or HTML content here
          <DropZone
            onFilesDrop={handleFilesDrop}
            onHTMLDrop={handleHTMLDrop}
            onDrop={handleDrop}
          />
        </div>
      </DropZoneProvider>
      {/* DuotonePicker */}
      <>
        <DuotonePicker
          duotonePalette={DUOTONE_PALETTE}
          colorPalette={COLOR_PALETTE}
          value={duotone}
          onChange={setDuotone}
        />
        <DuotoneSwatch values={duotone} />
      </>
      \{/* FocalPointPicker */}
      <div style={{ marginTop: "20px" }}>
        <FocalPointPicker
          url={"https://scx2.b-cdn.net/gfx/news/hires/2019/2-nature.jpg"}
          dimensions={{
            width: 400,
            height: 100,
          }}
          value={{
            x: 0.5,
            y: 0.5,
          }}
          onChange={(focalPoint) => console.log(focalPoint)}
        />
      </div>
      {/* FontSizePicker */}
      <div style={{ marginTop: "20px" }}>
        <FontSizePicker
          __next40pxDefaultSize
          fontSizes={[
            {
              name: "Small",
              size: 12,
              slug: "small",
            },
            {
              name: "Normal",
              size: 16,
              slug: "normal",
            },
            {
              name: "Big",
              size: 26,
              slug: "big",
            },
          ]}
          onChange={function noRefCheck() {}}
          value={16}
        />
      </div>
      {/* FormToggle */}
      <div style={{ marginTop: "20px", marginLeft: "10px" }}>
        <FormToggle
          checked={isChecked}
          onChange={() => setChecked((state) => !state)}
        />
      </div>
      {/* FormTokenField */}
      <div style={{ marginTop: "20px", marginLeft: "10px" }}>
        <FormTokenField
          __next40pxDefaultSize
          value={selectedContinents}
          suggestions={continents}
          onChange={(tokens) => setSelectedContinents(tokens)}
          __nextHasNoMarginBottom
        />
      </div>
      {/* GradientPicker */}
      <div
        style={{ marginTop: "20px", marginLeft: "10px", marginBottom: "20px" }}
      >
        <GradientPicker
          value={gradient}
          onChange={(currentGradient) => setGradient(currentGradient)}
          gradients={[
            {
              name: "JShine",
              gradient:
                "linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)",
              slug: "jshine",
            },
            {
              name: "Moonlit Asteroid",
              gradient:
                "linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)",
              slug: "moonlit-asteroid",
            },
            {
              name: "Rastafarie",
              gradient:
                "linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)",
              slug: "rastafari",
            },
          ]}
        />
      </div>
      {/* Guide */}
      {/* <Guide
            onFinish={ () => setIsOpen( false ) }
            pages={ [
                {
                    content: <p>Welcome to the ACME Store!</p>,
                },
                {
                    image: <img src="https://acmestore.com/add-to-cart.png" />,
                    content: (
                        <p>
                            Click <i>Add to Cart</i> to buy a product.
                        </p>
                    ),
                },
            ] }
        /> */}
      {/* WithConstrainedTabbing */}
      <div
        style={{ marginTop: "20px", marginLeft: "10px", marginBottom: "20px" }}
      >
        {form}
        <Button variant="secondary" onClick={toggleConstrain}>
          {isConstrainedTabbing ? "Disable" : "Enable"} constrain tabbing
        </Button>
      </div>
      {/* WithFocusReturn */}
      <div
        style={{ marginTop: "20px", marginLeft: "10px", marginBottom: "20px" }}
      >
        <TextControl
          __nextHasNoMarginBottom
          __next40pxDefaultSize
          placeholder="Type something"
          value={text}
          onChange={(value) => setText(value)}
        />
        {text && <EnhancedComponent />}
        {text && (
          <Button variant="secondary" onClick={unmount}>
            Unmount
          </Button>
        )}
      </div>
      {/*  InputControl*/}
      <div
        style={{ marginTop: "20px", marginLeft: "10px", marginBottom: "20px" }}
      >
        <h3>inputControl👇</h3>
        <InputControl
          value={value}
          onChange={(nextValue) => setValue(nextValue ?? "")}
        />
      </div>
      {/* IsolatedEventContainer */}
      <div
        style={{
          marginTop: "20px",
          marginLeft: "10px",
          marginBottom: "20px",
          border: "2px solid red",
          textAlign: "center",
          paddingTop: "5px",
        }}
      >
        <IsolatedEventContainer
          className="component-some_component"
          onClick={clickHandler}
        >
          <p>This is an isolated component</p>
        </IsolatedEventContainer>
      </div>

      {/* KeyboardShortcuts*/}
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            {/* KeyboardShortcuts component listens for "mod+a" */}
            <KeyboardShortcuts
                shortcuts={{
                    'mod+a': selectAll, // Trigger "selectAll" on "cmd/ctrl + A"
                }}
            />
            <p>
                [cmd/ctrl + A] Combination pressed?{' '}
                <strong>{isAllSelected ? 'Yes' : 'No'}</strong>
            </p>
            {isAllSelected && (
                <button
                    style={{
                        marginTop: '10px',
                        padding: '5px 10px',
                        backgroundColor: '#0073aa',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '3px',
                        cursor: 'pointer',
                    }}
                    onClick={resetSelection}
                >
                    Reset
                </button>
            )}
        </div>

      
      {/* MenuItem */}
      <div style={{ marginTop: "20px", marginLeft: "10px", marginBottom: "20px" }}>
      <MenuItem
            icon={ isActive ? 'yes' : 'no' }
            isSelected={ isActive }
            onClick={ () => setIsActive( ( state ) => ! state ) }
        >
            Toggle
        </MenuItem>
      </div>


      {/*MenuItemsChoice */}
      <div style={{ marginTop: "20px", marginLeft: "10px", marginBottom: "20px" }}>
      <MenuGroup label="Editor">
            <MenuItemsChoice
                choices={ choices }
                value={ mode }
                onSelect={ ( newMode ) => setMode( newMode ) }
            />
        </MenuGroup>
      </div>
      {/*Modal */}
      <div style={{ marginTop: "20px", marginLeft: "10px", marginBottom: "20px" }}>
      <Button variant="secondary" onClick={ openModal }>
                Open Modal
            </Button>
            { isOpen && (
                <Modal title="This is my modal" onRequestClose={ closeModal }>
                    <Button variant="secondary" onClick={ closeModal }>
                        My custom close button
                    </Button>
                </Modal>
            ) }
      </div>

      {/* NavigableContainer*/}
      <div style={{ marginTop: "20px", marginLeft: "10px", marginBottom: "20px" }}>
      <span>Navigable Menu:</span>
        <NavigableMenu onNavigate={ onNavigate } orientation="horizontal">
            <Button variant="secondary">Item 1</Button>
            <Button variant="secondary">Item 2</Button>
            <Button variant="secondary">Item 3</Button>
        </NavigableMenu>

        <span>Tabbable Container:</span>
        <TabbableContainer onNavigate={ onNavigate }>
            <Button variant="secondary" tabIndex="0">
                Section 1
            </Button>
            <Button variant="secondary" tabIndex="0">
                Section 2
            </Button>
            <Button variant="secondary" tabIndex="0">
                Section 3
            </Button>
            <Button variant="secondary" tabIndex="0">
                Section 4
            </Button>
        </TabbableContainer>

      </div>
      {/*Navigation */}
      <div style={{ marginTop: "20px", marginLeft: "10px", marginBottom: "20px" }}>
      <Navigation>
        <NavigationMenu title="Home">
            <NavigationGroup title="Group 1">
                <NavigationItem item="item-1" title="Item 1" />
                <NavigationItem item="item-2" title="Item 2" />
            </NavigationGroup>
            <NavigationGroup title="Group 2">
                <NavigationItem
                    item="item-3"
                    navigateToMenu="category"
                    title="Category"
                />
            </NavigationGroup>
        </NavigationMenu>

        <NavigationMenu
            backButtonLabel="Home"
            menu="category"
            parentMenu="root"
            title="Category"
        >
            <NavigationItem badge="1" item="child-1" title="Child 1" />
            <NavigationItem item="child-2" title="Child 2" />
        </NavigationMenu>
    </Navigation>
      </div>

      {/* NumberControl+*/}
      <div style={{marginTop: "20px", marginLeft:"10px",marginBottom: "20px",}}>
      <NumberControl
            __next40pxDefaultSize
            isShiftStepEnabled={ true }
            onChange={ setValuee }
            shiftStep={ 10 }
            value={ valuee }
        />
      </div>


      {/*Popover */}
      <div style={{ marginTop: "20px", marginLeft: "10px", marginBottom: "20px" }}>
      <Button variant="secondary" onClick={ toggleVisible }>
            Toggle Popover!
            { isVisible && <Popover>Popover is toggled!</Popover> }
        </Button>
      </div>

      {/* QueryControls*/}
      <div style={{ marginTop: "20px", marginLeft: "10px", marginBottom: "20px" }}>
      <QueryControls
            { ...{ maxItems, minItems, numberOfItems, order, orderBy } }
            onOrderByChange={ ( newOrderBy ) => updateQuery( { orderBy: newOrderBy } ) }
            onOrderChange={ ( newOrder ) => updateQuery( { order: newOrder } ) }
            categoriesList={ categories }
            selectedCategoryId={ category }
            onCategoryChange={ ( newCategory ) => updateQuery( { category: newCategory } ) }
            onNumberOfItemsChange={ ( newNumberOfItems ) =>
                updateQuery( { numberOfItems: newNumberOfItems } )
            }
        />
      </div>

    </>
  );
};

export default Style;
