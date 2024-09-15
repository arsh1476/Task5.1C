import React, { useState } from 'react';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';

function PostForm() {
  const [postType, setPostType] = useState('question');

  const handlePostTypeChange = (event) => {
    setPostType(event.target.value);
  };

  return (
    <div className="container">
      <form>
            <div className="highlight-header">
          <h3>New Post</h3>
        </div>

        <div className="post-type">
          <label>
            <input
              type="radio"
              name="postType"
              value="question"
              checked={postType === 'question'}
              onChange={handlePostTypeChange}
            />
            Question
          </label>
          <label>
            <input
              type="radio"
              name="postType"
              value="article"
              checked={postType === 'article'}
              onChange={handlePostTypeChange}
            />
            Article
          </label>
        </div>


        <div className="highlight-header">
          <h3>What do you want to ask or share</h3>
        </div>

          {postType === 'question' ? <QuestionForm /> : <ArticleForm />}

 
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

export default PostForm;
