export interface PricingOption {
  name: string;
  pricePerPage: number;
  features: string[];
  color: string;
  gradient: string;
  description: string;
  popular?: boolean;
}
