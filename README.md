# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![image](https://github.com/Nospiel-code/fm-intro-component-with-signup-form/assets/130290610/a979f209-0422-42d6-89ee-64c7a0a90bb3)
![image](https://github.com/Nospiel-code/fm-intro-component-with-signup-form/assets/130290610/578ed932-1fef-43ee-8cf8-101ddf88a2cc)
![image](https://github.com/Nospiel-code/fm-intro-component-with-signup-form/assets/130290610/e13d449d-6dde-41a0-8d77-fb6afb74ac97)




### Links

- [Solution URL](https://github.com/Nospiel-code/fm-intro-component-with-signup-form)
- [Live Site URL](https://nospiel-code.github.io/fm-intro-component-with-signup-form/)

## My process

### Built with

- Semantic HTML5 markup
- TailwindCSS
- Flexbox
- HTML Forms
- Mobile First Workflow

### What I learned

I learned how to build a form including form validation using TailwindCSS

```html

<form class="group space-y-4 text-secondaryBlue100 font-semibold"
              novalidate>
          <div>
            <input
              class="peer border-2 w-full border-secondaryBlue900 py-3 rounded-md pl-4 placeholder:font-semibold placeholder:text-secondaryBlue100 focus:border-secondaryBlue700 hover:border-secondaryBlue700 invalid:[&:not(:placeholder-shown):not(:focus)]:border-primaryRed"
              type="text" 
              placeholder="First Name"
              required>
            <span class="hidden w-full text-right text-primaryRed text-xxs italic peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">First Name cannot be empty</span>
          </div>
          <div>
            <input
              class="peer border-2 w-full border-secondaryBlue900 py-3 rounded-md pl-4 placeholder:font-semibold placeholder:text-secondaryBlue100 focus:border-secondaryBlue700 hover:border-secondaryBlue700 invalid:[&:not(:placeholder-shown):not(:focus)]:border-primaryRed"
              type="text" 
              placeholder="Last Name"
              required>
            <span class="hidden w-full text-right text-primaryRed text-xxs italic peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">Last Name cannot be empty</span>
          </div>
          <div>
            <input
              class="peer border-2 w-full border-secondaryBlue900 py-3 rounded-md pl-4 placeholder:font-semibold placeholder:text-secondaryBlue100 focus:border-secondaryBlue700 hover:border-secondaryBlue700 invalid:[&:not(:placeholder-shown):not(:focus)]:border-primaryRed"
              type="email" 
              placeholder="Email Address"
              required
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
            <span class="hidden w-full text-right text-primaryRed text-xxs italic peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">Looks like this is not an email</span>
          </div>
          <div>
            <input
              class="peer border-2 w-full border-secondaryBlue900 py-3 rounded-md pl-4 placeholder:font-semibold placeholder:text-secondaryBlue100 focus:border-secondaryBlue700 hover:border-secondaryBlue700 invalid:[&:not(:placeholder-shown):not(:focus)]:border-primaryRed"
              type="password" 
              placeholder="Password"
              required
              pattern=".{8,}">
            <span class="hidden w-full text-right text-primaryRed text-xxs italic peer-[&:not(:placeholder-shown):not(:focus):invalid]:block">Password must be at least 8 characters long</span>
          </div>

          <button
            type="submit"
            class="bg-primaryGreen font-normal cursor-pointer w-full py-3 rounded-md tracking-wide text-white uppercase hover:bg-primaryGreenDark group-invalid:pointer-events-none group-invalid:opacity-50">
            Claim your free trial
          </button>
          <p class="text-secondaryBlue700 text-xxs">
            By clicking the button, you are agreeing to our <a href="#" class="text-primaryRed font-semibold">Terms and
              Services</a>
          </p>
        </form>

```


### Useful resources

- [Adding Custom Validation to a Form with TailwindCSS](https://dev.to/deyemiobaa/adding-custom-validation-to-a-form-with-tailwindcss-1e7d) - This site helped me to include the form validation


## Author

- Frontend Mentor - [@Nospiel-code](https://www.frontendmentor.io/profile/Nospiel-code)
- Twitter - [@tomsdev4](https://www.twitter.com/tomsdev4)

