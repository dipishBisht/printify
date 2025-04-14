import { FaqItem } from './types';

export const faqItems: FaqItem[] = [
  {
    id: 'order-1',
    question: 'How do I upload documents to print?',
    answer:
      "You can upload documents through our platform by clicking the 'Upload' button on the dashboard. We support various file formats including PDF, DOCX, JPG, and PNG.",
  },
  {
    id: 'order-2',
    question: 'What file formats are supported?',
    answer:
      'We support a wide range of formats including PDF, DOCX, DOC, PPTX, PPT, XLSX, XLS, JPG, PNG, and TIFF. For best results, we recommend using PDF format.',
  },
  {
    id: 'print-1',
    question: 'What paper sizes are available?',
    answer:
      'We offer standard paper sizes including A4, A3, Letter, Legal, and Tabloid. Some partner shops may offer additional specialty sizes.',
  },
  {
    id: 'print-2',
    question: 'Can I print in color or only black and white?',
    answer:
      'Both options are available. During the ordering process, you can select either color or black and white printing based on your needs and budget.',
  },
  {
    id: 'payment-1',
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit/debit cards, PayPal, and campus card payments for university students. All payments are processed securely.',
  },
  {
    id: 'pickup-1',
    question: 'How do I select a pickup time?',
    answer:
      "After uploading your document and selecting a print shop, you can choose from available time slots for pickup based on the shop's operating hours.",
  },
  {
    id: 'pickup-2',
    question: 'What happens if I miss my pickup time?',
    answer:
      "Your printed documents will be held for 48 hours after your scheduled pickup time. After that, you'll need to contact the print shop directly.",
  },
];
