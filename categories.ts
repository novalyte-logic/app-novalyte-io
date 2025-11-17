export interface Category {
  id: string;
  name: string;
  icon?: string;
}

export const categories: Category[] = [
  { id: 'cat1', name: 'IV Therapy Equipment' },
  { id: 'cat2', name: 'HRT & Hormone Diagnostics' },
  { id: 'cat3', name: 'Regenerative Devices' },
  { id: 'cat4', name: 'Cryotherapy & Recovery' },
  { id: 'cat5', name: 'Clinic Software Tools' },
  { id: 'cat6', name: 'Supplements & Wellness' },
];