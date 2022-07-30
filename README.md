# Introduction to JSX and it's Relation to React

In order to start this code you will need to fork this repo to your personal github then clone that down to your machine.

Once cloned you will need to do the following:
```
npm install
npm start
```

This will install dependencies as well as starting the react application. Keep in mind we are going to focus only on the JSX aspect instead of the React.

## Supporting Documentation
[React JSX Docs](https://reactjs.org/docs/introducing-jsx.html)\
[JSX More In Depth](https://www.reactenlightenment.com/react-jsx/5.1.html)

## Today's Goal
We are going to building some React components based on our understanding of JSX and make some cards that display a full name and an icon based on some data.

## Tracking my remote branch from you local machine
In order to easily get my code changes from my repo to your local machine that is listen to your fork of my repo you can do the following. 
```
git remote add coworker git://pkennedytx1/jsx-intro.git
get fetch coworker
git checkout --track coworker/branchName
```
We are adding a new keyword called coworker which bassically sets up another origin for your local to listen to. Which you can then create a branch on your origin and save those changes.

Once you do this you can now checkout a local branch named the same as the branch that you checked out from my repo and pull my changes
```
git checkout branchName
git pull
```
When ever you want to get another branch do the following:
```
git checkout --track coworker/branchName
git checkout branchName
git pull
```