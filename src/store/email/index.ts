import { useRef } from "react";
import emailjs from "emailjs-com";

export function useEmailStore() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_d1lzfcb", // Service ID
          "template_rg4s3im", // Template ID
          form.current,
          "aKIX-3Gpi_A3h1UFG" // PUBLIC KEY
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message sent successfully!");
          },
          (error) => {
            console.log(error.text);
            alert("Failed to send message. Please try again.");
          }
        );

      form.current.reset();
    }
  };

  return { form, sendEmail };
}
