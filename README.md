# WTF API
REST API for the World Texting Foundation (WTF).

# Getting Started

In your terminal

1. Clone the repo locally to your machine by running `git clone https://github.com/WalujoEmmanuel/WTF.git`
2. change your current directory (`cd`) to wherever you cloned the app in 1 above.

#### Development setup

-   Install dependencies
    ```bash
    yarn install
    ```

#### Run the application

```bash
yarn start:dev
```

#### API REST End Points

| End Point                                  | Verb   | Use                               |
| -------------------------------------------| ------ | --------------------------------- |
| `/user/login`                              | POST   | User login                        |
| `/acronym`                                 | GET    | Get all acronyms                  |
| `/acronym?from=50&limit=10&search=:search` | GET    | GET paginated acronyms by filters |
| `/acronym`                                 | POST   | Add new acronym                   |
| `/acronym/:acronym`                        | PUT    | Update an acronym definition      |
| `/acronym/:acronym`                        | DELETE | Delete an acronym                 |

#### Built With

-   [Express](https://expressjs.com/) A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications
