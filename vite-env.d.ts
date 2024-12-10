/// <reference types="vite/client" />

/// <reference types="vite/types/importMeta.d.ts" />

interface ImportMetaEnv {
  readonly VITE_CLIENT_ID: string;
  readonly VITE_RECPATCHA_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
