import MultipleSelect from './components/MultipleSelect';

import './App.css';

const allCode = [
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

  // change select
  const changeSelectedHandler = value => {
    console.log(value);
  }

  return (
    <div className='p-4'>
      <MultipleSelect
        // data={allCode || []}
        // title={{
        //   name: 'Fruits',
        //   size: '11px',
        //   color: "#475467"
        // }}
        // placeholder={{
        //   name: 'Fruits',
        //   size: '11px',
        //   color: "gray"
        // }}
        // listItemStyle={{
        //   color: "black",
        //   size: "11px",
        //   maxHeight: "180px"
        // }}
        // isSearch={true}
        // lang="en"
        // mandatory={false}
        // style={{ maxWidth: "200px", height: "30px", borderRadius: "5px", color: "#0073FB", borderColor: "#152DFF" }}

        data={props.data || []}
        title={props.title}
        placeholder={props.placeholder}
        listItemStyle={props.listItemStyle}
        isSearch={props.isSearch}
        lang={props.lang}
        className="react-multiple-select"
        changeSelectedHandler={props.changeSelectedHandler}
      />
    </div>
  )
}

export default App;
