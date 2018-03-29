# Treasure map

The treasure map is deployed on Heroku [here](https://treasure-map.herokuapp.com/).

## How to use?

1. Enter your map parameters:

- `C - w - h`: the width and height of the map
- `M - x - y`: the position of a mountain
- `T - x - y - q`: the position and quantity of a treasure
- `A - name - x - y - direction - movement`: the name, position, direction and movements of an adventurer

All parameters are **int** except:
- `name`: **string**
- `direction`: **string** in list `['N', 'E', 'S', 'W']` for *North*, *East*, *South* and *West*
- `movement`: **string** in list `['A', 'G', 'D']` for *advance*, *turn left* and *turn right*

2. Display any step of the map state with arrows below the map

## Map rules

The winning adventurer is the one that looted the more treasures at the end of
all adventurers movements.

Adventurers are moving on the map by the following rules:
- Adventurers are moving on the map one after the other at every turn
- Mountains cannot be passed through
- Treasures are looted one by one by an adventurer passing through
- Adventurers cannot collide each other
