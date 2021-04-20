import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  let [blogs, setBlogs] = useState( [
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ] )

  let [name, setName] = useState( 'mario' )

  let handleDelete = ( id ) => {
    let newBlogs = blogs.filter( blog => blog.id !== id )
    setBlogs( newBlogs )
  }

  useEffect( () => {
    console.log('use effect');
    console.log(name);
  }, [ name ] )


  return (
    <div className='home'>
      <BlogList blogs={ blogs } title='All blogs' handleDelete={ handleDelete } />
      <button onClick={ () => setName( 'luigi' ) } >Change name</button>
      <p>{ name }</p>
    </div>
  );
}

export default Home;