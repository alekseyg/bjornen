---
title: Auto expanding textarea in Opera and Konqueror
description: |
  A JavaScript solution for auto-expanding textareas that works in Opera and
  Konqueror, where the common scrollHeight approach fails.
pubDate: 2008-02-25 16:24
---

I recently had to make an auto expanding textarea for a web application and when
it came to Opera, I couldn't find a working solution. The most common way of
making the textarea to auto expand is to compare the `offsetHeight` or
`clientHeight` of the textarea with the `scrollHeight`. This works fine in IE,
Firefox, and Safari (and even allows auto shrinking in IE) but not in Opera or
Konqueror. Some solutions I found divided the number of characters by the number
of rows and cols in the textarea. The problem with this is that many people
don't type everything on one line, so it won't accurately measure how many lines
there are.

After thinking about both of those solutions, I decided to write my own, which
calculates the number of lines based on how many newline characters are in the
text and whether or not each line has more characters than the number of cols.
There is however one catch: for the word wrap to work when there are as many
characters in a line as there are cols in the textarea, the font has to be
monospace, otherwise the script will not work reliably. So, without futher ado,
here's the basic code:

HTML:

```html
<textarea rows="10" cols="40" onkeyup="adjustRows(this);"></textarea>
```

Javascript:

```javascript
function adjustRows(ta) {
  // I use offsetHeight rather than clientHeight because scrollHeight
  // is always bigger than clientHeight in Opera on textareas
  while(ta.scrollHeight > ta.offsetHeight)
    ta.rows++;
  adjustRows2(ta);
}

function adjustRows2(ta) {
  // detects Opera or Konqueror
  if (window.opera || navigator.vendor.indexOf("KDE") > -1) {
    var lines = ta.value.split("\n");
    var linecount = lines.length;
    for (var line in lines)
      linecount += parseInt(lines[line].length / ta.cols);
    if (linecount > ta.rows)
      ta.rows = linecount + 1;
  }
}
```

Auto shrinking is also possible in IE, Opera, and Konqueror and horizontal
expanding is possible in Firefox, Opera, and Konqueror. If anyone ever uses
that, I can post it too. Note: The script is not perfect, and doesn't calculate
100% acurately, but so far it's the most reliable script for auto expanding a
textarea in Opera I know of.
