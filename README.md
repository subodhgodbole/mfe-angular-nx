# Micro Frontend using Angular and Nx Monorepo

This project showcases how to write micro front end apps using Angular and house them in a single repo using NX monorepo. 

This project was created in Mid-Year 2022. Hence using versions which were latest at that time.

- Node - v14
- Angular - v13
- Nx Monorepo - v12
  - I had issues using v13 hence used v12.
- Module Federation using [`@angular-architects/module-federation`](https://www.npmjs.com/package/@angular-architects/module-federation) - v14

## Install Dependencies

```sh
npm i
```

## Start Applications

Option 1:

```sh
npm start
```

Option 2:
Start both applications side by side on two separate terminals.

```sh
npm run start:shell
npm run start:mfe1
```

## Launch Shell Application

Open browser with URL of "shell" application - <http://localhost:5500/>

## About Applications

I have kept things very simple with respect to complexity of the micro apps as the main topic is to showcase how Micro Frontend works. This project has below -

- Two Micro Apps – "shell" and "mfe1".
  - "shell" is primary Micro App.
  - "mfe1" is second Micro App.
- Shared libraries – To showcase how to share code using libraries.

## Credits

This project is prepared by referring multiple articles and documentation from internet. It is very difficult to list them all here, but many thanks to authors of those posts, which helped me get this project working.

# Behind The Scene

Creating new App

```sh
npm run nx g @nx/angular:application apps/mfe2
```

Creating new Lib

```sh
npm run nx g @nx/angular:library services
```
