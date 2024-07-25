## Important Links
[Models Link](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)

## Initialize an empty node project
Use command `npm init` or `npm init -y` to create a package.json file.

## Setup a Profession Backend Project:
1.  Create a `.gitignore` file:
    - `.gitignore` file is used to ignore specify the files you don't want git to keep tack of.

    - **Git tracks files, not folders:** For example, if you create an empty folder, Git won't track it. To make Git track this folder, you need to create a file inside it. If you don't want to create any specific file at the moment, you can create a `.gitkeep` file. This is an empty file, and it's standard practice to name it .gitkeep to ensure Git tracks the folder.

    - There are some .gitignore file generators that can generate a .gitignore file for you.

2.  Create a `.env` file:
    - Files containing environment variables.
    - This file is typically ignored by Git because it contains sensitive information such as API keys, database credentials, and other configuration details that should not be shared publicly.

3.  Create a  `.env.sample` file:
    -  Used to share a template of the required environment variables.

4.  Create a `src` folder:
    - Contains all the source code files related to the project. This is where you organize and store your project's main codebase.

    - Inside this 'src' folder, w e have to create some files and folder:

    - Files Include:
        - app.js
        - constants.js
        - index.js
    
    - Folders Include:
        - controllers
        - db or database
        - middlewares
        - models
        - routes
        - utils or utilities

5. To use ES Modules (ESM) syntax for importing files (e.g., import statements) in Node.js, modify the package.json file by adding "type": "module". If you are okay with using CommonJS syntax (e.g., require statements), you don't need to make any changes to the package.json file.

## Development Dependencies (Dev Dependencies):
Dev Dependencies are dependencies used only during development and are not included in the production code.

1. `Nodemon`:
    - While creating an express server, we see that if we make any changes to the server code, we have to restart the server so that changes will be reflected. So, to overcome this headache of restarting the server every time, we use Nodemon, which automatically restarts the server whenever code changes are detected.

    - Nodemon Automatically restarts the server when changes are made to the code. This helps avoid the need to manually restart the server each time you make changes.

    - `npm install -D nodemon`, The `-D` flag in `npm install -D nodemon` is shorthand for `--save-dev`, which specifies that the package should be installed as a development dependency.

    - After successfully installing nodemon as a development dependency, you'll typically need to update your package.json file to add a script that uses nodemon for running your server.

2. `Prettier`:
    - Prettier is used for code formatting.
    
    - Instead of just using the VS Code extension, it’s better to set up Prettier directly in your project. This ensures everyone on the team has the same code formatting.

    - Installation:
        - `npm install -D prettier`
        - Installing prettier as a dev dependency.

    - After installing Prettier, you'll need to set up a configuration file to define your formatting rules. This file tells Prettier how to format your code.

        - Create a file name  `.prettierrc` or `.prettierrc.json`
        - Place it in the root directory of your project.
        - In this file add configuration options.
        - Example:
            ```json
            {
            "tabWidth": 4,
            "useTabs": false,
            "semi": true,
            "singleQuote": false,
            "trailingComma": "es5",
            "bracketSpacing": true
            }
            ```
        
        - Create a file name `.prettierignore`. 
            - In this file, list the files you don’t want Prettier to format. Use the same pattern syntax as .gitignore. 
            - And Place it in the root directory of your project.
