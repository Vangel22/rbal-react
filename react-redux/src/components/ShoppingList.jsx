import { useReducer, useState } from "react";

let nextId = 3;
const initialItems = [
  { id: 0, name: "Milk", bought: false },
  { id: 1, name: "Bread", bought: true },
  { id: 2, name: "Eggs", bought: false },
];

const listReducer = () => {
  switch () {
    case "add":
      return;
    case "toggle":
      return;
    case "update":
      return;
    case "delete":
      return;
    default:
      return;
  }
};

export const ShoppingList = () => {
  const [items, dispatch] = useReducer(listReducer, initialItems);
  const [newItemName, setNewItemName] = useState("");
  const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");

  const handleAddItem = (e) => {
   
  };

  const handleUpdate = (id) => {
   
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleAddItem}>
        <input
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Add new item"
        />
        <button type="submit">Add</button>
      </form>

      {items.map((item) => (
        <div key={item.id}>
          <input
            type="checkbox"
            checked={item.bought}
            onChange={() => dispatch({ type: "toggle", id: item.id })}
          />
          {editId === item.id ? (
            <>
              <input
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
              <button onClick={() => handleUpdate(item.id)}>Save</button>
              <button onClick={() => setEditId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <span>{item.name}</span>
              <button
                onClick={() => {
                  setEditId(item.id);
                  setEditName(item.name);
                }}
              >
                Edit
              </button>
            </>
          )}
          <button onClick={() => dispatch({ type: "delete", id: item.id })}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
