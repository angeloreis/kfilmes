import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { FaPaperPlane } from "react-icons/fa";

import { Button, VStack } from "@chakra-ui/react";

import { Input } from "components/Input";

export function FormContact() {
  const [username, setUserName] = useState("");
  const [phonewhats, setPhoneWhats] = useState("");
  const [textContact, setTextContact] = useState("");
  const [whatsAppUrl, setWhatsAppUrl] = useState("");

  const router = useRouter();

  function handleSubmit() {
    const msgZap = `${textContact}. Meu contato é este: ${phonewhats} - ${username} || Contato via site`;
    setWhatsAppUrl(`https://wa.me/559188497692?text=${msgZap}`);
    router.push(whatsAppUrl)
  }

  return (
    <form onSubmit={handleSubmit}>
      <VStack gap='12'>
        <Input
          name="username"
          type="text"
          placeholder="Informe seu nome completo"
          onChange={(event) => setUserName(event.target.value)}
        />
        <Input
          name="phonewhats"
          type="text"
          placeholder="WhatsApp: (99) 9.9999-9999"
          onChange={(event) => setPhoneWhats(event.target.value)}
        />
        <Input
          name="textContact"
          type="text"
          placeholder="Digite aqui seu texto"
          onChange={(event) => setTextContact(event.target.value)}
        />
        <Button
          type="submit"
          colorScheme="green"
          rightIcon={<FaPaperPlane />}
          width="100%"
          py="5"
        >
          Enviar
        </Button>
      </VStack>
    </form>
  );
}
