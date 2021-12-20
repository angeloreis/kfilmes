import {
  Flex,
  Divider,
  useBreakpointValue,
} from "@chakra-ui/react";

import { GotToTop } from "../components/GoToTop";

import { HeaderSite } from "../components/Header";
import { Menu } from "../components/Menu";

import { BannerLogo } from "components/Sections/BannerLogoSection";
import { AboutUsSection } from "components/Sections/AboutUsSection";
import { OperateAreaSection } from "components/Sections/OperateAreaSection";
import { OurCustomersSection } from "components/Sections/OurCustomerSections";
import { StudioSection } from "components/Sections/StudioSection";
import { ContactSection } from "components/Sections/ContactSection";

export default function Home() {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex direction="column" h="100vh">
      <title>K Filmes | Você sonha e a gente Realiza!</title>
      <HeaderSite>
        <Menu />
      </HeaderSite>

      <BannerLogo isWideVersion={isWideVersion}/>

      <Divider py={isWideVersion ? "4" : "1"} variant="none" />

      <AboutUsSection isWideVersion={isWideVersion}/>

      <Divider py={isWideVersion ? "8" : "1"} variant="none" />

      <OperateAreaSection />

      <Divider py="8" variant="none" />

      <OurCustomersSection />

      <Divider py="8" variant="none" />

      <StudioSection isWideVersion={isWideVersion}/>

      <Divider py="8" variant="none" />

      <ContactSection isWideVersion={isWideVersion}/>

      <Flex align="flex-end" justify="flex-end">
        <GotToTop />
      </Flex>
    </Flex>
  );
}
