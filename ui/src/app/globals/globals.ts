import { Game } from '../domain/Game';

export const sep = '/';
export const version = '0.0.1';
export const hasRunningGame = localStorage.getItem('game-id') !== null && localStorage.getItem('current-scene') !== null;
export const gameid = localStorage.getItem('game-id');
export const game = new Game();
