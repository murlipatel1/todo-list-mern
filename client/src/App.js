import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [itemText, setItemText] = useState('');
  const [itemStatus, setItemStatus] = useState('pending');
  const [listItems, setListItems] = useState([]);
  const [isUpdating, setIsUpdating] = useState('');
  const [updateItemText, setUpdateItemText] = useState('');
  const [updateItemStatus, setUpdateItemStatus] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // Add new todo item to database
  const addItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5500/api/item', {
        item: itemText,
        status: itemStatus,
      });
      setListItems(prev => [...prev, res.data]);
      setItemText('');
      setItemStatus('pending');
    } catch (err) {
      console.log(err);
    }
  };

  // Create function to fetch all todo items from database -- we will use useEffect hook
  useEffect(() => {
    const getItemsList = async () => {
      try {
        const res = await axios.get('http://localhost:5500/api/items');
        setListItems(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getItemsList();
  }, []);

  // Delete item when click on delete
  const deleteItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5500/api/item/${id}`);
      const newListItems = listItems.filter(item => item._id !== id);
      setListItems(newListItems);
    } catch (err) {
      console.log(err);
    }
  };

  // Update item
  const updateItem = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:5500/api/item/${isUpdating}`, {
        item: updateItemText,
        status: updateItemStatus,
      });
      const updatedListItems = listItems.map(item =>
        item._id === isUpdating ? res.data : item
      );
      setListItems(updatedListItems);
      setUpdateItemText('');
      setUpdateItemStatus('');
      setIsUpdating('');
    } catch (err) {
      console.log(err);
    }
  };

  // Before updating item we need to show input field where we will create our updated item
  const renderUpdateForm = (item) => (
    <form className="update-form" onSubmit={(e) => updateItem(e)}>
      <input
        className="update-new-input"
        type="text"
        placeholder="New Item"
        onChange={e => setUpdateItemText(e.target.value)}
        value={updateItemText}
      />
      <select
        className="update-new-select"
        onChange={e => setUpdateItemStatus(e.target.value)}
        value={updateItemStatus}
      >
        <option value="pending">Pending</option>
        <option value="in progress">In Progress</option>
        <option value="completed">Completed</option>
      </select>
      <button className="update-new-btn" type="submit">Update</button>
    </form>
  );

  // Filter items based on search query
  const filteredItems = listItems.filter(item =>
    item.item.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form className="form" onSubmit={e => addItem(e)}>
        <input
          type="text"
          placeholder="Add Todo Item"
          onChange={e => setItemText(e.target.value)}
          value={itemText}
        />
        <select
          className="form-select"
          onChange={e => setItemStatus(e.target.value)}
          value={itemStatus}
        >
          <option value="pending">Pending</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit">Add</button>
      </form>
      <input
        className="search-bar"
        type="text"
        placeholder="Search by name or status"
        onChange={e => setSearchQuery(e.target.value)}
        value={searchQuery}
      />
      <div className="todo-listItems">
        {filteredItems.map(item => (
          <div className="todo-item" key={item._id}>
            {isUpdating === item._id ? (
              renderUpdateForm(item)
            ) : (
              <>
                <p className="item-content">{item.item}</p>
                <p className="item-status">{item.status}</p>
                <button className="update-item" onClick={() => {
                  setIsUpdating(item._id);
                  setUpdateItemText(item.item);
                  setUpdateItemStatus(item.status);
                }}>Update</button>
                <button className="delete-item" onClick={() => deleteItem(item._id)}>Delete</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
