/** Interface for API Error */
export interface RestApiError {
  /** Error message */
  message: string;
  /** Error code */
  code: number;
  /** Error status */
  status?: number;
}

/** Interface API Response */
export interface RestApiResult<T> {
  /** Is response success */
  success: boolean;
  /** Response status */
  status?: number;
  /** Response data */
  data?: T;
  /** Response error */
  error?: RestApiError;
}
