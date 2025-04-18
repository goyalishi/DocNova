import { io } from 'socket.io-client';

export const initSocket = ()=>{
    const options ={
        'force new connection':true,
        reconnectionAttempt:'Infinity',
        timeout:10000,
        transports:['websocket'],
    }
    return io(import.meta.env.VITE_APP_API_URI,options);
}