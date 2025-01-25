# react-select-custom-component

`react-select-custom-component` is a flexible and customizable React library for building dropdowns and select inputs with custom components, seamless styling, and full accessibility support.

## Features

- 🎨 **Customizable Components**: Fully replaceable components for rendering options and the dropdown.
- ⚡ **Fast and Lightweight**: Optimized for performance and small bundle size.
- 📱 **Responsive**: Works perfectly on mobile and desktop.
- ♿ **Accessible**: Fully keyboard-navigable and ARIA-compliant.
- 🚀 **TypeScript Support**: Built-in TypeScript definitions for better development experience.

# Installation

Install the package using npm or yarn:

``` bash
 npm install react-select-custom-component
 yarn install react-select-custom-component
```

## Usage

Here is an example of how to use `react-select-custom-component` in your project:

``` javascript
import { MultipleSelect } from 'react-select-custom-component';

import "react-select-custom-component/dist/tailwind.css"; // import CSS file (important)

// data
const fruits = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Lemon" },
  { id: 3, name: "Watermelon" },
  { id: 4, name: "Melon" },
  { id: 5, name: "Peach" },
  { id: 6, name: "Pomegranate" },
  { id: 7, name: "Banana" },
  { id: 8, name: "Banana" },
  { id: 9, name: "Orange" },
  { id: 10, name: "Pineapple" },
];

function Example() {

  // get value
  const changeSelectedHandler = value => {
    console.log(value);
  }

  return (
      <MultipleSelect
        data={fruits}
        defaultValue={[
            { id: 1, name: "Apple" },
            { id: 2, name: "Lemon" },
        ]}
        title={{
          name: 'Fruits',
          size: '11px',
          color: "#475467"
        }}
        placeholder={{
          name: 'Fruits',
          size: '11px',
          color: "gray"
        }}
        listItemStyle={{
          color: "black",
          size: "11px",
          maxHeight: 150,
          checkboxColor: "#0000ff"
        }}
        isSearch={true}
        lang="en"
        mandatory={false}
        style={{ maxWidth: "200px", height: "30px", borderRadius: "5px", color: "#0073FB", borderColor: "#152DFF" }}
        className="react-multiple-select"
        changeSelectedHandler={changeSelectedHandler}
      />
  )
}

export default Example;
```

# Example

Click here to view. [here](https://react-select-custom-component.netlify.app/)

# Props

| Prop | Description                                         | Type | Default |
|------|-----------------------------------------------------|------|---------|
| data | In this case, complete information is provided in the form of an array, i.e. | Array, example [{ id: 1, name: "Apple" }, {}, {}] | [] |
| defaultValue | You need to provide an array as the default value. | array | [{ id: 1, name: "Apple" }, {}, {}] |
| title | For the title above | object | { name: "", size: "11px", color: "gray" } |
| placeholder | For placeholder | object | { name: "placeholder", size: "11px", color: "gray" } |
| listItemStyle | Styling lists | object | { color: "black", size: "11px", maxHeight: 150, checkboxColor: "#0000ff" } |
| isSearch | If True, the ability to search in lists will appear. | boolean | true |
| lang | Change the language of the placeholder in the search field. | string | "en" |
| mandatory | This is to indicate that select is mandatory. | boolean | false |
| style | To give optional styles. | object | { maxWidth: "200px", height: "30px", borderRadius: "5px", color: "#0073FB" } |
| className | You can change the position of the text yourself using CSS. | string | react-multiple-select |
| changeSelectedHandler | You can get the result using this function | function | optional function |

## Why Use `react-select-custom-component`?

1. **Ease of Use**: Simple API and easy integration.
2. **Full Control**: Customize every part of the dropdown to suit your application.
3. **Community Driven**: Built with best practices for React and modern web development.
4. **Rich Documentation**: Comprehensive examples and guides for every use case.


### Keywords

React Select, Custom Dropdown, React Dropdown, Select Component, Customizable Select, React Library, Accessible Dropdown, multiple-select, select, react-select, react-select-multiple, multi-select-react, tailwindcss-select, select-components, react-select-component, select-multiple, react-select-custom-component, react-custom-component, react-select-custom, custom-select, dropdown, dropdown-select-component, 

## Development

To contribute or make changes, clone the repository and install dependencies:

```bash
git clone hhttps://github.com/hikmatjan1/react-select-custom-component.git
cd react-select-custom-component
npm install
```

Run the development server:

```bash
npm run dev
```

# Updates

1. A full update has been implemented starting with version 1.0.28. I apologize to everyone for the inconvenience caused by the missing CSS file.

## License

React Select Custom Component is open-source and available under the MIT License.
