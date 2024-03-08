export interface IPushPayload {
  notification?: {
    title: string;
    body: string;
  };
  data?: Record<string, string>;
}
