import { ITodo } from './todo';

export interface IAppState {
    todos: ITodo[];
    lastUpdate: Date;
}
