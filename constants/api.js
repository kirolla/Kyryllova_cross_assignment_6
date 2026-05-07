export const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchHealthTips = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error(`HTTP помилка: ${response.status}`);
        const data = await response.json();
        return data.slice(0, 5);
    } catch (error) {
        console.error('Помилка запиту до API:', error);
        throw error;
    }
};