/**
 * App Store Connect asset specifications.
 * Source: developer.apple.com/help/app-store-connect/reference/
 *   screenshot-specifications  |  app-preview-specifications
 * Verified 2026-08-24.
 */

export type DeviceKey = "iphone-6.9" | "ipad-13";

export type DeviceSpec = {
  /** Human label used in output paths and logs. */
  label: string;
  /** `xcrun simctl` device type name; the toolkit picks the newest runtime that has it. */
  simulatorName: string;
  /** Native capture resolution of that simulator, portrait. */
  native: { width: number; height: number };
  /** Required screenshot upload size, portrait. */
  screenshot: { width: number; height: number };
  /** Required app preview upload size, portrait. */
  preview: { width: number; height: number };
};

export const DEVICES: Record<DeviceKey, DeviceSpec> = {
  "iphone-6.9": {
    label: "6.9",
    simulatorName: "iPhone 17 Pro Max",
    native: { width: 1320, height: 2868 },
    screenshot: { width: 1320, height: 2868 },
    preview: { width: 886, height: 1920 },
  },
  "ipad-13": {
    label: "13",
    simulatorName: "iPad Pro 13-inch (M4)",
    native: { width: 2064, height: 2752 },
    screenshot: { width: 2064, height: 2752 },
    preview: { width: 1200, height: 1600 },
  },
};

export const DEVICE_KEYS = Object.keys(DEVICES) as DeviceKey[];

export function isDeviceKey(key: string): key is DeviceKey {
  return key in DEVICES;
}

/** Preview constraints Apple enforces at upload time. */
export const PREVIEW = {
  fps: 30,
  minSeconds: 15,
  maxSeconds: 30,
  /** Apple asks for 10-12 Mbps VBR on H.264. */
  videoBitrate: "11M",
  audioBitrate: "256k",
  audioSampleRate: 48000,
  maxBytes: 500 * 1024 * 1024,
} as const;

/** Screenshots may not carry an alpha channel. */
export const SCREENSHOT_PIXEL_FORMAT = "rgb24";
