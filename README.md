# react-select-custom-component

A package with the ability to select one or more data, simple and convenient

# Installation

``` bash
 npm install react-select-custom-component
 yarn install react-select-custom-component
```

``` javascript
import { MultipleSelect } from 'react-select-custom-component';

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

# Features

1. There is a single or multiple choice option.
2. Virtualization is designed to improve efficiency when working with large amounts of data. Virtualization ensures that only visible elements within a large array are loaded and processed. Advantages of Virtualization: Fast performance: Resources are used efficiently because only visible elements are loaded. Unlimited data: Provides optimization when working with very large arrays.
3. You can freely change the styles inside and outside the list.
4. There is a search section within the list.
5. Simple, easy to use, and most importantly, fast, it can be used easily even with large amounts of data.