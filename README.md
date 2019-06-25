# localclock.js - Live display of users local time
[![USES-JAVASCRIPT](https://img.shields.io/badge/USES-JAVASCRIPT-09aba9.svg)](https://shields.io/) [![USES-HTML](https://img.shields.io/badge/USES-HTML-09aba9.svg)](https://shields.io/) [![OPENSOURCE](https://img.shields.io/badge/OPEN-SOURCE-09aba9.svg)](https://shields.io/) [![Say Thanks!](https://img.shields.io/badge/SAY-THANKS-ff69b4.svg)](https://saythanks.io/to/JordyValentine)
## What is it?
This is a simple script that shows the users local time and updates live.
There are two versions, one shows the date one doesn't, pretty easy

  - Small only 5.12kb for the large version
  - Easy to use and good for learning
  - Coded years ago so it works on most broswers, will display a static clock in dinosaur broswers

## Why?
I found this in some old backups, not sure when I wrote it but it would have been years ago. I was probably following a tutorial or something.
I went through and commented the code with some information about configuring the script, but the code could use some clean up/modernising

# Usage
The body tag should have the onLoad tag like below
```html
<body onLoad="show_clock()">
```
The body tag attribute can cause conflicts with some scripts but that's rare, if that's the case I'd recommend placing the clock in a seperate file and using an include where youwant it displayed

To display the clock just include the js file you want to use, eg:
```javascript
<script language="javascript" src="localclock.js"></script>
```

That's pretty much it, the JS has some styling built in, but you can easily remove those and style the output with a css class.
**I've include some demo examples and the code is commented to help you wade through it**

## License
**Have fun, do whatever you want with it, but if you found it useful a thanks would be appreciated :)**

[![Say Thanks!](https://img.shields.io/badge/SAY-THANKS-ff69b4.svg)](https://saythanks.io/to/JordyValentine)
