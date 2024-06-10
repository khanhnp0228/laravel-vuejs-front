import { createRouter, createWebHistory } from 'vue-router';
import admin from './admin.js';

const routes = [...admin];

export const router = createRouter({
    history: createWebHistory(),
    routes
})