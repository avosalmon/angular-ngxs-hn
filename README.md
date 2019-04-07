[![Netlify Status](https://api.netlify.com/api/v1/badges/71638957-11f1-41f8-acfd-997032bdbe5a/deploy-status)](https://app.netlify.com/sites/angular-ngxs-hackernews/deploys)

# Angular NGXS Hacker News
https://angular-ngxs-hackernews.netlify.com

## Setup
Install dependencies in the docker container.

```bash
docker-compose run --rm app yarn install
```

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

If you want to run the dev server in docker, run the following command. It's slower than running on the host machine.
```bash
docker-compose run --rm -p 4200:4200 app yarn start
```

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via Jest.
