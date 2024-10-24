import './App.css';
import Customer from './components/Customer.js';

const customers = [
  {
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '850117',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '김진영',
  'birthday' : '950117',
  'gender' : '남자',
  'job' : '교사'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '조예림',
  'birthday' : '951023',
  'gender' : '여자',
  'job' : '디자이너'
}
]

function App() {
  return (
    <div>
      { customers.map(a => { return ( <Customer key={a.id} id={a.id} img={a.image} name={a.name} birthday={a.birthday} gender={a.gender} job={a.job} />)})}
    </div>
  );
}

export default App;
