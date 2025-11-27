/**
 * API Route: Submit Quote V2
 * Handles quote submission and sends dual emails:
 * 1. Client email with quote + Calendly link
 * 2. Sales team notification to sales@agentsbooster.com
 */

import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    const {
      name,
      email,
      phone,
      company,
      companySize,
      industry,
      website,
      message,
      items,
      subtotal,
      total,
      billingCycle,
      setupTotal,
      savings,
      timestamp
    } = data;
    
    // Validate required fields
    if (!name || !email || !phone || !company || !companySize) {
      return new Response(
        JSON.stringify({ error: 'Faltan campos requeridos' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }
    
    // Generate quote ID
    const now = new Date();
    const quoteId = `AB-${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(Math.floor(Math.random() * 10000)).padStart(4, '0')}`;
    
    // Build items summary for emails
    const itemsHTML = items.map((item: any) => {
      const itemPrice = billingCycle === 'annual' ? Math.round(item.basePrice * 0.8) : item.basePrice;
      const addonsHTML = item.expansionPacks.length > 0 
        ? `<ul style="margin: 8px 0 0 20px; padding: 0; list-style: none;">
            ${item.expansionPacks.map((pack: any) => {
              const packPrice = billingCycle === 'annual' ? Math.round(pack.price * 0.8) : pack.price;
              return `<li style="font-size: 13px; color: #666; margin-bottom: 4px;">+ ${pack.packName}: $${packPrice}/mes</li>`;
            }).join('')}
          </ul>`
        : '';
      
      return `
        <div style="padding: 16px; background: #F9F9F9; border-radius: 8px; margin-bottom: 12px;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
            <span style="font-size: 28px;">${item.agentIcon}</span>
            <div>
              <div style="font-weight: 700; color: #333;">${item.agentName}</div>
              <div style="font-size: 13px; color: #666;">${item.levelName}</div>
            </div>
            <div style="margin-left: auto; font-weight: 900; font-size: 18px; color: #C89828;">$${itemPrice}/mes</div>
          </div>
          ${addonsHTML}
        </div>
      `;
    }).join('');
    
    const itemsTextSummary = items.map((item: any) => {
      const itemPrice = billingCycle === 'annual' ? Math.round(item.basePrice * 0.8) : item.basePrice;
      let summary = `${item.agentIcon} ${item.agentName} - ${item.levelName}: $${itemPrice}/mes`;
      if (item.expansionPacks.length > 0) {
        summary += '\n  Add-ons:';
        item.expansionPacks.forEach((pack: any) => {
          const packPrice = billingCycle === 'annual' ? Math.round(pack.price * 0.8) : pack.price;
          summary += `\n    + ${pack.packName}: $${packPrice}/mes`;
        });
      }
      return summary;
    }).join('\n\n');
    
    // Calendly link (update with your actual Calendly link)
    const calendlyLink = 'https://calendly.com/agentsbooster/onboarding-30min';
    
    // =======================
    // CLIENT EMAIL TEMPLATE
    // =======================
    const clientEmailHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background-color: #F5F5F5;">
  <div style="max-width: 600px; margin: 0 auto; background-color: #FFFFFF;">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #080818 0%, #1A1C1E 100%); padding: 40px 32px; text-align: center;">
      <h1 style="margin: 0; font-size: 28px; font-weight: 900; color: #FFFFFF; margin-bottom: 8px;">✅ Cotización Recibida</h1>
      <p style="margin: 0; font-size: 14px; color: rgba(255,255,255,0.8);">ID: ${quoteId}</p>
    </div>
    
    <!-- Body -->
    <div style="padding: 32px;">
      <p style="font-size: 16px; color: #333; line-height: 1.6; margin-top: 0;">
        Hola <strong>${name}</strong>,
      </p>
      
      <p style="font-size: 16px; color: #333; line-height: 1.6;">
        ¡Gracias por tu interés en Agents Booster! 🚀
      </p>
      
      <p style="font-size: 16px; color: #333; line-height: 1.6;">
        A continuación encontrarás el resumen de tu configuración personalizada:
      </p>
      
      <h2 style="font-size: 20px; font-weight: 800; color: #080818; margin: 32px 0 16px 0;">📋 Tu Configuración</h2>
      
      ${itemsHTML}
      
      <!-- Totals -->
      <div style="padding: 24px; background: #F9F9F9; border: 2px solid #E0E0E0; border-radius: 12px; margin: 24px 0;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
          <span style="font-size: 15px; color: #666;">Subtotal mensual:</span>
          <span style="font-size: 15px; font-weight: 700; color: #333;">$${subtotal}/mes</span>
        </div>
        
        ${savings > 0 ? `
        <div style="display: flex; justify-content: space-between; margin-bottom: 12px; padding: 10px; background: rgba(0,255,136,0.1); border-radius: 8px;">
          <span style="font-size: 14px; color: #00AA5E;">💰 Ahorro anual:</span>
          <span style="font-size: 14px; font-weight: 900; color: #00AA5E;">$${savings}/año</span>
        </div>
        ` : ''}
        
        <div style="display: flex; justify-content: space-between; margin-bottom: 12px; padding: 10px; background: rgba(200,152,40,0.1); border-radius: 8px;">
          <span style="font-size: 14px; color: #C89828;">Setup completo:</span>
          <span style="font-size: 14px;">
            <span style="text-decoration: line-through; color: #999;">$${setupTotal}</span>
            <span style="font-weight: 900; color: #00AA5E; margin-left: 8px;">GRATIS</span>
          </span>
        </div>
        
        <div style="display: flex; justify-content: space-between; padding-top: 16px; border-top: 2px solid #C89828; margin-top: 16px;">
          <span style="font-size: 16px; font-weight: 800; color: #080818;">TOTAL ${billingCycle === 'annual' ? 'ANUAL' : 'MENSUAL'}:</span>
          <span style="font-size: 20px; font-weight: 900; color: #C89828;">$${total} USD${billingCycle === 'annual' ? '/año' : '/mes'}</span>
        </div>
      </div>
      
      <!-- Next Steps -->
      <h2 style="font-size: 20px; font-weight: 800; color: #080818; margin: 32px 0 16px 0;">🎯 Próximos Pasos</h2>
      
      <div style="padding: 20px; background: linear-gradient(135deg, rgba(200,152,40,0.1) 0%, rgba(200,152,40,0.05) 100%); border: 2px solid rgba(200,152,40,0.3); border-radius: 12px; margin-bottom: 24px;">
        <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 800; color: #C89828;">1️⃣ Agenda tu Onboarding Call (30 min)</h3>
        <p style="margin: 0 0 16px 0; font-size: 14px; color: #666; line-height: 1.6;">
          En esta llamada:
        </p>
        <ul style="margin: 0 0 16px 0; padding-left: 20px; font-size: 14px; color: #666; line-height: 1.8;">
          <li>Demo en vivo personalizada para tu negocio</li>
          <li>Respondemos todas tus preguntas técnicas</li>
          <li>Definimos plan de implementación</li>
          <li>Acordamos próximos pasos</li>
        </ul>
        <a href="${calendlyLink}" style="display: inline-block; padding: 14px 28px; background: linear-gradient(135deg, #C89828 0%, #E0B84E 100%); color: #080818; text-decoration: none; font-weight: 800; border-radius: 8px; font-size: 15px;">
          📅 Agendar Ahora
        </a>
      </div>
      
      <div style="padding: 20px; background: rgba(74,158,255,0.1); border: 2px solid rgba(74,158,255,0.3); border-radius: 12px;">
        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: 800; color: #4A9EFF;">2️⃣ Nuestro equipo te contactará en menos de 24h</h3>
        <p style="margin: 0; font-size: 14px; color: #666; line-height: 1.6;">
          Si tienes alguna duda antes de la llamada, responde a este email o escríbenos a 
          <a href="mailto:sales@agentsbooster.com" style="color: #4A9EFF; font-weight: 700;">sales@agentsbooster.com</a>
        </p>
      </div>
      
      <p style="font-size: 14px; color: #999; line-height: 1.6; margin-top: 32px; padding-top: 24px; border-top: 1px solid #E0E0E0;">
        ¿Tienes preguntas? Habla con <a href="https://agentsbooster.com/demo" style="color: #C89828; font-weight: 700;">Diego, nuestro Agente de Ventas</a> 24/7
      </p>
    </div>
    
    <!-- Footer -->
    <div style="padding: 24px 32px; background: #F5F5F5; text-align: center; border-top: 1px solid #E0E0E0;">
      <p style="margin: 0 0 8px 0; font-size: 16px; font-weight: 800; color: #080818;">Agents Booster</p>
      <p style="margin: 0; font-size: 13px; color: #999;">Agentes de IA que ejecutan acciones reales en tu negocio</p>
    </div>
  </div>
</body>
</html>
    `;
    
    // =======================
    // SALES EMAIL TEMPLATE
    // =======================
    const salesEmailHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background-color: #F5F5F5;">
  <div style="max-width: 700px; margin: 0 auto; background-color: #FFFFFF;">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #FF6B6B 0%, #FF8C8C 100%); padding: 32px; text-align: center;">
      <h1 style="margin: 0; font-size: 24px; font-weight: 900; color: #FFFFFF;">🔔 Nueva Cotización Recibida</h1>
      <p style="margin: 8px 0 0 0; font-size: 16px; font-weight: 700; color: rgba(255,255,255,0.95);">MRR Potencial: $${subtotal}/mes</p>
    </div>
    
    <!-- Body -->
    <div style="padding: 32px;">
      <!-- Quick Info -->
      <div style="padding: 20px; background: linear-gradient(135deg, rgba(200,152,40,0.15) 0%, rgba(200,152,40,0.08) 100%); border: 2px solid rgba(200,152,40,0.3); border-radius: 12px; margin-bottom: 24px;">
        <h2 style="margin: 0 0 16px 0; font-size: 18px; font-weight: 800; color: #C89828;">📊 Información del Lead</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; font-size: 14px; color: #666; font-weight: 600;">👤 Nombre:</td>
            <td style="padding: 8px 0; font-size: 14px; color: #333; font-weight: 700;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 14px; color: #666; font-weight: 600;">🏢 Empresa:</td>
            <td style="padding: 8px 0; font-size: 14px; color: #333; font-weight: 700;">${company}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 14px; color: #666; font-weight: 600;">📧 Email:</td>
            <td style="padding: 8px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #4A9EFF; font-weight: 700; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 14px; color: #666; font-weight: 600;">📱 Teléfono:</td>
            <td style="padding: 8px 0; font-size: 14px;"><a href="tel:${phone}" style="color: #4A9EFF; font-weight: 700; text-decoration: none;">${phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-size: 14px; color: #666; font-weight: 600;">👥 Tamaño:</td>
            <td style="padding: 8px 0; font-size: 14px; color: #333; font-weight: 700;">${companySize} empleados</td>
          </tr>
          ${industry ? `
          <tr>
            <td style="padding: 8px 0; font-size: 14px; color: #666; font-weight: 600;">🏭 Industria:</td>
            <td style="padding: 8px 0; font-size: 14px; color: #333; font-weight: 700;">${industry}</td>
          </tr>
          ` : ''}
          ${website ? `
          <tr>
            <td style="padding: 8px 0; font-size: 14px; color: #666; font-weight: 600;">🌐 Website:</td>
            <td style="padding: 8px 0; font-size: 14px;"><a href="${website}" style="color: #4A9EFF; font-weight: 700; text-decoration: none;" target="_blank">${website}</a></td>
          </tr>
          ` : ''}
        </table>
      </div>
      
      ${message ? `
      <div style="padding: 16px; background: #F9F9F9; border-left: 4px solid #4A9EFF; border-radius: 8px; margin-bottom: 24px;">
        <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: 800; color: #4A9EFF;">💬 Mensaje del Cliente:</h3>
        <p style="margin: 0; font-size: 14px; color: #666; line-height: 1.6; font-style: italic;">"${message}"</p>
      </div>
      ` : ''}
      
      <!-- Configuration -->
      <h2 style="font-size: 18px; font-weight: 800; color: #080818; margin: 24px 0 16px 0;">🛒 Configuración Seleccionada</h2>
      
      ${itemsHTML}
      
      <!-- Totals -->
      <div style="padding: 20px; background: #F9F9F9; border: 2px solid #E0E0E0; border-radius: 12px; margin: 24px 0;">
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
          <span style="font-size: 15px; color: #666; font-weight: 600;">MRR (Monthly Recurring Revenue):</span>
          <span style="font-size: 16px; font-weight: 900; color: #00AA5E;">$${subtotal}/mes</span>
        </div>
        
        ${billingCycle === 'annual' ? `
        <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
          <span style="font-size: 15px; color: #666; font-weight: 600;">ARR (Annual Recurring Revenue):</span>
          <span style="font-size: 16px; font-weight: 900; color: #00AA5E;">$${total}/año</span>
        </div>
        ` : ''}
        
        <div style="display: flex; justify-content: space-between; padding-top: 12px; border-top: 2px solid #C89828; margin-top: 12px;">
          <span style="font-size: 16px; font-weight: 800; color: #080818;">Setup ofrecido GRATIS:</span>
          <span style="font-size: 16px; font-weight: 900; color: #FF6B6B;">$${setupTotal}</span>
        </div>
      </div>
      
      <!-- Metadata -->
      <div style="padding: 16px; background: #F5F5F5; border-radius: 8px; margin-top: 24px;">
        <p style="margin: 0; font-size: 13px; color: #999;">
          <strong>Quote ID:</strong> ${quoteId}<br>
          <strong>Timestamp:</strong> ${new Date(timestamp).toLocaleString('es-ES', { timeZone: 'America/Guayaquil' })}<br>
          <strong>Billing Cycle:</strong> ${billingCycle === 'annual' ? 'Anual' : 'Mensual'}
        </p>
      </div>
      
      <!-- Action Required -->
      <div style="padding: 20px; background: linear-gradient(135deg, rgba(255,107,107,0.15) 0%, rgba(255,107,107,0.08) 100%); border: 2px solid rgba(255,107,107,0.3); border-radius: 12px; margin-top: 24px; text-align: center;">
        <h3 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 800; color: #FF6B6B;">⚡ ACCIÓN REQUERIDA</h3>
        <p style="margin: 0; font-size: 14px; color: #666; line-height: 1.6;">
          1. Revisa la cotización<br>
          2. Contacta al cliente en menos de 24h<br>
          3. Asegúrate que agendó su Onboarding Call
        </p>
      </div>
    </div>
    
    <!-- Footer -->
    <div style="padding: 20px 32px; background: #F5F5F5; text-align: center; border-top: 1px solid #E0E0E0;">
      <p style="margin: 0; font-size: 12px; color: #999;">Sistema de Cotizaciones - Agents Booster</p>
    </div>
  </div>
</body>
</html>
    `;
    
    // Log quote details (for development)
    console.log('\n=== NEW QUOTE SUBMITTED ===');
    console.log('Quote ID:', quoteId);
    console.log('Customer:', { name, email, phone, company, companySize });
    console.log('Industry:', industry || 'N/A');
    console.log('Website:', website || 'N/A');
    console.log('\nConfiguration:');
    console.log(itemsTextSummary);
    console.log('\nTotals:');
    console.log(`MRR: $${subtotal}/mes`);
    console.log(`Total ${billingCycle}: $${total}${billingCycle === 'annual' ? '/año' : '/mes'}`);
    console.log(`Setup: GRATIS (ahorro de $${setupTotal})`);
    if (savings > 0) {
      console.log(`Savings: $${savings}/año`);
    }
    console.log('\nMessage:', message || 'N/A');
    console.log('Timestamp:', timestamp);
    console.log('===========================\n');
    
    // TODO: In production, send actual emails using Resend or similar service
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Email to client
    await resend.emails.send({
      from: 'Agents Booster <hola@agentsbooster.com>',
      to: email,
      subject: `✅ Tu cotización ${quoteId} - Agents Booster`,
      html: clientEmailHTML
    });
    
    // Email to sales
    await resend.emails.send({
      from: 'Sistema <system@agentsbooster.com>',
      to: 'sales@agentsbooster.com',
      subject: `🔔 Nueva cotización - ${company} - $${subtotal} MRR`,
      html: salesEmailHTML
    });
    */
    
    // For now, return success
    return new Response(
      JSON.stringify({
        success: true,
        quoteId,
        message: 'Cotización enviada exitosamente',
        debug: {
          clientEmailPreview: clientEmailHTML.substring(0, 500) + '...',
          salesEmailPreview: salesEmailHTML.substring(0, 500) + '...'
        }
      }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    );
    
  } catch (error) {
    console.error('Error processing quote:', error);
    return new Response(
      JSON.stringify({ error: 'Error interno del servidor' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
