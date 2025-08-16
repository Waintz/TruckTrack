// возможно использовать в будушем, пока просто не используй.


export const PAGES_CONFIG = {
  HOME: {
    path: "/",
  },
  POLICY: {
    path: "/documents/policy",
  },
  TERMS: {
    path: "/documents/terms",
  },
  DASHBOARD: {
    path: "/dashboard",
  }
} as const;

export type PageKey = keyof typeof PAGES_CONFIG;

export type PageConfig = {
  [K in PageKey]: {
    path: string;
  };
};
