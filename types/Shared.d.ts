type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
}

type ContactFormData = {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  message: string;
}

type ModalErrorState = {
  open: boolean;
  title: string;
  message: string;
}
