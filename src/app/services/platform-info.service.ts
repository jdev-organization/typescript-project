import { Injectable } from "@angular/core";
import { Capacitor } from "@capacitor/core";
import { App, AppInfo } from "@capacitor/app";

export interface PlatformDetails {
  platform: string;
  isNative: boolean;
  appVersion: string;
}

@Injectable({ providedIn: "root" })
export class PlatformInfoService {
  async getDetails(): Promise<PlatformDetails> {
    const platform = Capacitor.getPlatform();
    const isNative = Capacitor.isNativePlatform();

    let appVersion = "web";
    if (isNative) {
      const info: AppInfo = await App.getInfo();
      appVersion = info.version;
    }

    return { platform, isNative, appVersion };
  }
}
