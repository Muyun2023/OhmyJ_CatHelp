## Goal
Provide ( in `public/`) the necessary HTML, CSS, and JS files to create the experience shown in the included images
This webpage can be viewed and used by running:
- `npm install` (only required once on any given computer for each project/assignment)
- `node server.js` (starts the server, Ctrl-C to stop running the server)
- Visiting `http://localhost:3000/` in the browser

## Functional 
- Any replacement text demonstrate different line lengths and blocks of different sizes; Any replacement Images are same sizes
- Same HTML used for main navigational menu, both for the "desktop" horizontal menu and the "mobile" hamburger menu
- Elements can be shown or hidden (such as the hamburger menu icon), but not be two different versions of the same content that are in turn shown or hidden
- The logo image is also a link to the "/" page (index.html)
- Activating one of the "Subscribe" buttons (styled to look like links) on the page opens a modal window
- Esc key will close this window
- The form validation is done with JS, not HTML-based
- Fields are tested when their value changes AND when the form attempts to submit
- When validation is passed, the form will submit to "/subscribe"
- When Cancel is pressed the modal closes, regardless validation

## Responsive/Adaptive 
- Both pages have an Adaptive Breakpoint at 44rem
- Both pages are Responsive at sizes other than the Adaptive Breakpoint
- Grading will review from 360px to 1200px in width at standard text sizes
- paddings/margins on elements to maintain some whitespace between text/elements
- The main navigation menu changes from a horizontal menu in desktop sizes to a click-based hamburger menu at mobile sizes
- The footer navigation menu changes from a horizontal menu in desktop sizes to a vertical menu at mobile sizes
- The Home page panels lose the space between them and around them at mobile sizes
- The Home page panels have the text around the images at mobile size, but not at desktop size
- Done with float, using float the way it is meant to be used

## Accessibility
- The pages contain a "skiplink" letting you skip to the main content
- Reasonably resizing text/zooming does not cause your display to become difficult to use
- All forms, menus, buttons, and links must be usable with keyboard as well as mouse
  - The hamburger icon can be reached via keyboard, and is activated with Space/Enter to open the menu
  - Tabbing on the hamburger menu is closed does NOT select (invisibly) one of the menu links. Instead it selects the next visible link on the page
- No information should be conveyed through color differences only
- All form fields should be associated with a `<label>` element that contains useful text
  - And only the label of the element, not additional text like "required" or "This field must..."
- Any form fields that required be visibly and textually marked as required
- All images will have descriptive `alt` attributes
  - These alt attributes describe what the picture is
  - Logo images be either loaded as a background image or use alt=""
- Any icons not required to understand and use the page with a screen reader
  - be aria-label text or visible associated text to explain what the icon is/does

## Appearance 
- The colors used on the page are:
  - papayawhip 
  - burlywood
  - #eee or #eeeeee
  - lime
  - lightcoral
  - black (with 0.7 opacity when used as a backdrop)
  - dodgerblue
  - red
  - blue
  - white
- image dimensions:
  - 100x100px (logo)
  - 200x200px (panels and cards)
  - 125x125px (floating in panels)
- line heights:
  - 1.2 (default)
  - 1.4
  - 1.6
- padding/gaps/margins:
  - 0
  - 0.5rem
  - 1rem
  - 2rem
- font-sizes
  - 1rem (default)
  - 1.2 rem (form buttons)

## Demonstrated Skills 
- Semantic HTML
- Semantic Class names
- CSS Grid
- CSS Flexbox
- 12 column grid layout
- A non-static position property
- Responsive HTML
- Adaptive HTML
- HTML Forms
- JS-based Form validation and reporting
- A dialog element-based modal window
- A hamburger menu using JS

## Extra 
- Transitions/animations on state/visibility
  - include media queries to check prefers-reduced-motion
- additional pages that are linked to on this page and provide content that demonstrates other skills
  - show sufficiently complex understanding
  - provide benefit to the User Experience (UX)

## Additional 
- not use HTML-based form validation (including type="email", use type="text" instead)
- not use float unless wrapping text around an image
- not use tables or table-layouts unless showing a table of data
- not use any CSS preprocessor (SASS/Less/etc)
- not use external CSS
  - Exception: use icons from css.gg by copying the CSS snippet(s) into css file
    - include a comment in your CSS saying "below CSS adapted from https://css.gg under the MIT License"
    - modify/adapt/rename the CSS from css.gg. The comment will still apply
- images must be ones personally own, be from placekitten.com, or from `http://unsplash.com`  
  - have any images you use downloaded into your repo
  - include a `images.txt` file in your repo (at the same level as package.json, not in `public/`) and list the url of each image you downloaded along with the url of the license allowing you to use those images
  - NOT download and use random images from the internet/web. Only use images from the listed sites (or you own) and that have permission to use

## Instructions
* start from the up-to-date main branch (`git checkout main; git pull origin main`)
* Create a feature branch named 'project2' (`git checkout -b project2`)
* Add the necessary files to have the required features
  - running `npm install` will create a `package-lock.json` file and a `node_modules` directory.  These should NOT be added to your commit.
* add, commit, and push the branch to github
* Create a PR to merge to main
* Be sure to include the TA(s) and myself reviewer(s)


