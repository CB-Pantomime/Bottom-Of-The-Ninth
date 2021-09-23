# Project_Zero  -CB
# Bottom of the 9th  (game)

## Index:

Scope 
User Stories
Technologies
Approach
Wireframes
Milestones


## Scope
Synopsis:
It's the bottom of the ninth inning. The game is tied. If the home team can score a run they get a home town parade. Unfortunately, they are up against the league's best meanest closer.

Origin:
Bottom of the 9th originated as a table-top dice and card game for two players involving variable player strengths, bluffing/deduction, and die-rolling. This MVP version of the game is simplified to its core game mechanics and story line. 

Why:
The game I can first remember playing as a kid was an LCD handheld baseball game and I remember getting so frustrated with it, as I couldn’t possibly score or get any sort of fun out of it, that I smashed it and threw it in the backyard. I was definitely scolded for that behavior. So reaching back to my earliest game experience I thought I’d make peace with that scenario and put together a simple baseball game based off of the table top version that I had recently played. 


## User Stories
As the MVP version, it’s almost too simple. By clicking the ‘Start Game’ button the user will have revealed a div - p that displays the first ‘wind up’ and ‘pitch’, as well as the ‘Swing’ button. After the ‘Swing’ button is clicked during the pitch, the div - p will continue to display current game action/results. When the user reaches the end of the game, by either the ‘home team’ bringing in a run to score, or the ‘away team’ striking out three batters, a winner result and end of game message will display, and the ‘Swing’ button will be removed from view. 


##Technologies 
My beautiful friend, JavaScript, and its cousins HTML and CSS. 


## Approach
For the most part, I started with the end result desired for the MVP version of the game. I wrote out how the game would be able to conclude and worked back from there. I looked at the necessary variables to track the current game status and how to send them through the conditional statements. One small example, I knew that I wanted to start with the most basic structure and mechanics, so I started with a static ‘pitching’ value being compared against a randomly selected ‘hit’ value. By rewriting the goal and plan I realized that if the value was static, and did not yet require user input or interactivity, that I could just use the randomly generated ‘hit’ value and it only need be evaluated against itself, and against itself incrementally toward a win or lose game outcome. Boiling down the plan to its core essentials has taught me a lot about how all of the pieces really fit together. 


## Wireframe

