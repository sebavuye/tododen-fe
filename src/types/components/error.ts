import { AxiosError } from 'axios';

export interface IErrorProps {
  error: AxiosError;
  loading: boolean;
  onReset?: () => void;
}
