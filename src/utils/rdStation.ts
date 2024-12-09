declare global {
    interface Window {
      rdStationScriptLoaded?: boolean;
      RDStationForms?: any;
      rdFormsRegistered?: Set<string>;
    }
  }
  
  // Função para carregar o script do RD Station
  export function loadRDStationScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (window.rdStationScriptLoaded) {
        console.log("Script do RD Station já carregado.");
        resolve();
        return;
      }
  
      const script = document.createElement("script");
      script.src = "https://d335luupugsy2.cloudfront.net/js/rdstation-forms/stable/rdstation-forms.min.js";
      script.async = true;
  
      script.onload = () => {
        console.log("Script do RD Station carregado com sucesso.");
        window.rdStationScriptLoaded = true;
        // Inicializa o registro de formulários, se não existir
        if (!window.rdFormsRegistered) {
          window.rdFormsRegistered = new Set();
        }
        resolve();
      };
  
      script.onerror = () => {
        console.error("Erro ao carregar o script do RD Station.");
        reject(new Error("Falha ao carregar o script do RD Station"));
      };
  
      document.body.appendChild(script);
    });
  }
  
  // Função para criar um formulário RD Station com contenção
  export function createRDStationForm(formId: string, trackingId: string): void {
    // Inicializa o registro de formulários, se necessário
    if (!window.rdFormsRegistered) {
      window.rdFormsRegistered = new Set();
    }
  
    // Verifica se o formulário já foi registrado
    if (window.rdFormsRegistered.has(formId)) {
      console.log(`Formulário com ID ${formId} já está registrado. Ignorando.`);
      return;
    }
  
    const formExists = document.querySelector(`#${formId} .rdstation-form`);
    if (formExists) {
      console.log(`Formulário com ID ${formId} já existe no DOM. Registrando.`);
      window.rdFormsRegistered.add(formId);
      return;
    }
  
    if (window.RDStationForms) {
      console.log(`Criando formulário com ID ${formId}...`);
      new window.RDStationForms(formId, trackingId).createForm();
      window.rdFormsRegistered.add(formId); // Registra o formulário
    } else {
      console.error("RDStationForms não está disponível.");
    }
  }
  