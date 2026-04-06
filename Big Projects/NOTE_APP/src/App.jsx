import React, { useState } from "react";
import { Plus, StickyNote } from "lucide-react";
import NotesCard from "./components/NotesCard";
const App = () => {
  const [notes, setNotes] = useState([{ id: 1, title: "Hello, World" }, { id: 2, title: "Your Note App" }]);
  const [isToggle, setIsToggle] = useState(false);
  const [text, setText] = useState("");
  const addNote = () => {
    if (text.length == 0) {
      setText("Please Write Something");
      return;
    }
    setNotes((prev) => [...prev, { id: new Date().toLocaleString(), title: text }]);
    setText("");
    setIsToggle(false);
  }

  // const editNote = (id) => {
  //   // const note = notes.find((note) => )
  //     setIsToggle(true);
  // }

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  }

  return (
    <div className="w-screen min-h-screen flex flex-col  bg-gray-900 text-white overflow-x-hidden p-8">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-5xl font-bold flex items-center gap-2 text-purple-400 drop-shadow-lg"><StickyNote size={40} className="text-yellow-400" />NOTE</h1>
        <p className="font-semibold text-gray-400 text-lg text-center">Write your thought & Download it</p>
      </div>
      <div className="flex flex-col items-center gap-2 mt-20 w-full bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg p-8 shadow-lg cursor-pointer hover:scale-102 transition-all duration-300 ease-in-out" onClick={() => setIsToggle(true)}>
        <Plus size={60} />
      </div>
      {isToggle ? (<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border border-purple-500 md:h-1/2 md:w-2/7  bg-gray-900 rounded-lg flex flex-col items-center gap-2 p-8">
        <h1 className="md:text-3xl text-xl font-semibold">Write your notes...</h1>
        <textarea name="note" id="note"
          onChange={(e) => setText(e.target.value)}
          value={text}
          className="text-white bg-gray-700 rounded-lg w-full h-full"></textarea>
        <div className="flex gap-2">
          <button className="bg-purple-600 px-4 py-2 rounded-lg mt-3" onClick={addNote}>Add</button>
          <button className="bg-purple-600 px-4 py-2 rounded-lg mt-3" onClick={() => setIsToggle(false)}>Cancel</button>
        </div>
      </div>) : ("")}
      {notes.length > 0 ? (
        <div className="flex flex-wrap justify-center items-center gap-4 mt-10">
          {notes.map((note) => (
            <NotesCard id={note.id} note={note.title} deleteNote={deleteNote} />
          ))}
        </div>
      ) : ("No Notes yet.")}
    </div>
  );
};

export default App;