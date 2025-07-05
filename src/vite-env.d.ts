/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_MONO_LINK: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
