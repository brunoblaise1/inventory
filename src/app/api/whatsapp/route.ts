import {  NextResponse } from "next/server";
import twilio from "twilio"
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);
export  async function POST(){
 try {
    const data = await client.messages.create({
        from: 'whatsapp:+14155238886',
        contentSid: 'HXb5b62575e6e4ff6129ad7c8efe1f983e',
        contentVariables: '{"1":"12/1","2":"5pm"}',
        to: 'whatsapp:+250794234678'
    })
    return NextResponse.json({ data})
 } catch (error) {
    return NextResponse.json({error}, {status: 500})
 }
}  