const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('/public')); // Serve static files

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Example: Fetch events for a specific week
app.get('/events', (req, res) => {
    // Implement logic to fetch events for the specified week
    // You may use a database or other data source here
    const events = [
      {
        title: 'Breakfast: Scrambled Eggs',
        start: '2023-10-30T08:00:00',
        end: '2023-10-30T09:00:00',
      },
      {
        title: 'Lunch: Grilled Chicken Salad',
        start: '2023-10-30T12:00:00',
        end: '2023-10-30T13:00:00',
      },
      {
        title: 'Dinner: Spaghetti Bolognese',
        start: '2023-10-30T19:00:00',
        end: '2023-10-30T20:00:00',
      },
      {
        title: 'Breakfast: Pancakes',
        start: '2023-10-31T08:00:00',
        end: '2023-10-31T09:00:00',
      },
      {
        title: 'Lunch: Caesar Salad',
        start: '2023-10-31T12:00:00',
        end: '2023-10-31T13:00:00',
      },
      {
        title: 'Dinner: Grilled Salmon',
        start: '2023-10-31T19:00:00',
        end: '2023-10-31T20:00:00',
      },
      // Add more events for other days and meals here
    ];
    
  
    res.json(events);
  });
  