import React from 'react';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { 
      hasError: false,
      error: null
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { 
      hasError: true,
      error 
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 bg-primary flex flex-col items-center justify-center p-4 text-center">
          <h2 className="text-2xl text-white font-bold mb-4">Algo deu errado</h2>
          <p className="text-secondary mb-6">
            Ocorreu um erro ao carregar o conteúdo. Por favor, tente recarregar a página.
          </p>
          <pre className="bg-tertiary p-4 rounded-lg text-white text-sm max-w-full overflow-auto">
            {this.state.error ? String(this.state.error) : "Erro desconhecido"}
          </pre>
          <button 
            className="mt-6 py-2 px-6 bg-tech-blue text-white rounded-lg"
            onClick={() => window.location.reload()}
          >
            Recarregar página
          </button>
        </div>
      );
    }
    
    return this.props.children;
  }
}

export default ErrorBoundary;