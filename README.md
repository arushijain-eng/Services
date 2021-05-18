# KRY code assignment

One of our developers built a simple service poller.
The service consists of a back-end service written in Vert.x (https://vertx.io/) that keeps a list of services (defined by a URL), and periodically does an HTTP GET to each and saves the response ("OK" or "FAIL").

Unfortunately, the original developer didn't finish the job, and it's now up to you to complete the thing.

Please start with the front-end track and complete as many of those issues as you can. If you have time left, you can also have a look at the back-end track.

## Front-end track
- We want full show/create/delete functionality for services
- The results from the poller are not automatically shown to the user (you have to reload the page to see results)
- Make sure the UI is as user friendly and accessible as possible, both on desktop as well as touch devices
- This is an example of [Kry design](https://scene.zeplin.io/project/5a9681154e28b2615626a74d), feel free to take inspiration from it or make up an even nicer one

## Back-end track
- Add update route and functionality to the API (feel free to also update the frontend to use the new route)
- A user (with a different cookie/local storage) should not see the services added by another user

We would like you to use JavaScript, React and CSS for this assignment (no CSS-frameworks), but aside from that, you’re free to use any tooling as you see fit. If you want to be strict about the design, the font in the mockup is Montserrat.

Spend a maximum of four hours working on this assignment - make sure to finish the issues you start. We value high quality over functionality.

## The assignment will be evaluated in these following areas:

- Code structure
- Testability
- Scalability
- Clean code
- Reusability of components

Good luck!


# Submission

Put the code in a git repo on GitHub and send us the link (niklas.holmqvist@kry.se) when you are done.


# Building
We recommend using IntelliJ as it's what we use day today at the KRY office.
In intelliJ, choose
```
New -> New from existing sources -> Import project from external model -> Gradle -> select "use gradle wrapper configuration"
```

You can also run gradle directly from the command line:
```
./gradlew clean run
```

# Building and Testing Frontend code

In the project directory (/src/app), you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
