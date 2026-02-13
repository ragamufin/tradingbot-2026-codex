/// <reference types="vite/client" />

declare global {
  interface Window {
    tradingbot: import('../../preload/index').TradingbotApi;
  }
}

export {};
