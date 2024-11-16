import React from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [formData, setFormData] = React.useState({
    text: "",
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit =(e) =>{
    e.preventDefault()
    const newTask ={
      text: formData.text, 
      category: formData.category
    }

    onTaskFormSubmit(newTask)
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={formData.text}
          onChange={handleChange}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          {categories
            .map((category, index) => {
              return (
                <option key={index} value={category}>
                  {category}
                </option>
              );
            })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
