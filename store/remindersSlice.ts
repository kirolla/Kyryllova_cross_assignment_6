import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ReminderItem {
    id: number;
    title: string;
    date: string;
    time: string;
    completed: boolean;
}

interface RemindersState {
    items: ReminderItem[];
}

const initialState: RemindersState = {
    items: [],
};

const remindersSlice = createSlice({
    name: 'reminders',
    initialState,
    reducers: {
        addReminder: (state, action: PayloadAction<ReminderItem>) => {
            state.items.push(action.payload);
        },
        removeReminder: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        toggleReminder: (state, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.completed = !item.completed;
            }
        },
        clearReminders: (state) => {
            state.items = [];
        },
    },
});

export const { addReminder, removeReminder, toggleReminder, clearReminders } = remindersSlice.actions;
export default remindersSlice.reducer;