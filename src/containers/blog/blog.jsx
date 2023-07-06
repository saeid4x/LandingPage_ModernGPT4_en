import React from 'react';
import './blog.css';
import Article from '../../components/articles/Article';

// images url
import blog01 from '../../assets/images/blog01.png'
import blog02 from '../../assets/images/blog02.png'
import blog03 from '../../assets/images/blog03.png'
import blog04 from '../../assets/images/blog04.png'
import blog05 from '../../assets/images/blog05.png'
 

const Blog = () => {
  return (
    <div className='gpt4__blog section__padding' id="blog"> 
     
     <div className='gpt4__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, 
          We are blogging about it.</h1>
     </div>

     <div className="gpt4__blog-container">

     <div className='gpt4__blog-container_groupA'> 
      <Article imgUrl={blog01}  date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
     </div>
  
     
      <div className='gpt4__blog-container_groupB'> 
        <Article imgUrl={blog02}  date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={blog03}  date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={blog04}  date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        <Article imgUrl={blog05} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
      </div>

     </div>
     </div>
 
  )
}

export default Blog