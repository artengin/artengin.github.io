# Terminal Portfolio  

An interactive terminal-style portfolio that mimics a command-line interface.  

#### Live demo: [artengin.github.io](https://artengin.github.io/) · Blog: [artengin.github.io/blog](https://artengin.github.io/blog/)  

## Features  

- Commands for viewing info, projects, contacts and the blog (type `help`)  
- Tab autocompletion, Up/Down command history, clickable commands  
- English/Russian interface and 6 color themes  
- Pure JavaScript, HTML and CSS, no dependencies  

## Run locally  

```bash
python3 -m http.server
```

Opening `index.html` directly does not work: the welcome block is loaded with `fetch`.  

## Editing content  

Projects, contacts, themes and texts are defined as data in `js/script.js`: `projectList`, `contactLinks`, `themeNames` and the `translations` dictionary.  
