git clone https://github.com/Hassassin-10/GitHub-User-Search-Web.git
   cd GitHub-User-Search-Web
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Access the application**:
   Open your browser and navigate to `http://localhost:5000`

## 💻 Usage

1. On the homepage, enter a GitHub username in the search bar
2. Click the "Search" button or press Enter
3. View the user's profile information and latest repositories
4. Click on repository links to visit them on GitHub
5. Use the "Back to Search" button to search for another user

## 📁 Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/       # React components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Utility functions and API calls
│   │   ├── pages/           # Page components
│   │   └── App.tsx          # Main application component
│   └── main.tsx             # Application entry point
│   └── lib/queryClient.ts   # API request handling and caching setup
├── server/
│   ├── index.ts             # Express server setup
│   ├── routes.ts            # API routes
│   └── storage.ts           # Data storage and GitHub API integration
└── shared/
    └── schema.ts            # Shared TypeScript types and Zod schemas
