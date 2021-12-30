import { AxiosError } from 'axios';

export interface ErrorProps {
  error: AxiosError;
  loading: boolean;
  onReset?: () => void;
}
