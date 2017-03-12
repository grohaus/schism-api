# schism-api

Relationship management for the people.

## Requirements

- express
- node

## Development

1.  Fork and clone.
1.  Make a secret key in the project directory

    ```
    echo SECRET_KEY=$(/usr/local/opt/openssl/bin/openssl rand -base64 66 | tr -d '\n') >>.env
    ```

1.  Work on a branch.
1.  Install dependencies with `yarn` (not `npm`).
1.  Start development server with `npm start`.
1.  Hack and make good commits.
1.  Make a pull request.

## [LICENSE](LICENSE)

[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)
