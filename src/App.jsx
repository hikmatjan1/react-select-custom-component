import MultipleSelect from './components/MultipleSelect';

const fruits = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Lemon" },
  { id: 3, name: "Watermelon" },
  { id: 4, name: "Melon" },
  { id: 5, name: "Peach" },
  { id: 6, name: "Pomegranate" },
  { id: 7, name: "Banana" },
  { id: 8, name: "Cherry" },
  { id: 9, name: "Orange" },
  { id: 10, name: "Pineapple" },
];

function App(props) {

  const changeSelectedHandler = value => {
    console.log(value);
  }

  return (
    <div className='p-4'>
      <MultipleSelect
        data={fruits}
        defaultValue={[{ id: 9, name: "Orange" }]}
        isMulti={true}
        title={{
          name: '',
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
          checkboxColor: "green",
          zIndex: 20
        }}
        isSearch={true}
        lang="en"
        mandatory={false}
        style={{ maxWidth: "200px", height: "30px", borderRadius: "5px", color: "#475467", borderColor: "#ccc" }}
        className="react-multiple-select"
        changeSelectedHandler={changeSelectedHandler}
      />
      
      {/* <MultipleSelect
        data={props.data}
        defaultValue={props.defaultValue}
        isMulti={true}
        title={props.title}
        placeholder={props.placeholder}
        listItemStyle={props.listItemStyle}
        isSearch={props.isSearch}
        lang={props.lang}
        style={props.style}
        className="react-multiple-select"
        changeSelectedHandler={props.changeSelectedHandler}
      /> */}
    </div>
  )
}

export default App;
