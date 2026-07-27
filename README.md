# mobile-desktop-app

A simple cross-platform app skeleton built with **Angular 18 (standalone) + Ionic 8 + Capacitor 6**. It runs on Web/Desktop (browser), iOS, and Android from a single codebase.

The home page reads platform details through the Capacitor bridge (`Capacitor.getPlatform()`, `App.getInfo()`), demonstrating the web/native split.

## Structure

```
mobile-desktop-app/
  capacitor.config.ts        # Capacitor app id / web dir
  angular.json               # Angular build (outputs to www/)
  src/
    main.ts                  # bootstrapApplication + Ionic providers
    index.html
    global.scss              # Ionic core styles
    app/
      app.component.ts       # <ion-app> shell + router outlet
      app.routes.ts          # lazy home route
      home/home.page.ts      # platform info page
      services/
        platform-info.service.ts  # Capacitor bridge access
```

## Setup

```bash
cd mobile-desktop-app
npm install

# Run in the browser (desktop / web)
npm start

# Build the web assets, then sync into native projects
npm run build
npm run sync

# Add native platforms (first time only)
npx cap add ios
npx cap add android

# Run on device / simulator
npm run ios
npm run android
```

## Notes

- Web build output goes to `www/` (referenced by `capacitor.config.ts`).
- Native `ios/` and `android/` folders are created by `npx cap add` and are not checked in here.
