import './App.css';
import Customer from './components/customer.js';
import { Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';


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
    <Paper sx={{ width: '100%', overflow: 'auto' }} >
      <Table sx={{ minWidth: 1080 }} >
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { customers.map(a => { return ( <Customer key={a.id} id={a.id} img={a.image} name={a.name} birthday={a.birthday} gender={a.gender} job={a.job} />)})}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default App;
