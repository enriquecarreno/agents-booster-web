/**
 * CHAT DEMO ANIMADO V3.0 - WORLD-CLASS
 * Phase 1: Human timing, Natural pauses, More realistic
 * ✅ PREPARADO PARA CONECTAR BACKEND REAL
 */

import React, { useState, useEffect } from 'react';
import styles from './ChatDemoAnimated.module.css';

interface Message {
  id: number;
  sender: 'user' | 'agent' | 'system';
  text: string;
  delay: number;
  systemAction?: string;
  timestamp?: Date;
}

interface ChatDemoProps {
  isLive?: boolean;
  messages?: Message[];
  onMessage?: (message: Message) => void;
  agentName?: string;
  agentType?: 'sales' | 'operations' | 'support';
}

// IMPROVED: Variable delays para timing más humano
const getRandomDelay = (base: number, variance: number) => {
  return base + Math.random() * variance;
};

const demoMessages: Message[] = [
  {
    id: 1,
    sender: 'user',
    text: '¡Hola! ¿Tienen el iPhone 15 Pro en stock?',
    delay: 600, // Variable: 600-1000ms
  },
  {
    id: 2,
    sender: 'system',
    text: '🔍 Consultando inventario en tiempo real...',
    systemAction: 'inventory-check',
    delay: 800, // Pausa antes de system message
  },
  {
    id: 3,
    sender: 'agent',
    text: '¡Hola! Sí, tenemos el iPhone 15 Pro disponible. Tenemos 3 colores en stock: Negro Titanio, Titanio Natural y Titanio Azul. Precio: $1,199 USD. ¿Te interesa alguno en particular?',
    delay: 1400, // Variable: 1400-2000ms (más texto = más delay)
  },
  {
    id: 4,
    sender: 'user',
    text: 'El negro titanio. ¿Cuándo lo puedo recibir?',
    delay: 1200, // Variable: 1200-1800ms
  },
  {
    id: 5,
    sender: 'system',
    text: '📦 Calculando tiempos de entrega según ubicación...',
    systemAction: 'shipping-calc',
    delay: 700, // Quick system response
  },
  {
    id: 6,
    sender: 'agent',
    text: 'Perfecto. El iPhone 15 Pro Negro Titanio puede llegar a tu dirección en 2-3 días hábiles con envío express ($15) o 5-7 días con envío estándar (gratis). ¿Cuál prefieres?',
    delay: 1600, // Variable: 1600-2200ms
  },
  {
    id: 7,
    sender: 'user',
    text: 'Express, por favor. ¿Cómo pago?',
    delay: 1000, // Variable: 1000-1500ms
  },
  {
    id: 8,
    sender: 'system',
    text: '💳 Generando link de pago seguro...',
    systemAction: 'payment-link',
    delay: 900, // Variable: 900-1300ms
  },
  {
    id: 9,
    sender: 'agent',
    text: 'Te envío el link de pago por $1,214 USD (producto + envío). Aceptamos todas las tarjetas. Una vez procesado el pago, recibirás confirmación y número de tracking. ¿Necesitas factura?',
    delay: 1500, // Variable: 1500-2100ms
  },
  {
    id: 10,
    sender: 'user',
    text: 'Sí, por favor.',
    delay: 700, // Short response
  },
  {
    id: 11,
    sender: 'system',
    text: '📝 Registrando en CRM + actualizando inventario...',
    systemAction: 'crm-update',
    delay: 800, // Variable: 800-1200ms
  },
  {
    id: 12,
    sender: 'agent',
    text: '✅ Perfecto. Pago procesado. Tu pedido #AB-2847 está confirmado. Tracking: 1Z999AA10123456784. Te envié la factura por email. ¡Gracias por tu compra!',
    delay: 1800, // Final message, more delay
  },
];

const ChatDemoAnimated: React.FC<ChatDemoProps> = ({
  isLive = false,
  messages: externalMessages,
  onMessage,
  agentName = 'Agente de Ventas',
  agentType = 'sales',
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  // Si es live y hay mensajes externos, usarlos
  useEffect(() => {
    if (isLive && externalMessages) {
      setMessages(externalMessages);
      return;
    }
  }, [isLive, externalMessages]);

  // Demo mode animation - IMPROVED with human timing
  useEffect(() => {
    if (isLive) return;

    if (currentIndex < demoMessages.length) {
      const currentMessage = demoMessages[currentIndex];
      
      // Add variance to delays (± 30%)
      const variance = currentMessage.delay * 0.3;
      const actualDelay = getRandomDelay(
        currentMessage.delay - variance / 2,
        variance
      );
      
      const timer = setTimeout(() => {
        if (currentMessage.sender === 'agent') {
          setIsTyping(true);
          
          // Variable typing duration based on message length
          const typingDuration = Math.min(
            1000 + (currentMessage.text.length * 12), // 12ms per char
            2500 // Max 2.5s
          );
          
          setTimeout(() => {
            setMessages((prev) => [...prev, currentMessage]);
            setIsTyping(false);
            setCurrentIndex((prev) => prev + 1);
          }, typingDuration);
        } else {
          setMessages((prev) => [...prev, currentMessage]);
          setCurrentIndex((prev) => prev + 1);
        }
      }, actualDelay);

      return () => clearTimeout(timer);
    } else if (currentIndex === demoMessages.length && !isComplete) {
      setIsComplete(true);
      // Restart after 5 seconds (was 4)
      setTimeout(() => {
        setMessages([]);
        setCurrentIndex(0);
        setIsComplete(false);
      }, 5000);
    }
  }, [currentIndex, isComplete, isLive]);

  const getSystemIcon = (action?: string) => {
    switch (action) {
      case 'inventory-check':
        return '📦';
      case 'shipping-calc':
        return '🚚';
      case 'payment-link':
        return '💳';
      case 'crm-update':
        return '📊';
      default:
        return '⚙️';
    }
  };

  const getAgentIcon = () => {
    switch (agentType) {
      case 'sales':
        return '💼';
      case 'operations':
        return '⚙️';
      case 'support':
        return '🎧';
      default:
        return '🤖';
    }
  };

  return (
    <div className={styles.chatDemo}>
      {/* Header */}
      <div className={styles.chatHeader}>
        <div className={styles.headerLeft}>
          <div className={styles.agentAvatar}>{getAgentIcon()}</div>
          <div className={styles.headerInfo}>
            <div className={styles.agentName}>{agentName}</div>
            <div className={styles.agentStatus}>
              <span className={styles.statusDot}></span>
              {isLive ? 'En vivo • Conectado' : 'Demo • Simulación'}
            </div>
          </div>
        </div>
        <div className={styles.headerRight}>
          <div className={`${styles.badge} ${isLive ? styles.live : styles.demo}`}>
            {isLive ? '🔴 En vivo' : '▶️ Demo'}
          </div>
        </div>
      </div>

      {/* Chat Body */}
      <div className={styles.chatBody}>
        {messages.map((message) => (
          <div
            key={message.id}
            className={`${styles.message} ${styles[message.sender]}`}
          >
            {message.sender === 'system' ? (
              <div className={styles.systemMessage}>
                <span className={styles.systemIcon}>
                  {getSystemIcon(message.systemAction)}
                </span>
                <span className={styles.systemText}>{message.text}</span>
                <div className={styles.systemLoader}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            ) : (
              <>
                {message.sender === 'agent' && (
                  <div className={styles.messageAvatar}>AI</div>
                )}
                <div className={styles.messageBubble}>
                  <div className={styles.messageText}>{message.text}</div>
                  {message.timestamp && (
                    <div className={styles.timestamp}>
                      {new Date(message.timestamp).toLocaleTimeString('es', {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </div>
                  )}
                </div>
                {message.sender === 'user' && (
                  <div className={styles.messageAvatar}>👤</div>
                )}
              </>
            )}
          </div>
        ))}

        {isTyping && (
          <div className={`${styles.message} ${styles.agent}`}>
            <div className={styles.messageAvatar}>AI</div>
            <div className={styles.messageBubble}>
              <div className={styles.typingIndicator}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}

        {isComplete && (
          <div className={styles.completeMessage}>
            ✅ Venta completada • CRM actualizado • Cliente satisfecho
          </div>
        )}
      </div>

      {/* Footer */}
      <div className={styles.chatFooter}>
        <div className={styles.footerStats}>
          <div className={styles.footerStat}>
            <span className={styles.statIcon}>⚡</span>
            <span className={styles.statText}>Respuesta instantánea</span>
          </div>
          <div className={styles.footerStat}>
            <span className={styles.statIcon}>🔗</span>
            <span className={styles.statText}>5 sistemas conectados</span>
          </div>
          <div className={styles.footerStat}>
            <span className={styles.statIcon}>💰</span>
            <span className={styles.statText}>Venta en 60s</span>
          </div>
        </div>
      </div>

      {/* Ready to connect indicator (solo en demo mode) */}
      {!isLive && (
        <div className={styles.readyIndicator}>
          <span className={styles.readyIcon}>🔌</span>
          <span className={styles.readyText}>Listo para conectar con agente real</span>
        </div>
      )}
    </div>
  );
};

export default ChatDemoAnimated;
