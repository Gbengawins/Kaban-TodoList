import React from 'react';
import AddTask from './components/AddTask';
import TaskContainer from './components/TaskContainer';
import Nav from './components/Nav';
import socketIO from 'socket.io-client';


const socket = socketIO.connect("http://localhost:4500");

const Task = () => {
    return (
        <div>
            <Nav />
            <AddTask socket={ socket } />
            <TaskContainer socket={ socket } />
        </div>
    );
};

export default Task;