# 🎬 Movie App (TMDB Integration)

**A dynamic web application built to replicate the functionality demonstrated in the recorded session, featuring API integration, advanced data handling, and local favorites management.**

---

## 🎯 Project Objective

The primary goal of this project is to successfully implement all features demonstrated in the recorded session, focusing on:
1.  **API Integration:** Interacting with a third-party service (TMDB) to fetch movie data.
2.  **User Experience:** Providing a smooth browsing experience through search and pagination.
3.  **Local Data Persistence:** Managing user-specific data (Favorites) using local storage.

---

## ✨ Features

This application provides a full movie browsing and management experience:

### 1. 🌐 TMDB API Integration
* **Popular Movies:** Fetches and displays a dynamic list of currently popular movies from The Movie Database (TMDB) API.
* **Dynamic Data Display:** Renders movie posters, titles, release dates, and ratings.

### 2. 🔍 Browsing and Navigation
* **Pagination:** Implements controls to navigate efficiently through the multiple pages of the popular movie list.
* **Search Functionality:** Allows users to input keywords to search for specific movies across the TMDB database.

### 3. ⭐ Favorites Handling
* **Mark as Favorite:** Users can easily mark or unmark any movie as a favorite directly from the main lists.
* **Local Storage Persistence:** Favorite movie IDs are stored persistently in the browser's Local Storage, ensuring they are saved across sessions.
* **Dedicated Favorites Page:** A separate page or section displays only the movies the user has marked as favorites.

---

## 💻 Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **React.js** | Core framework for building the front-end components. |
| **TMDB API** | Provides the movie data (posters, titles, details). |
| **Fetch/Axios** | For asynchronous data fetching from the API. |
| **(Styling Framework)** | CSS framework or library used for styling (e.g., Tailwind, Styled Components, etc.). |

---

## ⚙️ Installation and Setup

### Prerequisites
* You must obtain a **TMDB API Key** to fetch movie data.

### Steps
1.  **Clone the repository:**
    ```bash
    git clone [YOUR_REPO_URL]
    cd movie-app
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Configure Environment Variables:**
    Create a file named `.env` (or similar, depending on your setup) in the root directory and add your API key:
    ```
    # Example for Vite/CRA. Adjust prefix as necessary.
    VITE_TMDB_API_KEY=[YOUR_ACTUAL_TMDB_API_KEY]
    ```

4.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn start
    ```

The application will now be running and fetching live movie data!

---

## 🤝 Based on Recorded Session

This project faithfully replicates the code and architectural patterns taught in the accompanying video session, serving as a comprehensive practice platform.

---
