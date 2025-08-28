# Todo
A small, componentized React Todo List app with local persistence. Features adding, toggling, deleting, clearing todos and a live date/time display.


# Features

Add new todo items (prevents exact-duplicate content).

Toggle complete / incomplete (visual strikethrough).

Delete single todos and clear all.

Persist todos to localStorage.

Live date & time display.


# **Files**

ToDo.jsx — main app component (state + handlers + layout)

TodoForm.jsx — controlled form for adding todos

TodoList.jsx — renders each todo item with check & delete actions

TodoDate.jsx — displays current date & time

TodoLocalStorage.jsx — get/set helpers for localStorage persistence

ToDo.css — styles


# Usage

Type a task and submit (Add / Enter) to create a todo.

Click the check button to toggle completion.

Click the trash button to delete an item.

Click Clear All to remove every todo.

Todos are stored automatically in localStorage for persistence.
