# Treasure map

## How to use?

1. Enter your map parameters:

`C - w - h`: width and height of the map
`M - x - y`: position of a mountain
`T - x - y - q`: position and quantity of a treasure
`A - name - x - y - dir - mov`: position, direction and movements of an adventurer

2. Display any step of the map state with arrows below the map

## Map rules

The winning adventurer is the one that looted the more treasures at the end of
all adventurers movements.

Adventurers are moving on the map by the following rules:
- Adventurers are moving on the map one after the other at every turn
- Mountains cannot be passed through
- Treasures are looted one by one by an adventurer passing through
- Adventurers cannot collide each other
