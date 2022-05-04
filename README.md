# Rock, Paper, Scissors

## The Gist of It
Honestly, there's no need to have this file, as RPS is a pretty common exercise
among many newbies such as myself. Nonetheless, I consider it somewhat important
to get into the habit of explaining each project as thoroughly as possible. 

Since it has been quite a while since I have made an update, I might as well treat this
like a brand new project. There'll be a few more changes down to this demo.

Who knows where this'll end up. I initially wanted to make this into a fighting game,
but that may take time away from my other goals...again, we'll see.

## My Process

### Outline
The initial step is to, at the very least, change the God-awful text that I initially entered those years ago.
Besides that, here is the overall outline of my plan:
- removing the prompt/alert box in favor of actual buttons and a more dynamic GUI.
- adding more animation, including an introduction from a character from a Haruki Murakami's 'Kafka on The Shore'.
 - Everytime the user goes to a different tab, either an event will take place, or a new character will replace the previous one (in an orderly fashion...initially).
 - This is where a lot of my time will be spent, but it'll pay off.
- condesnsing the lines of code.
- redesigning the layout by going over the faulty, apparently non-responsive grid-layout of the page.

### Step 1: Reduce code and change input variation
I find that the current code is quite verbose, especially with the excessive reliance on if-else statements,
which is apparently not a favorite coniditional statement to overly use among developers.
I'm going to implement an ingenius algorithm utilizing a two-dimensional array, directly based off of a program that [Lilian Lin wrote](https://medium.com/@linlinghao/write-a-rock-paper-scissors-game-without-if-else-in-javascript-f7e4951de220) for her own RPS project.

## Progress Log

#### 03/28/2022
Cloned the repository; the goal is to create a more GUI-freindly variation of the game.
I may try to reduce the lines of code in this game as well. Goodbye, prompts, hello, buttons! 

#### 04/06/2022 (based on written notes)
Haven't done any edits to the style layout, but I have decided to call the HTML elements through
class, rather than ID's to reduce the lines of code. Only issue is, although they are grouped within
the same class, calling them as if they're arrays doesn't seem to work.

#### 04/09/2022 (based on written notes)
I've realized that utilizing ``document.getElementsByClassName("element")`` isn't an array, but an
array-like object. Oh boy...

#### 04/14/2022 (based on written notes)
After falling into the rabbit-hole of Google, I've learned mroe about the differences between primitive and non-primitive data types, more details about the document object model API and how nodes/nodelists work (to a certain degree). Converting a nodelist, an array-like object, to an array is can be accomplished in a couple ways. either ``array.prototype.slice.call(element)`` / ``[].slice.call(element)`` or ``Array.from(element)``. I initially chose the former, but am going with the latter now. 

For my own referrence, [here is a link that describes the process of nodelist conversion](https://shifteleven.com/articles/2007/06/28/array-like-objects-in-javascript/).

#### 04/23/2022 (based on written notes)
Things are coming together, but I'm not liking the current algorithm that loops through the class button as it requires a bit too much lines of code.

#### 04/26/2022 (based on written notes)
I'm trying to have the object property ``rps.res`` referrence the argument passed within the scope of ``getResults()``, but it's not working at all. 

#### 05/02/2022
After reaching out to a couple people, and a few groups online via chats and forums (to which only one person gave feedback), I decided to worry about the previous issue at a later date, but not dismiss the problem completely. adding ``getResults()`` inside ``userInput`` (name change coming later), and only using ``rps.res`` to increase points and claim the winner, seems to be the best choice of action. Now to start actually replacing the original ``script.js`` file with this new one.

#### 05/03/2022
I'm greatful to have recieved feedback from an online acquaintance. Reason being is the fact that they have made me realize just how cryptic my current code is. As I've learned, to work within a team of developers means to write code that's actually readable (which is why we even use languages that utilizes various layers of abstraction), even if it requires more lines of code. Although I do agree, I'm still convinced there is a way for me condense ``script.js`` to a certain degree without sacrificing some degree of practicality. Then again, this whole thing is an experiment.

## Built With
HTML, CSS, Javascript.

## What I learned
A new way to apply two-dimensional arrays.