import MultipleSelect from './components/MultipleSelect';

import './App.css';

const allCode = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Lemon" },
  { id: 3, name: "Watermelon" },
  { id: 4, name: "Melon" },
];

function App() {

  // change select
  const changeCodeSelectedHandler = value => {
    console.log(value);
  }

  return (
    <div className='p-4'>
      <MultipleSelect
        data={allCode}
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
        changeSelectedHandler={changeCodeSelectedHandler}
      />
    </div>
  )
}

export default App;
