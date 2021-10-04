# boomform


[![NPM](https://img.shields.io/npm/v/boomform.svg)](https://www.npmjs.com/package/boomform)
[![github](https://badgen.net/npm/dependents/boomform)](https://www.npmjs.com/package/chalk?activeTab=dependents)
[![github](https://badgen.net/github/stars/BoomTech-LLC/BoomForm-Package)](https://github.com/BoomTech-LLC/BoomForm-Package)
[![github](https://badgen.net/github/issues/BoomTech-LLC/BoomForm-Package)](https://github.com/BoomTech-LLC/BoomForm-Package)
[![github](https://badgen.net/github/last-commit/BoomTech-LLC/BoomForm-Package/main)](https://github.com/BoomTech-LLC/BoomForm-Package)
[![NPM](https://badgen.net/npm/v/boomform)](https://www.npmjs.com/package/boomform)
[![NPM](https://badgen.net/npm/dt/boomform)](https://www.npmjs.com/package/boomform)

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://form.boomform.com/">
    <img src="https://cdn.boomte.ch/images/BoomForm.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">BoomForm</h3>

  <p align="center">
    Building a form is as easy as making coffee. :coffee:
    <br />
    <a href="https://form.boomform.com/"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://codesandbox.io/s/objective-tharp-irrv2">View Demo</a>
    ·
    <a href="https://github.com/BoomTech-LLC/BoomForm-Package/issues">Report Bug</a>
    ·
    <a href="https://github.com/BoomTech-LLC/BoomForm-Package/issues">Request Feature</a>
  </p>
</p>




## Getting Started
Hey and welcome. You have started the development with the most advanced and easy form Builder

### Why BoomForm ?
😎 Using Boomform you don’t need to take care of data structure, fields re-rendering etc… 

🚀Boomform will do it for you. You just need to tell the program where your fields should be located and Boomform will automatically create a state for them and follow your fields lifecycle.

[Full documentation here](https://form.boomform.com/)

## Code Example
Just write the BoomForm component and pass as a child whatever content you want with the Input component.

```jsx
import React from 'react'
import { BoomForm, Input } from 'boomform'
 
const App = () => {
  return (
    <BoomForm>
      Simple Input:
      <Input id='1' type='text' />
    </BoomForm>
  )
}
 
export default App
```
There you go as easy as that. Now BoomForm is keeping all your state and following the input component lifecycle.

## Data Usage Example
We handle and keep all needed data in store so all you need is to easily import it from store and use wherever you need

For getting store you just need to import `useContext` hook from react and `Context` from `boomform` and simply declare an variable which is equal to `useContext` with `Context` attribute

```jsx
import React, { useContext } from 'react'
import { BoomForm, Input, Context } from 'boomform'

const State = () => {
  const store= useContext(Context)
 
  console.log(store)
 
  return null
}

const App = () => {
  return (
    <BoomForm>
      Simple Input:
      <Input id='1' type='text' />
      <State />
    </BoomForm>
  )
}
 
export default App
```
Store contains all essential attributes like fields, values, touched, errors. You can read more about it [here](https://form.boomform.com/start#data-usage)

Also You can check the [example](https://codesandbox.io/s/boomform-forked-l54j1) for more clarity

## Made in BoomTech 

<img src="https://cdn.boomte.ch/images/boomtechdeveloper/logo.svg" height="100">

![This is an image](https://cdn.boomte.ch/images/TikoN.png?x=2) | ![This is an image](https://cdn.boomte.ch/images/TikoP.png?x=1) | ![This is an image](https://cdn.boomte.ch/images/SahakS.png?x=2) 
-- | -- | -- 
Tigran Nazaryan | Tigran Paployan | Sahak Sahakyan
