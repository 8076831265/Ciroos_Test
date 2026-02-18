# Ciroos Dashboard

A modern, responsive user management dashboard built with React, Tailwind CSS, and Recharts. Features real-time data fetching, filtering, and visualization capabilities.

## Project Overview

The Ciroos Dashboard displays user information with the following features:
- **User Statistics**: Display active, inactive, and total user counts
- **Data Visualization**: Donut chart showing user status distribution
- **User Management**: Paginated table with user details and status indicators
- **Search & Filter**: Real-time search and status filtering with persistent state
- **Responsive Design**: Mobile-first design that adapts to all screen sizes

## Technology Stack

### Core Framework
- **React** 19.2.0 - UI library with hooks
- **Vite** 7.3.1 - Build tool and dev server

### Styling
- **Tailwind CSS** 4.0 - Utility-first CSS framework
- **@tailwindcss/postcss** - Tailwind CSS v4 plugin
- **PostCSS** - CSS processing
- **Autoprefixer** - Vendor prefixes

### UI & Visualization
- **Recharts** 3.7.0 - Chart library for data visualization
- **react-icons** - Icon library for UI components

### Backend & Mock API
- **json-server** - Mock JSON REST API server

### Development
- **ESLint** - Code linting
- **@vitejs/plugin-react** - React support for Vite

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup Steps

1. **Clone or navigate to the project**
   ```bash
   cd ciroos-test
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install additional packages** (if not already included)
   ```bash
   npm install recharts react-icons
   npm install -D tailwindcss postcss autoprefixer @tailwindcss/postcss
   npm install --save-dev json-server
   ```

## Running the Application

The application requires two servers running simultaneously:

### Terminal 1: Start the API Server
```bash
npm run server
```
This starts the mock JSON API server on **http://localhost:3001**

### Terminal 2: Start the Development Server
```bash
npm run dev
```
This starts the Vite development server on **http://localhost:5173** (or next available port)

Then open your browser and navigate to `http://localhost:5173`

## Available Scripts

```bash
# Development
npm run dev          # Start Vite dev server
npm run server       # Start json-server (mock API)

# Build
npm run build        # Build for production

# Preview
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint
```

## Project Structure

```
ciroos-test/
├── src/
│   ├── components/
│   │   ├── Cards.jsx           # Statistics cards (Active, Inactive, Total)
│   │   ├── DataTable.jsx       # Paginated user data table
│   │   ├── DonutChart.jsx      # Status distribution chart
│   │   └── SearchFilter.jsx    # Search bar and reset button
│   ├── hooks/
│   │   └── usePersistedState.js # Custom hook for localStorage persistence
│   ├── services/
│   │   └── tableData.js        # API data fetching service
│   ├── utils/
│   │   └── filterUtils.js      # Filter and statistics utilities
│   ├── App.jsx                 # Main application component
│   ├── App.css                 # Application styles
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/                     # Static assets
├── index.html                  # HTML template
├── package.json                # Project dependencies
├── db.json                     # Mock database (for json-server)
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── eslint.config.js            # ESLint configuration
```

## Features

### 📊 Dashboard Components

1. **Search Filter (Top Left)**
   - Real-time search by user name
   - Reset button to clear filters
   - Persistent search state using localStorage

2. **Statistics Cards (Top Right)**
   - Active Users count
   - Inactive Users count
   - Total Users count
   - Responsive grid layout

3. **Donut Chart (Left Column)**
   - Visual distribution of active vs inactive users
   - Interactive legend
   - Click on chart segments to filter users

4. **Data Table (Right Column)**
   - Paginated table (5 rows per page)
   - Displays: User Name, Amount, Status
   - Status pills (Green for Active, Red for Inactive)
   - Navigation controls for pagination
   - Responsive design

## API Endpoint

### Get All Users
```
GET http://localhost:3001/users
```

**Response Format:**
```json
[
  {
    "id": 1,
    "name": "Rajan Kumar",
    "status": "Active",
    "amount": "$400"
  }
]
```

**Status Values:**
- `Active` - User is active
- `Inactive` - User is inactive

## Data Filtering

The application supports real-time filtering by:
- **Search Text**: Filter users by name (case-insensitive)
- **Status**: Filter by Active/Inactive status
- **Combined Filters**: Search and status filters work together

## State Management

### Custom Hooks

**usePersistedState Hook** (`src/hooks/usePersistedState.js`)
- Saves state to localStorage
- Retrieves persisted state on app load
- Usage: `const [value, setValue] = usePersistedState('key', defaultValue)`

### React Hooks Used
- `useState` - Component state
- `useEffect` - Side effects and data fetching
- `useMemo` - Memoized filtered results

## Key Features Implementation

### Loading States
- Loading screen appears while fetching from API
- Error screen displays on API failures

### Error Handling
- Graceful error handling for API failures
- User-friendly error messages

### Icons
- react-icons library for pagination arrows
- Black color for UI consistency

### Responsive Design
- Mobile-first approach using Tailwind CSS
- Grid layout: 1 column on mobile, 2 columns on large screens
- Cards adapt to screen size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Workflow

1. Make changes to components in `src/`
2. Vite automatically hot-reloads changes
3. Check browser console for errors
4. Commit changes to Git
5. Push to GitHub remote

## Git Configuration

The project is already configured with:
- User: Rajan Kumar
- Email: rajan.kumarsvce@gmail.com
- Remote: https://github.com/8076831265/Ciroos_Test.git

To push new commits:
```bash
git add .
git commit -m "Description of changes"
git push
```

## Troubleshooting

### API Server Not Running
- Error: `Failed to fetch users / Connection refused`
- Solution: Run `npm run server` in a separate terminal

### Vite Dev Server Issues
- Error: Port 5173 already in use
- Solution: `npm run dev` will automatically use the next available port

### Tailwind Styles Not Applying
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server: `npm run dev`

### Git Push Authentication Error
- Error: `Permission denied`
- Solution: Clear cached credentials and re-authenticate with GitHub

## Performance Optimizations

- Memoized filter results using `useMemo`
- Efficient re-renders with proper hook dependencies
- Lazy pagination (only displays 5 rows at a time)
- CSS-based styling (no runtime CSS-in-JS)

## Future Enhancements

- User CRUD operations (Create, Read, Update, Delete)
- Advanced filtering options
- Export data to CSV
- User profile details modal
- Sorting by different columns
- Dark mode theme
- Real backend API integration

## License

This project is part of the Ciroos Assignment.

## Support

For issues or questions, please refer to the GitHub repository: https://github.com/8076831265/Ciroos_Test.git
