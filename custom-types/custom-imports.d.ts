declare module '*.css' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const content: string;
  export default content;
}

declare module '*.woff2' {
  const content: string;
  export default content;
}

declare module 'firebase-cfg/firebase.json' {
  interface EmulatorPort {
    port: number;
  }
  interface FirebaseConfig {
    firestore: {
      rules: string;
      indexes: string;
    };
    storage: {
      rules: string;
    };
    emulators: {
      auth: EmulatorPort;
      firestore: EmulatorPort;
      hosting: EmulatorPort;
      storage: EmulatorPort;
      ui: {
        enabled: boolean;
      };
      singleProjectMode: boolean;
    };
  }
  const content: FirebaseConfig;
  export default content;
}
