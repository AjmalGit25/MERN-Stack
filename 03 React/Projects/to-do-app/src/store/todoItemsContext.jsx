import { createContext, useReducer } from "react";

let initialTodoItems = [
  { name: "Buy Milk", dueDate: "4/10/2023" },
  { name: "Go to College", dueDate: "4/10/2023" },
  { name: "Like this video", dueDate: "right now" },
];

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => { },
  deleteItem: () => { },
});

const todoItemsReducer = (todoItems, action) => {
  let newTodoItems = todoItems;

  if (action.type === "ADD_ITEM") {
    newTodoItems = [
      ...todoItems,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
  }
  else if (action.type === "DELETE_ITEM") {
    newTodoItems = todoItems.filter((item) => item.name !== action.payload.itemName);
  }
  return newTodoItems;
};

export const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, initialTodoItems);

  const addNewItem = (todoName, todoDate) => {
    const newItemAction = {
      type: "ADD_ITEM",
      payload: {
        itemName: todoName,
        itemDueDate: todoDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemsContext.Provider value={{
      todoItems,
      addNewItem,
      deleteItem,
    }}>
      {children}
    </TodoItemsContext.Provider>
  );
}