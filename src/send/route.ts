import { Resend } from 'resend';
import * as React from 'react';
import { EmailTemplate } from '@/components/emails/email-template';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request, res: Response) {
	const { data, error } = await resend.emails.send({
		from: 'Acme <onboarding@resend.dev>',
		to: ['boogier94@gmail.com'],
		subject: "Thank you",
		react: EmailTemplate({ firstName: "John" }),
	});
	if (error) {
		return Response.json(error);
	}
	return Response.json({ message: "Email sent successfully" });
}
