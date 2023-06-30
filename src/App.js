import { Route, Routes } from 'react-router-dom';
import HomePage from './components/home/HomePage';
import Layout from './components/layout/Layout';
import AuthorPage from './components/authors/AuthorPage';
import BlogPage from './components/blogs/BlogPage';
import ScrollToTop from './shared/ScrollToTop';



function App() {


  return (
    <div className="App">
      <Layout>
      <ScrollToTop/>
          <Routes>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/authors/:slug' element={<AuthorPage/>}/>
              <Route path='/blogs/:slug' element={<BlogPage/>}/>
          </Routes>
      </Layout>
    </div>
  );
}

export default App;
