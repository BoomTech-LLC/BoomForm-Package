# boomfom

> Advanced Form Builder

[![NPM](https://img.shields.io/npm/v/boomform.svg)](https://www.npmjs.com/package/boomform)

## Getting Started
Hey and welcome. You have started the development with the most advanced and easy form Builder

### Why BoomForm ?
Using Boomform you don’t need to take care of data structure, fields re rendering etc… Boomform will do it for you. You just need to tell the program where your fields should be located and Boomform will automatically create a state for them and follow your fields lifecycle.

### Installation
```bash
npm install --save boomform
```

### First Use
Firstly you need to export `BoomForm` and `Input` components from the boomform.

| Component | Description |
| --- | --- |
| BoomForm | BoomForm is literally your state keeper. You can’t use form data outside of this component (About data usage read in Data usage section).  And all components, imported from BoomForm, you can use only inside of this component. |
| Input | Input is a simple field (more about this and other fields read in fields section) |

There you go. Just write the BoomForm component and pass as a child whatever content you want with the Input component. 

Example:
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
Result: <br/>
![image](https://user-images.githubusercontent.com/81797642/128043746-3f738a57-47a4-4974-8f08-136313b837ce.png)

If you have done everything as it is described above, everything should be fine. So that’s it. You have created your first form with BoomForm. Congratulations !. Keep going and read more in the next sections. and you will learn how to create more complicated forms as easy as this one

## Principals
Please read this section carefully and try to understand. If you will understand everything written below, you will discover the most awesome and easiest way of working with forms

### Data Usage
So here is the most interesting part and the main reason why use BoomForm. Just follow the steps described below and you will get the whole state.

1. First of all, for more readable code let's create one more component and call him `Store`
1. In the `Store` component import `useContext` from react 
1. In the `Store` component import `Context` from `boomform` 
1. Declare a new variable named `state` which is equal to `useContext`
1. Pass `Context`, which is exported from `boomform`, as a parameter to `useContext` 
1. Just console the `state` variable
1. Get back to the main component and import there `State` component
1. Pass the `State` component as a child to `BoomForm` component

That’s it. Just open console and type something in your input and check the results

Example: <br />
_App.js_
```jsx
import React from 'react'
import { BoomForm, Input } from 'boomform'
import State from './State'
 
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

_State.js_
```jsx
import { useContext } from 'react'
import { Context } from 'boomform'
 
const State = () => {
  const store= useContext(Context)
 
  console.log(store)
 
  return null
}
 
export default State
```
If you have done everything right you will get an object in your console with two main keys `state` and `actions`
About `actions` you can read in the next section. 
For now let's take a look at the state object. 
All your data is stored in the `state`

| Key | Description |
| --- | --- |
| fields | fields is an array where fields are kept as structured nested objects. There you can see what fields you have, what parameters you have given to your fields, etc... |
| values | The `values` is the main object where all data, filled by your user or from initial values, is stored. (More about `values` object structure ID & splitting section) |
| touched | in the `touched` object you can find which field is touched. The object keys are the id-s of your fields and they are all false by default, So the first time when your user changes the field, the value of the changed field will be true.  |
| errors | in errors you can find the fields which haven’t passed the validation rules. you have also the messages which you have set in validation rules (More about errors read in Fields section) |


### ID & splitting
Every field should have a unique id. The id can be string or integer. By that Id you have to identify the data which your user has filled. In the `values` object the id, which you have given before, is the key of the filled value. There’s only an exception for Select, Radio and Checkbox, see more about that here

Example:
```jsx
<>
  Name
  <Input id='1' type='text' />
  Surname
  <Input id='2' type='text' />
</>
```
Input:
```json
values: {
  "1": "Jon",
  "2": "Doe"
}
```

Great. So what if you want to keep these two values under one key.
In that case you need to just use dot. Yeah simple `.` symbol. Just take a look at this example

Example:
```jsx
<>
  Name
  <Input id='1.name' type='text' />
  Surname
  <Input id='1.surname' type='text' />
</>
```
Input:
```json
values: {
  "1": {
    "name": "Jon",
    "surname": "Doe"
  }
}
```

And yes this works for as many levels as you want.

Example:
```jsx
<>
  Name
  <Input id='1.name.first' type='text' />
  Surname
  <Input id='1.name.last type='text' />
  Address
  <Input id='1.address type='text' />
</>
```
Input:
```json
values: {
  "1": {
    "address": "New York",
    "name": {
      "first": "Jon",
      "last": "Doe"
    }
  }
}
```

## Fields

Fields is the components which is returning simple html elements already connected with store.

### Actions

All Fields have all three actions described below.

__onChange__ <br />
It fires every time when the user changes the value of the field <br />
As an attribute you can get one object which keeps the following data 
| Key | Description |
| --- | --- |
| e | The default event which is taken from actual HTML |
| field | All parameters you have pass to the changed field |
| id | The unique identification of your field |
| value | The last value which user have changed |

__onBlur__ <br />
It fires every time when the user clicks outside of the field <br />
As an attribute you can get one object which keeps the following data 
| Key | Description |
| --- | --- |
| e | The default event which is taken from actual HTML |
| field | All parameters you have pass to the changed field |
| id | The unique identification of your field |
| value | The last value which user have changed |

__onClick__ <br />
It fires every time when the user clicks on the field <br />
As an attribute you can get one object which keeps the following data 
| Key | Description |
| --- | --- |
| e | The default event which is taken from actual HTML |
| field | All parameters you have pass to the changed field |
| id | The unique identification of your field |
| value | The last value which user have changed |

> Every other attribute will be given to actual HTML input

### input

| Key | Type | Description | 
| --- | --- | --- |
| id | _string_ or _number_ | The Field Identifier |
| type | enum ( _text_, _number_, _password_, _phone_, _email_ ) | The HTML input type. All of them should be text input. This is for identifying inputted text type |
| initial |  _string_ | The default value |

__validation__
| Key | Type | Description | 
| --- | --- | --- |
| required | _object_ | _msg_ : The message which will appear in the `errors` object |
| min | _object_ | _msg_ : The message which will appear in the `errors` object <br /> _type_ : The `type` can be `length`, `char` or `word` <br /> _value_ : The qunatity of the type |
| max | _object_ | _msg_ : The message which will appear in the `errors` object <br /> _type_ : The `type` can be `length`, `char` or `word` <br /> _value_ : The qunatity of the type |
| email | _object_ | _msg_ : The message which will appear in the `errors` object |
| phone | _object_ | _msg_ : The message which will appear in the `errors` object |
| url | _object_ | _msg_ : The message which will appear in the `errors` object |

Example:
```jsx
  <Input
        id='1'
        type='text'
        placeholder='example@mail.com'
        initial='test'
        validation={{
          required: { msg: 'This Field is Required' },
          min: {
            msg: "Text can't be less than 2 chars",
            value: 2,
            type: 'char'
          },
          max: {
            msg: 'Text should be more than 5 words',
            value: 5,
            type: 'word'
          },
          email: {
            msg: 'The text type should be email'
          }
        }}
      />
```

### textarea

| Key | Type | Description | 
| --- | --- | --- |
| id | _string_ or _number_ | The Field Identifier |
| initial |  _string_ | The default value |

__validation__
| Key | Type | Description | 
| --- | --- | --- |
| required | _object_ | _msg_ : The message which will appear in the `errors` object |
| min | _object_ | _msg_ : The message which will appear in the `errors` object <br /> _type_ : The `type` can be `length`, `char` or `word` <br /> _value_ : The qunatity of the type |
| max | _object_ | _msg_ : The message which will appear in the `errors` object <br /> _type_ : The `type` can be `length`, `char` or `word` <br /> _value_ : The qunatity of the type |
| email | _object_ | _msg_ : The message which will appear in the `errors` object |
| phone | _object_ | _msg_ : The message which will appear in the `errors` object |
| url | _object_ | _msg_ : The message which will appear in the `errors` object |


Example:
```jsx
  <Textarea
    id='2'
    placeholder='http://'
    initial='http://'
    validation={{
      required: { msg: 'This Field is Required' },
      min: {
        msg: "Text can't be less than 2 chars",
        value: 2,
        type: 'char'
      },
      max: {
        msg: 'Text should be more than 5 words',
        value: 5,
        type: 'word'
      },
      url: {
        msg: 'The text type should be url'
      }
    }}
  />
```

### file

| Key | Type | Description | 
| --- | --- | --- |
| id | _string_ or _number_ | The Field Identifier |

__validation__
| Key | Type | Description | 
| --- | --- | --- |
| required | _object_ | _msg_ : The message which will appear in the `errors` object |

Example:
```jsx
  <File
    id='3'
    validation={{
      required: { msg: 'File Upload is required' }
    }}
  />
```


### checkbox

| Key | Type | Description | 
| --- | --- | --- |
| id | _string_ or _number_ | The Field Identifier |
| initial |  _boolean_ | The default value |
| name | _string_ or _number_ | By this parameter you can group checkboxes |
| value | _any_ | The value of this parameter you can get in `values` object |

__validation__
| Key | Type | Description | 
| --- | --- | --- |
| required | _object_ | _msg_ : The message which will appear in the `errors` object |

Example:
```jsx
  <Checkbox
    id='4.yes'
    name='yes_or_no'
    value='Yes'
    validation={{
      required: { msg: 'barev' }
    }}
  />
  <Checkbox id='4.no' name='yes_or_no' value='No' />
```

### radio

| Key | Type | Description | 
| --- | --- | --- |
| id | _string_ or _number_ | The Field Identifier |
| initial |  _boolean_ | The default value |
| name | _string_ or _number_ | By this parameter you can group radios |
| value | _any_ | The value of this parameter you can get in `values` object |

__validation__
| Key | Type | Description | 
| --- | --- | --- |
| required | _object_ | _msg_ : The message which will appear in the `errors` object |

Example:
```jsx
  <Radio
    id='5.yes'
    name='yes_or_no'
    value='Yes'
    validation={{
      required: { msg: 'barev' }
    }}
  />
  <Radio id='5.no' name='yes_or_no' value='No' />
```

### options

| Key | Type | Description | 
| --- | --- | --- |
| id | _string_ or _number_ | The Field Identifier |
| initial |  _boolean_ | The default selected option key |
| options | _array_ | By this object you will pass the options of select. This is how nested object should look like <br>  _key_ (identifier of option), _value_ (text which will be shown), any other parameter will be avalivable in `values` object |

__validation__
| Key | Type | Description | 
| --- | --- | --- |
| required | _object_ | _msg_ : The message which will appear in the `errors` object |

Example:
```jsx
  <Select
      id='6'
      initial='1'
      options={[
        { key: 'placeholder', value: ' -- Choice One -- ' }
        { key: '1', value: 'Today' },
        { key: '2', value: 'Tomorrow' },
        { key: '3', value: 'Next Week' }
      ]}
    />
```
