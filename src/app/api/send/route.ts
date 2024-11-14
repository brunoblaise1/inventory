import { EmailTemplate } from '@/components/emails/email-template'
import { NextResponse } from 'next/server'
import {Resend} from 'resend'

const resend = new Resend (process.env.RESEND_API_KEY)
export async function POST(){
    try {
        const {data, error} = await resend.emails.send({
            from:"Acme <onboarding@resend.dev>",
            to:['boogier94@gmail.com'],
            subject: "hello from nextjs",
            react: EmailTemplate({firstName: "Blaise"})
        })
        if(error) return NextResponse.json({error}, {status: 500})
        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json ({error}, {status: 500})
    }
} 