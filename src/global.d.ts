// src/global.d.ts

interface Window {
    RDStationForms?: {
      createForm: (id: string, accountId: string) => void;
    };
  }
  