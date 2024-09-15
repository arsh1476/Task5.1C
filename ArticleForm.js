import React from 'react';

function ArticleForm() {
  return (
    <div>
      <label>
        Article Title
        <input type="text" placeholder="Enter a descriptive article title" />
      </label>

      <label>
        Abstract
        <textarea placeholder="Enter a 1-paragraph abstract" />
      </label>

      <label>
        Article Text
        <textarea placeholder="Enter the full article text" />
      </label>

      <label>
        Tags
        <input type="text" placeholder="Please add up to 3 tags (e.g., JavaScript, React)" />
      </label>

    </div>
  );
}

export default ArticleForm;
