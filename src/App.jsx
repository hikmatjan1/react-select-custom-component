import MultipleSelect from './components/MultipleSelect';

import './App.css';

function App(props) {
  return (
    <div className='p-4'>
      <MultipleSelect
        data={props.data}
        defaultValue={props.defaultValue}
        title={props.title}
        placeholder={props.placeholder}
        listItemStyle={props.listItemStyle}
        isSearch={props.isSearch}
        lang={props.lang}
        style={props.style}
        className="react-multiple-select"
        changeSelectedHandler={props.changeSelectedHandler}
      />
    </div>
  )
}

export default App;
