import './App.css';

function App() {
  return (

    

    <div className='wrap'>
      <div className='check'>
        {arr.map((el, idx) => <input type="checkbox" id='check1' />)}
        <label for="check1"></label>
      </div>

      <div className='radio'>
        {arr.map((el, idx) => <input type="radio" name='test' />)}
      </div>

      {/* radio버튼 한종류만 선택하려면 name을 지정해줘야함 */}

      <div className='inputbox'>
        <input type='text'></input>
      </div>



    </div>

  );
}
const arr = ['item1','item2','item3','item4']
const Styledlabel = Styledlabel.label`

`


export default App;
