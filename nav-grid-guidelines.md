### Don't overuse the DDSTable's columns 

Mobile RPG has two navigational "grids": the DDSList and the DDSTable. 

* The DDSList has four styles. It can render itself as:
    * A checkbox list
    * A radio button list
    * A dropdown list
    * A navgational grid

For this conversation, we comparing the DDSList's "navigation grid" style versus the DDSTable. Both of these two controls present a list from the user generally selects a row for further processing. 

As a navigational grid, the DDSList displays only one column, while the DDSTable displays multiple columns. The DDSTable was introduced because many Mobile RPG developers insisted they needed a subfile-like control for smartphone apps. 

In many cases, trying to use a multiple-column grid for navigation in a smartphone app is quite challenging to do well. There simply isn't enough screen real estate available on a smartphone in portrait mode (and users don't want to swivel them for your app!) to show many columns. 

Take a look at the two examples below. The panel on the left tries to shoe-horn four columns into the display, while the one on the right only uses two. The display on the right doesn't show as much information, but its clearer display makes it much easier for a user to find a row to see additional information. 

![](https://asna.com/filebin/marketing/article-figures/mobile-ui-guidelines/bad-and-good.png)

#### Other considerations: 

* Mobile apps (espeically those targeting smartphones) are usually built on the "just enough for now" principle. That is, with screen real estate at a premium, show the user just enough to proceed. On 24x80 character-based screens there was plenty of room to show a lot info (and we usually showed too much there!) but the smartphone isn't that generous. Let you user get to the needed data in easy to use and undestand layers. 

* Consider truncating column values before populating the DDSTable. Users don't need to see every character of every name to find what's needed. 

* Use padding and line spacing generously. Apple mobile UI guidelines say that a rectangle of at least 44px by 44px is the minimal useful "tapping zone" for most users. The closer your rows are the more likely it is for the user to tap the wrong row. 

* Always zebra-stripe the rows. Make it easy for users to follow a row's data across the screen (do so requires minimal CSS). 

* There are times when you'll probably need to use a DDSTable to display a densely populated matrix. But do so only when the data absolutely requires it. Otherwise use as few DDSTable columns as necessary to let your users rationally work their way to the data they need to see. 




