# MealMaster – React Recipe App

MealMaster is a modern and user-friendly React application that allows users to search for recipes, view detailed ingredients and instructions, and save meals to favorites using LocalStorage.
Powered by TheMealDB API.


## Features

### Search for Recipes

Search any meal name (e.g., rice, chicken, pasta) and get results instantly.

### Recipe Details Page

Each recipe includes:

* Meal image
* Full ingredients list (auto-generated)
* Cooking instructions
* Back button
* Category and food origin

### Favorites System

* Add recipes to Favorites
* Remove anytime
* Favorites persist after page refresh (via LocalStorage)

### Navigation (React Router)

* Home page
* Recipe Details page
* Favorites page



## Technologies Used

| Technology        | Purpose                |
| ----------------- | ---------------------- |
| React             | UI Framework           |
| React Router v6   | Navigation and routing |
| TheMealDB API     | Recipe data            |
| JavaScript (ES6+) | App logic              |
| CSS               | Styling                |
| LocalStorage      | Persisting favorites   |



## API Used

TheMealDB API (Free)

| Purpose          | URL                                                     |
| ---------------- | ------------------------------------------------------- |
| Search for meals | `https://www.themealdb.com/api/json/v1/1/search.php?s=` |
| Get meal by ID   | `https://www.themealdb.com/api/json/v1/1/lookup.php?i=` |


## Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/mealmaster.git
cd mealmaster
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

App runs at:

```
http://localhost:3000
```

---

## Folder Structure

```
src/
│── components/
│     └── RecepieApp.jsx
│── pages/
│     └── RecipeDetails.jsx
│── context/
│     └── RecepieContext.jsx
│── css/
│     ├── recepie.css
│     ├── recipedetails.css
│── App.js
│── index.js
│── Home.jsx
```

---

## How the App Works

### Home Page

* User searches for a recipe
* Results appear in cards
* Each card shows image, name, favorite button and “View Details”

### Recipe Details Page

* Shows all meal information
* Shows ingredients as an auto-generated list
* Instructions split into readable steps
* Includes a back button

### Favorites Page

* Displays all saved favorite meals
* Stored in LocalStorage
* Remains after refresh


## Troubleshooting

| Issue               | Cause                       | Fix                                |
| ------------------- | --------------------------- | ---------------------------------- |
| Recipes not showing | API returned null           | Use valid search terms             |
| Favorites disappear | LocalStorage not configured | Check JSON.parse / JSON.stringify  |
| Details page empty  | Wrong route ID              | Ensure `useParams()` is correct    |
| App not loading     | Router error                | Ensure `<BrowserRouter>` wraps App |



## Future Improvements

* Add meal category filter
* Add country filter
* Add pagination
* Add dark mode
* Add UI animations


## Contributing

1. Fork this repository
2. Create a new branch
3. Commit your changes
4. Open a pull request


## License

This project is open-source and free to use.


## Author

Aaron Yahaya Dia
GitHub: aaron200625
