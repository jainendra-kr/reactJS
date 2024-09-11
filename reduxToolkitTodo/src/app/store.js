import {configureStore} from '@reduxjs/toolkit';

import todoReduser from '../features/todoSlice';

export const store = configureStore({
    reducer: todoReduser
})