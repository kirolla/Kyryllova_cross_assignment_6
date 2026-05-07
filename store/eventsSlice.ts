import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface EventItem {
    id: number;
    title: string;
    date: string;
    type: 'period' | 'ovulation' | 'reminder';
    notes?: string;
}

interface EventsState {
    items: EventItem[];
}

const initialState: EventsState = {
    items: [],
};

const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
        addEvent: (state, action: PayloadAction<EventItem>) => {
            state.items.push(action.payload);
        },
        removeEvent: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        updateEvent: (state, action: PayloadAction<EventItem>) => {
            const index = state.items.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                state.items[index] = action.payload;
            }
        },
        clearEvents: (state) => {
            state.items = [];
        },
    },
});

export const { addEvent, removeEvent, updateEvent, clearEvents } = eventsSlice.actions;
export default eventsSlice.reducer;