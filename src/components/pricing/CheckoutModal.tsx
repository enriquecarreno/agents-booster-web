/**
 * CHECKOUT MODAL V3 - CON PROCESO CLARO
 * Modal con formulario + explicación del proceso completo
 */

import { useState } from 'react';
import { X, Send, Loader2, Calendar, Mail, Building2, Users, Phone, User, CheckCircle } from 'lucide-react';
import type { CartItem } from '../../lib/cart-store';
import { baseUrl } from '../../lib/base-url';

interface CheckoutModalProps {
  items: CartItem[];
  subtotal: number;
  total: number;
  billingCycle: 'monthly' | 'annual';
  setupTotal: number;
  savings: number;
  onClose: () => void;
}

export function CheckoutModal({ 
  items, 
  subtotal, 
  total, 
  billingCycle, 
  setupTotal,
  savings,
  onClose 
}: CheckoutModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    companySize: '',
    industry: '',
    website: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch(`${baseUrl}/api/submit-quote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          items,
          subtotal,
          total,
          billingCycle,
          setupTotal,
          savings,
          timestamp: new Date().toISOString()
        }),
      });
      
      if (!response.ok) {
        throw new Error('Error al enviar la solicitud');
      }
      
      const result = await response.json();
      
      // Redirect a página de confirmación con quoteId
      window.location.href = `${baseUrl}/planes/confirmacion?quote=${result.quoteId}&email=${encodeURIComponent(formData.email)}&name=${encodeURIComponent(formData.name)}`;
      
    } catch (err) {
      setError('Hubo un error al enviar tu solicitud. Por favor intenta de nuevo o contáctanos directamente a sales@agentsbooster.com');
      setLoading(false);
    }
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content checkout-modal-v3" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close" aria-label="Cerrar">
          <X size={24} />
        </button>
        
        <div className="modal-split">
          {/* LEFT: Proceso + Resumen */}
          <div className="modal-summary-section">
            {/* Proceso Explicado */}
            <div className="process-section">
              <h2 className="process-title">🎯 Qué sucede después</h2>
              <div className="process-steps">
                <div className="process-step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h3 className="step-title">Envías tu solicitud</h3>
                    <p className="step-description">
                      Completa el formulario con tus datos y lo que necesitas automatizar.
                    </p>
                  </div>
                </div>
                
                <div className="process-step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h3 className="step-title">Recibes tu cotización</h3>
                    <p className="step-description">
                      En tu email: cotización detallada + link para agendar onboarding (30 min).
                    </p>
                  </div>
                </div>
                
                <div className="process-step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h3 className="step-title">Agendas llamada</h3>
                    <p className="step-description">
                      Eliges el horario que te funcione. Nuestro equipo te hace demo personalizada.
                    </p>
                  </div>
                </div>
                
                <div className="process-step process-step-highlight">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h3 className="step-title">Cierras el pago</h3>
                    <p className="step-description">
                      En la llamada definimos alcance, acordamos términos, y cerramos contrato.
                    </p>
                  </div>
                </div>
                
                <div className="process-step">
                  <div className="step-number">5</div>
                  <div className="step-content">
                    <h3 className="step-title">Implementación</h3>
                    <p className="step-description">
                      Comenzamos la implementación GRATIS (normalmente ${setupTotal}). Listo en 48-72h.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="summary-divider"></div>
            
            {/* Resumen de Configuración */}
            <div className="summary-header">
              <h2 className="summary-title">📋 Tu Configuración</h2>
            </div>
            
            <div className="summary-items-list">
              {items.map((item) => {
                const itemPrice = billingCycle === 'annual' ? Math.round(item.basePrice * 0.8) : item.basePrice;
                const addonsTotal = item.expansionPacks.reduce((sum, pack) => {
                  const packPrice = billingCycle === 'annual' ? Math.round(pack.price * 0.8) : pack.price;
                  return sum + packPrice;
                }, 0);
                const itemTotal = itemPrice + addonsTotal;
                
                return (
                  <div key={item.agentId} className="summary-item-card">
                    <div className="summary-item-header">
                      <span className="summary-item-icon">{item.agentIcon}</span>
                      <div className="summary-item-info">
                        <span className="summary-item-name">{item.agentName}</span>
                        <span className="summary-item-level">{item.levelName}</span>
                      </div>
                      <span className="summary-item-price">${itemTotal}/mes</span>
                    </div>
                    
                    {item.expansionPacks.length > 0 && (
                      <div className="summary-item-addons">
                        {item.expansionPacks.map((pack) => {
                          const packPrice = billingCycle === 'annual' ? Math.round(pack.price * 0.8) : pack.price;
                          return (
                            <div key={pack.packId} className="summary-addon">
                              <span>+ {pack.packName}</span>
                              <span>${packPrice}/mes</span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            <div className="summary-totals">
              <div className="summary-row">
                <span>Subtotal mensual:</span>
                <span className="summary-value">${subtotal}/mes</span>
              </div>
              
              {savings > 0 && (
                <div className="summary-row summary-savings">
                  <span>💰 Ahorro anual:</span>
                  <span className="summary-value-green">${savings}/año</span>
                </div>
              )}
              
              <div className="summary-row summary-setup">
                <span>Setup completo:</span>
                <span className="summary-value">
                  <span className="crossed">${setupTotal}</span>
                  <span className="free">GRATIS</span>
                </span>
              </div>
              
              <div className="summary-row summary-final">
                <span>TOTAL {billingCycle === 'annual' ? 'ANUAL' : 'MENSUAL'}:</span>
                <span className="summary-value-final">
                  ${total} USD{billingCycle === 'annual' ? '/año' : '/mes'}
                </span>
              </div>
            </div>
          </div>
          
          {/* RIGHT: Formulario */}
          <div className="modal-form-section">
            <div className="form-header">
              <h2 className="form-title">📨 Envía tu Solicitud</h2>
              <p className="form-subtitle">
                Completa tus datos para recibir la cotización detallada y agendar tu llamada de onboarding.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="checkout-form-v3">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <User size={16} />
                    <span>Nombre completo <span className="required">*</span></span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Ej: Juan Pérez"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <Mail size={16} />
                    <span>Email corporativo <span className="required">*</span></span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="juan@empresa.com"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    <Phone size={16} />
                    <span>Teléfono (WhatsApp) <span className="required">*</span></span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="+593 999 999 999"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="company" className="form-label">
                    <Building2 size={16} />
                    <span>Empresa <span className="required">*</span></span>
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="companySize" className="form-label">
                    <Users size={16} />
                    <span>Tamaño de empresa <span className="required">*</span></span>
                  </label>
                  <select
                    id="companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    required
                    className="form-select"
                  >
                    <option value="">Selecciona...</option>
                    <option value="1-10">1-10 empleados (Startup)</option>
                    <option value="11-50">11-50 empleados (Pequeña)</option>
                    <option value="51-200">51-200 empleados (Mediana)</option>
                    <option value="201-1000">201-1000 empleados (Grande)</option>
                    <option value="1000+">1000+ empleados (Enterprise)</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="industry" className="form-label">
                    <Building2 size={16} />
                    <span>Industria</span>
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Selecciona...</option>
                    <option value="ecommerce">E-commerce / Retail</option>
                    <option value="saas">SaaS / Tecnología</option>
                    <option value="manufacturing">Manufactura / Producción</option>
                    <option value="services">Servicios Profesionales</option>
                    <option value="healthcare">Salud / Healthcare</option>
                    <option value="finance">Finanzas / Seguros</option>
                    <option value="education">Educación</option>
                    <option value="logistics">Logística / Transporte</option>
                    <option value="realestate">Bienes Raíces</option>
                    <option value="other">Otra</option>
                  </select>
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="website" className="form-label">
                  <span>Sitio web (opcional)</span>
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="https://tuempresa.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  <span>¿Qué procesos quieres automatizar?</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  className="form-textarea"
                  placeholder="Ej: Atención al cliente en WhatsApp, gestión de inventario, procesamiento de pedidos..."
                />
              </div>
              
              {error && (
                <div className="form-error">
                  {error}
                </div>
              )}
              
              <button
                type="submit"
                disabled={loading}
                className="form-submit-v3"
              >
                {loading ? (
                  <>
                    <Loader2 size={18} className="spin" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Enviar Solicitud y Recibir Cotización</span>
                  </>
                )}
              </button>
              
              <p className="form-disclaimer-v3">
                🔒 Al enviar recibirás: <strong>(1)</strong> Cotización detallada por email, 
                <strong>(2)</strong> Link de Calendly para agendar llamada de onboarding, 
                <strong>(3)</strong> Contacto de nuestro equipo en menos de 24h.
                El pago se cierra después de la llamada.
              </p>
            </form>
          </div>
        </div>
      </div>
      
      <style>{`
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10000;
          padding: 20px;
          overflow-y: auto;
        }
        
        .checkout-modal-v3 {
          position: relative;
          width: 100%;
          max-width: 1400px;
          background: linear-gradient(135deg, rgba(8, 8, 24, 0.98) 0%, rgba(11, 13, 14, 0.98) 100%);
          border: 2px solid rgba(200, 152, 40, 0.3);
          border-radius: 24px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6), 0 0 80px rgba(200, 152, 40, 0.2);
          max-height: 95vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        
        .modal-close {
          position: absolute;
          top: 20px;
          right: 20px;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
          color: rgba(255, 255, 255, 0.7);
          z-index: 10;
        }
        
        .modal-close:hover {
          background: rgba(255, 107, 107, 0.2);
          border-color: rgba(255, 107, 107, 0.4);
          color: #FF6B6B;
          transform: scale(1.05);
        }
        
        .modal-split {
          display: grid;
          grid-template-columns: 440px 1fr;
          gap: 0;
          height: 100%;
          overflow: hidden;
        }
        
        /* LEFT: Process + Summary */
        .modal-summary-section {
          padding: 48px 32px;
          background: linear-gradient(135deg, rgba(200, 152, 40, 0.08) 0%, rgba(200, 152, 40, 0.02) 100%);
          border-right: 2px solid rgba(200, 152, 40, 0.2);
          overflow-y: auto;
        }
        
        .modal-summary-section::-webkit-scrollbar {
          width: 6px;
        }
        
        .modal-summary-section::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.03);
        }
        
        .modal-summary-section::-webkit-scrollbar-thumb {
          background: rgba(200, 152, 40, 0.4);
          border-radius: 10px;
        }
        
        /* Process Section */
        .process-section {
          margin-bottom: 32px;
        }
        
        .process-title {
          font-size: 22px;
          font-weight: 900;
          color: #FFFFFF;
          margin-bottom: 24px;
        }
        
        .process-steps {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        
        .process-step {
          display: flex;
          gap: 16px;
          padding: 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          transition: all 0.3s ease;
        }
        
        .process-step:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(200, 152, 40, 0.3);
        }
        
        .process-step-highlight {
          background: rgba(200, 152, 40, 0.1);
          border-color: rgba(200, 152, 40, 0.4);
        }
        
        .step-number {
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #C89828 0%, #E0B84E 100%);
          color: #080818;
          font-size: 16px;
          font-weight: 900;
          border-radius: 50%;
        }
        
        .step-content {
          flex: 1;
        }
        
        .step-title {
          font-size: 14px;
          font-weight: 800;
          color: #FFFFFF;
          margin-bottom: 4px;
        }
        
        .step-description {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
          margin: 0;
        }
        
        .summary-divider {
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, rgba(200, 152, 40, 0.3) 50%, transparent 100%);
          margin: 32px 0;
        }
        
        .summary-header {
          margin-bottom: 20px;
        }
        
        .summary-title {
          font-size: 20px;
          font-weight: 900;
          color: #FFFFFF;
        }
        
        .summary-items-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }
        
        .summary-item-card {
          padding: 16px;
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
        }
        
        .summary-item-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
        }
        
        .summary-item-icon {
          font-size: 28px;
          line-height: 1;
        }
        
        .summary-item-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .summary-item-name {
          font-size: 13px;
          font-weight: 800;
          color: #FFFFFF;
        }
        
        .summary-item-level {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.6);
          font-weight: 600;
        }
        
        .summary-item-price {
          font-size: 15px;
          font-weight: 900;
          background: linear-gradient(135deg, #C89828 0%, #F4D56E 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .summary-item-addons {
          padding-left: 40px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-top: 8px;
        }
        
        .summary-addon {
          display: flex;
          justify-content: space-between;
          font-size: 11px;
          color: rgba(255, 255, 255, 0.7);
        }
        
        .summary-totals {
          padding: 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 2px solid rgba(200, 152, 40, 0.2);
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.8);
        }
        
        .summary-value {
          font-weight: 700;
          color: #FFFFFF;
        }
        
        .summary-savings {
          padding: 8px 12px;
          background: rgba(0, 255, 136, 0.1);
          border: 1px solid rgba(0, 255, 136, 0.3);
          border-radius: 8px;
        }
        
        .summary-value-green {
          font-weight: 900;
          color: #00FF88;
        }
        
        .summary-setup {
          padding: 8px 12px;
          background: rgba(200, 152, 40, 0.1);
          border: 1px solid rgba(200, 152, 40, 0.3);
          border-radius: 8px;
        }
        
        .crossed {
          color: rgba(255, 255, 255, 0.4);
          text-decoration: line-through;
          margin-right: 8px;
        }
        
        .free {
          color: #00FF88;
          font-weight: 900;
          font-size: 12px;
        }
        
        .summary-final {
          padding-top: 12px;
          margin-top: 8px;
          border-top: 2px solid rgba(200, 152, 40, 0.3);
          font-weight: 800;
        }
        
        .summary-value-final {
          font-size: 18px;
          font-weight: 900;
          background: linear-gradient(135deg, #C89828 0%, #F4D56E 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        /* RIGHT: Form */
        .modal-form-section {
          padding: 48px 40px;
          overflow-y: auto;
        }
        
        .modal-form-section::-webkit-scrollbar {
          width: 6px;
        }
        
        .modal-form-section::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.03);
        }
        
        .modal-form-section::-webkit-scrollbar-thumb {
          background: rgba(200, 152, 40, 0.4);
          border-radius: 10px;
        }
        
        .form-header {
          margin-bottom: 32px;
        }
        
        .form-title {
          font-size: 28px;
          font-weight: 900;
          color: #FFFFFF;
          margin-bottom: 8px;
        }
        
        .form-subtitle {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
          line-height: 1.6;
        }
        
        .checkout-form-v3 {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        
        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .form-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .form-label svg {
          color: #C89828;
        }
        
        .required {
          color: #FF6B6B;
        }
        
        .form-input,
        .form-select,
        .form-textarea {
          width: 100%;
          padding: 14px 16px;
          background: rgba(255, 255, 255, 0.04);
          border: 2px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: #FFFFFF;
          font-size: 14px;
          font-family: inherit;
          transition: all 0.3s ease;
        }
        
        .form-input::placeholder,
        .form-textarea::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }
        
        .form-input:focus,
        .form-select:focus,
        .form-textarea:focus {
          outline: none;
          border-color: rgba(200, 152, 40, 0.5);
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 0 0 4px rgba(200, 152, 40, 0.1);
        }
        
        .form-select {
          cursor: pointer;
        }
        
        .form-textarea {
          resize: vertical;
          min-height: 80px;
        }
        
        .form-error {
          padding: 16px;
          background: rgba(255, 107, 107, 0.15);
          border: 2px solid rgba(255, 107, 107, 0.3);
          border-radius: 12px;
          color: #FF6B6B;
          font-size: 13px;
          line-height: 1.5;
        }
        
        .form-submit-v3 {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 18px;
          background: linear-gradient(135deg, #C89828 0%, #E0B84E 100%);
          color: #080818;
          font-size: 15px;
          font-weight: 800;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 6px 20px rgba(200, 152, 40, 0.4);
          margin-top: 8px;
        }
        
        .form-submit-v3:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 32px rgba(200, 152, 40, 0.6);
        }
        
        .form-submit-v3:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .spin {
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .form-disclaimer-v3 {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.6);
          text-align: center;
          line-height: 1.6;
          margin: 0;
        }
        
        .form-disclaimer-v3 strong {
          color: #C89828;
          font-weight: 800;
        }
        
        /* Responsive */
        @media (max-width: 1200px) {
          .modal-split {
            grid-template-columns: 1fr;
          }
          
          .modal-summary-section {
            border-right: none;
            border-bottom: 2px solid rgba(200, 152, 40, 0.2);
          }
        }
        
        @media (max-width: 768px) {
          .checkout-modal-v3 {
            max-height: 100vh;
            border-radius: 0;
          }
          
          .modal-summary-section,
          .modal-form-section {
            padding: 32px 24px;
          }
          
          .form-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .form-title {
            font-size: 24px;
          }
          
          .process-title,
          .summary-title {
            font-size: 18px;
          }
        }
      `}</style>
    </div>
  );
}
