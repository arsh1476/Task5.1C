import React from 'react';

function QuestionForm() {
  return (
    <div>
      <label>
        Question Title
        <input type="text" placeholder="Enter a descriptive question title" />
      </label>

      <label>
        Question
        <textarea placeholder="Enter the question details" />
      </label>

      <label>
        Tags
        <input type="text" placeholder="Please add up to 3 tags (e.g., JavaScript, React)" />
      </label>

    </div>
  );
}

export default QuestionForm;
