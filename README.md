# Build Order Tool for Age of Empires IV

This Build Order Tool will allow users to view, create, and share build orders standard format via the web app.
The web app is no longer online; see: https://www.lenpolygon.com/post/age4builder-updated-to-v1-0

## Goals of the Build Order Tool

This tool started mainly as a coding challenge and to learn some Javascript along the way.
Now I've identified the following goals for this tool to fulfill:

1. Viewing builds
   - Tool must work on both computers and mobile devices
   - Must be quick and responsive for mobile devices
   - Images and text must be easy to be read at glance
   - (FUTURE) Make builds "play" in Real-time with voice-over

2. Creating builds
   - Creating builds must work on computers (because one requires a computer for AoE 4)
   - A 'standardized' format must be given to allow for creators to use a similar format, this will help with readability of each build
   - Icons can be dragged into the build and together with text make up the final build
   - Standard formatting tools for tables
   - Make it possible to edit builds on mobile devices
   - (FUTURE) Add in game-specifics like Map-type or oppossing Civilizations 

3. Sharing builds
   - Share created builds with other via custom URLs
   - Allow users to browse popular builds

## Why Github?

As per request I figured out how to put the project on Github. 
I will use this to track issues for myself and allow others to help building this tool into something amazing!

## Getting Started

To run the project locally first clone the repo with
```
git clone git@github.com:LENpolygon/Build-Order-Tool-AoE4-.git
```

next go into the root of the cloned repo
```
cd Build-Order-Tool-AoE4-
```

now, run the dev server to get started testing locally! (Requires [Python3](https://www.python.org/downloads/))
```
python devserver.py
```
### Dev Server Notes
The Dev Server caches and serves images from the prod `/img` dir to avoid storing the game textures in the git repo.
The first time opening a page  will be slow as it retrieves and caches the required images.

## Contact

I'm sure you can contact me through here. If you're looking for something else then you can find me on lenpolygon.com

Once again, the Build Order Tool can be found on: 
Now go make some awesome builds and enjoy the game!
