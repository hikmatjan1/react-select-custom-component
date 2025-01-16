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

# Example

```javascript
<div>
<a>Click here to view. </a>
<a href="react-select-custom-component.netlify.app" color="blue">here</a>
</div>
```

# Props

```javascript
<table className='w-full p-2 border'>
        <thead className='font-normal'>
          <tr className='border'>
            <th className='border p-1 w-[10%]'>Prop</th>
            <th className='border p-1'>Description</th>
            <th className='border p-1'>Type</th>
            <th className='border p-1'>Default</th>
          </tr>
        </thead>
        <tbody className='text-[14px]'>
          <tr className='border'>
            <td className='border h-[50px] p-1'>data</td>
            <td className='border h-[50px] p-1'>In this case, complete information is provided in the form of an array, i.e.</td>
            <td className='border h-[50px] p-1'>Array, example {JSON.stringify([{ id: 1, name: "Apple" }, {}, {}])}</td>
            <td className='border h-[50px] p-1'>[]</td>
          </tr>
          <tr className='border'>
            <td className='border h-[50px] p-1'>title</td>
            <td className='border h-[50px] p-1'>For the title above</td>
            <td className='border h-[50px] p-1'>object</td>
            <td className='border h-[50px] p-1'>{JSON.stringify({ name: "", size: "11px", color: "gray" })}</td>
          </tr>
          <tr className='border'>
            <td className='border h-[50px] p-1'>placeholder</td>
            <td className='border h-[50px] p-1'>For placeholder</td>
            <td className='border h-[50px] p-1'>object</td>
            <td className='border h-[50px] p-1'>{JSON.stringify({ name: "placeholder", size: "11px", color: "gray" })}</td>
          </tr>
          <tr className='border'>
            <td className='border h-[50px] p-1'>listItemStyle</td>
            <td className='border h-[50px] p-1'>Styling lists</td>
            <td className='border h-[50px] p-1'>object</td>
            <td className='border h-[50px] p-1'>{JSON.stringify({ color: "black", size: "11px", maxHeight: "180px" })}</td>
          </tr>
          <tr className='border'>
            <td className='border h-[50px] p-1'>isSearch</td>
            <td className='border h-[50px] p-1'>If True, the ability to search in lists will appear.</td>
            <td className='border h-[50px] p-1'>boolean</td>
            <td className='border h-[50px] p-1'>true</td>
          </tr>
          <tr className='border'>
            <td className='border h-[50px] p-1'>lang</td>
            <td className='border h-[50px] p-1'>Change the language of the placeholder in the search field</td>
            <td className='border h-[50px] p-1'>string</td>
            <td className='border h-[50px] p-1'>"en"</td>
          </tr>
          <tr className='border'>
            <td className='border h-[50px] p-1'>mandatory</td>
            <td className='border h-[50px] p-1'>This is to indicate that select is mandatory.</td>
            <td className='border h-[50px] p-1'>boolean</td>
            <td className='border h-[50px] p-1'>false</td>
          </tr>
          <tr className='border'>
            <td className='border h-[50px] p-1'>style</td>
            <td className='border h-[50px] p-1'>To give optional styles</td>
            <td className='border h-[50px] p-1'>object</td>
            <td className='border h-[50px] p-1'>{JSON.stringify({ maxWidth: "200px", height: "30px", borderRadius: "5px", color: "#0073FB" })}</td>
          </tr>
          <tr className='border'>
            <td className='border h-[50px] p-1'>className</td>
            <td className='border h-[50px] p-1'>You can change the position of the text yourself using CSS.</td>
            <td className='border h-[50px] p-1'>string</td>
            <td className='border h-[50px] p-1'>react-multiple-select</td>
          </tr>
          <tr className='border'>
            <td className='border h-[50px] p-1'>changeSelectedHandler</td>
            <td className='border h-[50px] p-1'>You can get the result using this function</td>
            <td className='border h-[50px] p-1'>function</td>
            <td className='border h-[50px] p-1'></td>
          </tr>
        </tbody>
      </table>

```

