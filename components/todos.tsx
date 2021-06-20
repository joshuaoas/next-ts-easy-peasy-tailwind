import React, { useState, useEffect } from "react";
import { useStoreActions, useStoreState } from "../store/hooks";

const people = [
  {
    name: 'Lindsay Walton',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80',
  },
  // More people...
]
const activityItems = [
  { id: 1, person: people[0], project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
  // More items...
]

export default function Todos() {
  // Pull out state from our store
  const items = useStoreState(state => state.todos.items);

  // Pull out actions from our store
  const add = useStoreActions(actions => actions.todos.addTodo);

  // Track our form state
  const [newTodo, setNewTodo] = useState("");

  // Reset the form state every time the todo items changes
  useEffect(() => setNewTodo(""), [items]);

  return (
    <div className="py-8">
      <div className="max-w-lg mx-auto px-6">
      <h2>Requests</h2>


      <ul className="divide-y divide-gray-200">
        {activityItems.map((activityItem) => (
          <li key={activityItem.id} className="py-4">
            <div className="flex space-x-3">
              <img className="h-6 w-6 rounded-full" src={activityItem.person.imageUrl} alt="" />
              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">{activityItem.person.name}</h3>
                  <p className="text-sm text-gray-500">{activityItem.time}</p>
                </div>
                <p className="text-sm text-gray-500">
                  Deployed {activityItem.project} ({activityItem.commit} in master) to {activityItem.environment}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>


      <ul>
        {items.map((todo, idx) => (
          <li key={idx}>{todo}</li>
        ))}
      </ul>

      <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
        Email
      </label>
      <div className="mt-1">
        <input
          type="text"
          name="email"
          className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          placeholder="you@example.com"
          aria-describedby="email-description"
          onChange={e => setNewTodo(e.target.value)}
          value={newTodo}
        />
      </div>
      <p className="mt-2 text-sm text-gray-500" id="email-description">
        We'll only use this for spam.
      </p>
    </div>
    <button
        onClick={() => add(newTodo)}
        type="button"
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Add
      </button>
      </div>


    </div>
  );
}