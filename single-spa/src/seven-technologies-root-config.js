import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: () => location.pathname === "/"
});

registerApplication({
  name: "@seven-technologies/react-single",
  app: () => System.import("@seven-technologies/react-single"),
  activeWhen: () => location.pathname === "/react-single"
});

registerApplication({
  name: "@seven-technologies/react-multiples",
  app: () => System.import("@seven-technologies/react-multiples"),
  activeWhen: ["/react-multiples"]
});

// registerApplication({
//   name: "@seven-technologies/react-parcel",
//   app: () => System.import("@seven-technologies/react-parcel"),
//   activeWhen: () => location.pathname === "/react-parcel"
// });

registerApplication({
  name: "@seven-technologies/react-parcel-route",
  app: () => System.import("@seven-technologies/react-parcel-route"),
  activeWhen: () => location.pathname === "/react-parcel-route"
});

start({
  urlRerouteOnly: true
});
