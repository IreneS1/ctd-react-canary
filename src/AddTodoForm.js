import React from 'react'

const AddTodoForm = () => {
    return (
        <div>
            <form>
                <label htmlFor="todoTitle">Title</label>
                <input id="todoTitle"></input>
                <button type="submit">Add</button>
            </form>

        </div>
    )
}

export default AddTodoForm;