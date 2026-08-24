# Creatorverse

A React app for keeping track of your favorite content creators. Browse a gallery of creators, open any one of them for a detail view, and add, edit, or delete entries. All data is stored in a Supabase Postgres table and persists between sessions.

## Demo

![Creatorverse walkthrough](docs/demo.gif)

## Tech stack

| Piece | What it's used for |
| --- | --- |
| React 19 | UI components and state |
| Vite | Dev server and production build |
| React Router 7 | Client-side routing via `useRoutes` |
| Supabase | Hosted Postgres database + JS client |
| Oxlint | Linting |

## Completed features

- [x] **Logical component structure in React.** Routing lives in [`App.jsx`](src/App.jsx), each screen is a page in [`src/pages/`](src/pages/), and the reusable creator tile is [`Card.jsx`](src/components/Card.jsx). URL formatting helpers shared by the card and the detail page are factored into [`src/urls.js`](src/urls.js), and the Supabase client is created once in [`src/client.js`](src/client.js) and imported where needed.
- [x] **At least five content creators on the homepage.** The `creators` table is seeded with five: Drew Afualo, Caleb Hearon, Brittany Broski, Julien Solomita, and Vanilla Mace. [`ShowCreators.jsx`](src/pages/ShowCreators.jsx) fetches all rows and renders them into a two-column grid.
- [x] **Each item shows a name, a link, and a short description.** See [`Card.jsx`](src/components/Card.jsx). The link is displayed as a pill showing a cleaned-up version of the URL and opens the creator's real page in a new tab.
- [x] **API calls use the async/await design pattern.** Every read and write is an `async` function using `await`.
- [x] **Clicking a creator opens their details page.** The ⓘ button on each card links to that creator's detail page. (See the note below.)
- [x] **Every content creator has a unique URL.** Detail pages are routed at `/creator/:id` and edit pages at `/edit/:id`, where `id` is the row's primary key, so each creator is directly linkable and reloadable.
- [x] **Details page shows name, url, and description.** [`ViewCreator.jsx`](src/pages/ViewCreator.jsx) reads the `:id` route param, fetches that single row, and lays the photo out on the left with the name, link, and description on the right.
- [x] **The user can edit a creator's name, url, or description.** [`EditCreator.jsx`](src/pages/EditCreator.jsx) loads the existing values into a pre-filled form and writes changes back with a Supabase `update` scoped to the id. Image URL is editable too.
- [x] **The user can delete a creator.** Available from the edit page. Runs a Supabase `delete` on that id and returns to the homepage.
- [x] **The user can add a new creator.** [`AddCreator.jsx`](src/pages/AddCreator.jsx) collects name, url, description, and image URL and inserts a new row.
- [x] **A newly added creator appears in the list.** After a successful insert the app navigates to `/`, and `ShowCreators` refetches the table on mount, so the new creator shows up in the grid immediately.

## Project structure

```
src/
├── App.jsx              route table (useRoutes)
├── App.css              hero banner + header buttons
├── client.js            Supabase client
├── index.css            design tokens (colors, fonts) + global resets
├── urls.js              shared URL formatting helpers
├── main.jsx             entry point, BrowserRouter
├── assets/              bg.jpg, edit.png, info.png
├── components/
│   ├── Card.jsx         creator tile used on the homepage
│   └── Card.css
└── pages/
    ├── ShowCreators.jsx  homepage grid
    ├── ShowCreators.css
    ├── ViewCreator.jsx   /creator/:id detail page
    ├── ViewCreator.css
    ├── AddCreator.jsx    /new
    ├── EditCreator.jsx   /edit/:id
    ├── CreatorForm.css   shared styles for the add + edit forms
    ├── NoMatch.jsx       catch-all 404
    └── NoMatch.css
```