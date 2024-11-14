import { FC } from "react";

interface EmailTemplateProps {
    firstName: string;
}
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Section,
    Text,
  } from "@react-email/components";
export const EmailTemplate: FC<Readonly<EmailTemplateProps>> = ({
    firstName,
}) => (
  <Html>
    <Head/>
    <Body>
        <Container>
            <Text>Hello {firstName}</Text>
            <Section>
                <Heading>Thank you for choosing us</Heading>
                <Text>{firstName} come back next time</Text>
            </Section>
        </Container>
    </Body>
  </Html>
)


