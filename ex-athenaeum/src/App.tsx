import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { Layout } from './hoc/layout/Layout';
import { MainRouteSwitch } from './routes/main';
import { getBooks } from './store/book/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  })

  return (
    <Layout>
      <MainRouteSwitch />
    </Layout>
  );
}

export default App;
