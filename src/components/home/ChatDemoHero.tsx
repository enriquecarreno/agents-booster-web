/**
 * CHAT DEMO HERO - Visual Animated Teaser
 * Muestra un agente en acción (SIN backend aún, solo animación)
 * Preparado para conectar agente real después
 */

import { useState, useEffect } from 'react';
import { Bot, User, CheckCircle2, Loader2, Database, ShoppingCart } from 'lucide-react';

interface Message {
  id: number;
  type: 'user' | 'agent';
  text: string;
  status?: 'typing' | 'processing' | 'done';
  metadata?: string;
}

const DEMO_SEQUENCE: Message[] = [
  {
    id: 1,
    type: 'user',
    text: '¿Cuál es el status del pedido #1847?',
  },
  {
    id: 2,
    type: 'agent',
    text: 'Consultando en tu sistema...',
    status: 'processing',
    metadata: 'Conectando con ERP',
  },
  {
    id: 3,
    type: 'agent',
    text: 'Pedido #1847: Despachado hoy 14:30. Llegada estimada: mañana 10-12h. Cliente: Retail Plus S.A.',
    status: 'done',
  },
  {
    id: 4,
    type: 'user',
    text: 'Notifica al cliente por WhatsApp',
  },
  {
    id: 5,
    type: 'agent',
    text: 'Enviando notificación...',
    status: 'processing',
    metadata: 'WhatsApp Business API',
  },
  {
    id: 6,
    type: 'agent',
    text: '✓ Mensaje enviado a +593 99 123 4567. Cliente confirmó recepción.',
    status: 'done',
  },
];

export default function ChatDemoHero() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (currentIndex >= DEMO_SEQUENCE.length) {
      // Restart after 2 seconds
      const restartTimer = setTimeout(() => {
        setMessages([]);
        setCurrentIndex(0);
      }, 3000);
      return () => clearTimeout(restartTimer);
    }

    const timer = setTimeout(() => {
      const nextMessage = DEMO_SEQUENCE[currentIndex];
      
      if (nextMessage.type === 'agent' && nextMessage.status === 'processing') {
        // Show typing indicator
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, nextMessage]);
          setCurrentIndex(prev => prev + 1);
        }, 1500);
      } else {
        setMessages(prev => [...prev, nextMessage]);
        setCurrentIndex(prev => prev + 1);
      }
    }, currentIndex === 0 ? 500 : 2000);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="chat-demo-container">
      {/* Header */}
      <div className="chat-header">
        <div className="agent-info">
          <div className="agent-avatar">
            <Bot size={20} strokeWidth={2.5} />
          </div>
          <div className="agent-details">
            <span className="agent-name">Agente de Ventas</span>
            <div className="agent-status">
              <div className="status-dot"></div>
              <span>Activo 24/7</span>
            </div>
          </div>
        </div>
        <div className="connected-badge">
          <Database size={14} strokeWidth={2.5} />
          <span>Conectado a CRM, ERP</span>
        </div>
      </div>

      {/* Messages */}
      <div className="chat-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.type === 'user' ? 'message-user' : 'message-agent'}`}
          >
            {message.type === 'agent' && (
              <div className="message-avatar">
                <Bot size={18} strokeWidth={2.5} />
              </div>
            )}
            
            <div className="message-content">
              {message.metadata && (
                <div className="message-metadata">
                  <Loader2 size={12} className="spin" />
                  <span>{message.metadata}</span>
                </div>
              )}
              <div className="message-bubble">
                <p>{message.text}</p>
                {message.status === 'done' && (
                  <CheckCircle2 size={14} className="check-icon" strokeWidth={2.5} />
                )}
              </div>
            </div>

            {message.type === 'user' && (
              <div className="message-avatar message-avatar-user">
                <User size={18} strokeWidth={2.5} />
              </div>
            )}
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="message message-agent">
            <div className="message-avatar">
              <Bot size={18} strokeWidth={2.5} />
            </div>
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="chat-footer">
        <div className="footer-content">
          <ShoppingCart size={16} strokeWidth={2.5} />
          <span>Así trabaja el agente con tus clientes reales</span>
        </div>
      </div>
    </div>
  );
}
