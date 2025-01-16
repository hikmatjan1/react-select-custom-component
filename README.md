# react-select-custom-component

A package with the ability to select one or more data, simple and convenient

# Installation

``` bash
 npm install react-select-custom-component
 yarn install react-select-custom-component
```

``` javascript
import { MultipleSelect } from 'react-select-custom-component';

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

  // change select
  const changeSelectedHandler = value => {
    console.log(value);
  }

  return (
    <div className='p-4'>
      <MultipleSelect
        data={fruits}
        title={{
          name: 'Код ткани',
          size: '11px',
          color: "#475467"
        }}
        placeholder={{
          name: 'Код ткани',
          size: '11px',
          color: "gray"
        }}
        listItemStyle={{
          color: "black",
          size: "11px",
          maxHeight: "300px"
        }}
        isSearch={true}
        lang="en"
        mandatory={false}
        style={{ maxWidth: "200px", height: "30px", borderRadius: "5px", color: "#0073FB", borderColor: "#152DFF" }}
        className="react-multiple-select"
        changeSelectedHandler={changeSelectedHandler}
      />
    </div>
  )
}

export default Example;
```

