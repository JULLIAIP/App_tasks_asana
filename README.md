# <a href='fluffy-orange.surge.sh'>TASKS</a>

##We use:
<a href='https://vitejs.dev/'>Vite </a>to generate our project
<a href='https://tailwindui.com/'>Tailwindcss</a> along with postcss and autoprefixer for styling
<a href='https://reactrouter.com/en/main'>React-router-dom v6</a>for navigation between pages
<a href='https://github.com/prettier/eslint-config-prettier/blob/main/.eslintrc.js'>Eslint </a>and prettier for code organization during development
In addition to using ReactContext and CustomHooks for general functions.


##Soon:

We will integrate with the Asana API using axios.

##How to use:
Upon first contact with the application, you will see the login and sign-up screen, if it's your first time you must register and you will be redirected to the Board screen, where you can include activities on specific days of the week.

By clicking the eye icon, you can see more details of this task, as well as edit its description and delete it.

Back to the Board screen, we have the function to mark as done, which changes the card color due to the conditional styling done with a ternary operator, and this action also appears on the details screen, changing the status label.
