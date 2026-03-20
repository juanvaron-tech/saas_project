export type PaymentStatus = 'pending' | 'succeeded' | 'failed' | 'cancelled';

export interface Payment {
  id:               string;
  userId:           string;
  amount:           number;       // en centavos
  currency:         string;       // ISO 4217, ej: 'usd'
  status:           PaymentStatus;
  stripePaymentId:  string | null;
  metadata:         Record<string, string> | null;
  createdAt:        Date;
  updatedAt:        Date;
}

export interface PaymentIntent {
  id:           string;
  clientSecret: string;
  status:       PaymentStatus;
  amount:       number;
  currency:     string;
}
