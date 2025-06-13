import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name, email, phone, projectType, message }: ContactFormData = await req.json()

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields: name, email, and message are required' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not set')
    }

    // Create email content
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #3a9b5c, #2d7d47); color: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
            .field { margin-bottom: 20px; }
            .label { font-weight: 600; color: #374151; margin-bottom: 5px; display: block; }
            .value { background: #f9fafb; padding: 12px; border-radius: 6px; border-left: 4px solid #3a9b5c; }
            .message-box { background: #f0f9f4; border: 1px solid #dcf2e4; border-radius: 8px; padding: 20px; margin-top: 20px; }
            .footer { background: #f9fafb; padding: 20px; text-align: center; color: #6b7280; font-size: 14px; border-radius: 0 0 8px 8px; }
            .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <div class="logo">🌿 Paige's Garden Chat</div>
              <h1 style="margin: 0; font-size: 28px;">New Contact Form Submission</h1>
            </div>
            
            <div class="content">
              <div class="field">
                <span class="label">Name:</span>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <span class="label">Email:</span>
                <div class="value"><a href="mailto:${email}" style="color: #3a9b5c; text-decoration: none;">${email}</a></div>
              </div>
              
              ${phone ? `
                <div class="field">
                  <span class="label">Phone:</span>
                  <div class="value"><a href="tel:${phone}" style="color: #3a9b5c; text-decoration: none;">${phone}</a></div>
                </div>
              ` : ''}
              
              ${projectType ? `
                <div class="field">
                  <span class="label">Project Type:</span>
                  <div class="value">${projectType}</div>
                </div>
              ` : ''}
              
              <div class="message-box">
                <span class="label">Message:</span>
                <div style="margin-top: 10px; white-space: pre-wrap;">${message}</div>
              </div>
            </div>
            
            <div class="footer">
              <p>This message was sent from the contact form on paigesgardenchat.com</p>
              <p>Submitted on ${new Date().toLocaleString('en-US', { 
                timeZone: 'America/Los_Angeles',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })} PST</p>
            </div>
          </div>
        </body>
      </html>
    `

    // Send email via Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Paige\'s Garden Chat <noreply@paigesgardenchat.com>',
        to: ['hello@paigesgardenchat.com'],
        reply_to: email,
        subject: `New Contact Form Submission from ${name}`,
        html: emailHtml,
      }),
    })

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text()
      console.error('Resend API error:', errorText)
      throw new Error(`Failed to send email: ${emailResponse.status}`)
    }

    const emailResult = await emailResponse.json()
    console.log('Email sent successfully:', emailResult.id)

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully',
        emailId: emailResult.id 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Error in send-contact-email function:', error)
    
    return new Response(
      JSON.stringify({ 
        error: 'Failed to send email', 
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})