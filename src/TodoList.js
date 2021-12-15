import React from 'react'

const todoList = [
    {
        id: '1',
        title: 'Complete assignment'
    },
    {
        id: '2',
        title: 'Push to github'
    },
    {
        id: '3',
        title: 'Turn into squibby'
    }
]

const TodoList = () => {
    return (
        <div>
            <ul>
                {todoList.map(function (item) {
                    return (
                        <li key={item.id}>
                            <span>{item.title}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default TodoList;
