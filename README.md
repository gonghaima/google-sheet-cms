# Using React + Google Sheets as your CMS

![react google sheet](md/reactgooglesheet.jpeg)

---

[Source](https://medium.com/@ryan.mcnierney/using-react-google-sheets-as-your-cms-294c02561d59)

I’ll start this tutorial by admitting you shouldn’t actually use Google Sheets as your CMS for a production level site or project. However, a few use cases come to mind:

- For non-technical people to have write access to your “database”
- Ability to send any Google Sheet data to a react application
- React practice

By the end of this tutorial, you will be able to serve up any data from a Google Sheet into a real React app. Let’s get started.

---

For this tutorial, we are going to use create-react-app as our starting point. Why create-react-app? It’s simple to use (no wepback or babel configuration) and it works. First, create a new directory and cd into it.

```shell
npx create-react-app sheets-cms-demo
cd sheets-cms-demo
npm start
```

- nstructions for npm 5.1 or earlier
- Full details into create-react-app here

Your browser should open to localhost:3000 and display the following:

![welcome page](md/welcomescreen.png)

Now, we’ll jump into the code. Let’s take a quick look at the file structure create-react-app sets up automatically:

```markdown
sheets-cms-demo
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.js 
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    └── registerServiceWorker.js
// App.js is where will will be making the majority of our changes.
```

Open App.js and inspect the main component that creates your browser view. Any saved changes made to App.js will automatically be reflected in your browser. See example of a change below:

![hot module reload](md/hmr.gif)
