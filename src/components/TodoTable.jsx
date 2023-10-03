export default function TodoTable(props) {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Description</th>
                        <th>Date</th>

                    </tr>
                    <hr />
                    {props.todos.map((todo, index) =>
                        <><tr key={index}>

                            <td>{todo.desctiption}</td>
                            <td>{todo.date}</td>

                            <button className='btn' onClick={() => props.onDelete(index)}>Delete</button>
                        </tr><hr /></>
                    )}
                </tbody >
            </table>
        </div>
    )
}