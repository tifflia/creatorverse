# WEB103 Prework - *Creatorverse*

Submitted by: **Tiffany Liang**

About this web app: **A React app for keeping track of your favorite content creators. Browse a gallery of creators, open any one of them for a detail view, and add, edit, or delete entries. All data is stored in a Supabase Postgres table and persists between sessions.**

Time spent: **8** hours

## Required Features

The following **required** functionality is completed:

- [x] **A logical component structure in React is used to create the frontend of the app**
- [x] **At least five content creators are displayed on the homepage of the app**
- [x] **Each content creator item includes their name, a link to their channel/page, and a short description of their content**
- [x] **API calls use the async/await design pattern via Axios or fetch()**
- [x] **Clicking on a content creator item takes the user to their details page, which includes their name, url, and description**
- [x] **Each content creator has their own unique URL**
- [x] **The user can edit a content creator to change their name, url, or description**
- [x] **The user can delete a content creator**
- [x] **The user can add a new content creator by entering a name, url, or description and then it is displayed on the homepage**

The following **optional** features are implemented:

- [ ] Picocss is used to style HTML elements
- [x] The content creator items are displayed in a creative format, like cards instead of a list
- [x] An image of each content creator is shown on their content creator card

The following **additional** features are implemented:

* [x] A custom 404 page for any URL that doesn't match a route, with a link back to the gallery
* [x] Creator URLs are cleaned up for display (protocol, `www.`, and trailing slash stripped) while the actual link is normalized with `https://` so it isn't treated as a relative path — shared between the card and detail view in `src/urls.js`
* [x] Fully custom CSS (background image, card layout, form styling) instead of a component library

## Video Walkthrough

![Creatorverse walkthrough](docs/demo.gif)

## Notes

The hardest part of this project was figuring out how all four pages fit together and what information had to travel along each link. Writing the individual components felt straightforward, but I also had to decide what each route's path should look like, which paths needed a dynamic segment, and where the catch-all belonged.

The bigger conceptual hurdle was working out **what gets passed through a link versus what gets passed through props**. At first I assumed the detail page could just receive the creator object the way `Card` does, since the homepage already had all the data. But a link only carries a URL, so the only thing that survives a click is whatever I encode in the path (the id).

- `ShowCreators` fetches every creator and passes each one's fields down to `Card` as props, because they're rendered together in the same tree.
- `Card` doesn't hold data itself. It just reads props and builds links out of the id it was given: `/creator/{id}` and `/edit/{id}`.
- `ViewCreator` and `EditCreator` receive *nothing* as props. They pull the id out of the URL with `useParams()` and re-fetch that one row from Supabase themselves.

## License

Copyright [2026] [Tiffany Liang]

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.