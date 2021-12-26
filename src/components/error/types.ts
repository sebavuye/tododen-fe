export interface ErrorProps {
  error: Error;
  loading: boolean;
  resetErrorBoundary: () => void;
}
