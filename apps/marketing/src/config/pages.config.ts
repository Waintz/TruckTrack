export const PAGES_CONFIG = {
  HOME: { path: "/", name: "home" },
  POLICY: { path: "/documents/policy", name: "Policy" },
  TERMS: { path: "/documents/terms", name: "Terms" },
  DASHBOARD: { path: "/dashboard", name: "Dashboard" },
  SHIPMENTS: {
    path: "/shipments",
    name: "Shipments",
    children: {
      ARRIVAL: { path: "/shipments/arrival", name: "Arrival" },
      AVAILABLE: { path: "/shipments/available", name: "Available" },
      DEPARTURE: { path: "/shipments/departure", name: "Departure" },
    },
  },
  PARCELS: { path: "/parcels", name: "Parcels" },
  BRANCHES: { path: "/branches", name: "Branches" },
  CLIENTS: { path: "/clients", name: "Clients" },
  REQUESTS: { path: "/requests", name: "Requests" },
  NOTIFICATIONS: { path: "/notifications", name: "Notifications" },
} as const;

// с помощью bfs обход по дереву и ищешь короче то что нужно

export const NAVIGATION_SHIPMENTS = [
  { ...PAGES_CONFIG.SHIPMENTS.children.ARRIVAL },
  { ...PAGES_CONFIG.SHIPMENTS.children.AVAILABLE },
  { ...PAGES_CONFIG.SHIPMENTS.children.DEPARTURE },
] as const;

export const NAVIGATION_DASHBOARD = [
  { ...PAGES_CONFIG.DASHBOARD, icon: "MailOpen" },
  { ...PAGES_CONFIG.SHIPMENTS, icon: "Truck" },
  { ...PAGES_CONFIG.PARCELS, icon: "Box" },
  { ...PAGES_CONFIG.BRANCHES, icon: "Flag" },
  { ...PAGES_CONFIG.CLIENTS, icon: "User" },
] as const;

export type PageKey = keyof typeof PAGES_CONFIG;

export type NavigationDashboardItem = typeof NAVIGATION_DASHBOARD[number];

export type NavigationDashboardConfig = NavigationDashboardItem[];

export type PageConfig = {
  [K in PageKey]: {
    path: string;
  };
};
