import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.mobiledesktop",
  appName: "mobile-desktop-app",
  webDir: "www",
  server: {
    androidScheme: "https"
  }
};

export default config;
