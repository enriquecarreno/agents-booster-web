/**
 * SYSTEMS ANIMATION V2 - SIMPLIFICADO
 * Muestra conexiones entre sistemas
 */

import { useEffect, useRef } from 'react';
import styles from './SystemsAnimation.module.css';

export default function SystemsAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Activar nodos progresivamente
    const nodes = container.querySelectorAll('[data-node]');
    nodes.forEach((node, i) => {
      setTimeout(() => {
        (node as HTMLElement).style.opacity = '1';
        (node as HTMLElement).style.transform = 'scale(1)';
      }, i * 200);
    });
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      
      {/* Centro: Isotipo */}
      <div className={styles.center}>
        <div className={styles.centerPulse} />
        <img src="/isotipo-gold.png" alt="Hub" className={styles.centerImg} />
      </div>

      {/* Nodos del sistema */}
      <div className={styles.node} data-node="1" style={{ top: '10%', left: '20%' }}>
        <span className={styles.nodeIcon}>📊</span>
        <span className={styles.nodeLabel}>CRM</span>
      </div>

      <div className={styles.node} data-node="2" style={{ top: '10%', right: '20%' }}>
        <span className={styles.nodeIcon}>📦</span>
        <span className={styles.nodeLabel}>ERP</span>
      </div>

      <div className={styles.node} data-node="3" style={{ top: '50%', left: '8%' }}>
        <span className={styles.nodeIcon}>✉️</span>
        <span className={styles.nodeLabel}>Email</span>
      </div>

      <div className={styles.node} data-node="4" style={{ top: '50%', right: '8%' }}>
        <span className={styles.nodeIcon}>💳</span>
        <span className={styles.nodeLabel}>Pagos</span>
      </div>

      <div className={styles.node} data-node="5" style={{ bottom: '10%', left: '20%' }}>
        <span className={styles.nodeIcon}>💬</span>
        <span className={styles.nodeLabel}>Chat</span>
      </div>

      <div className={styles.node} data-node="6" style={{ bottom: '10%', right: '20%' }}>
        <span className={styles.nodeIcon}>📅</span>
        <span className={styles.nodeLabel}>Agenda</span>
      </div>

      {/* Líneas de conexión */}
      <svg className={styles.lines}>
        <line x1="50%" y1="50%" x2="20%" y2="10%" className={styles.line} />
        <line x1="50%" y1="50%" x2="80%" y2="10%" className={styles.line} />
        <line x1="50%" y1="50%" x2="8%" y2="50%" className={styles.line} />
        <line x1="50%" y1="50%" x2="92%" y2="50%" className={styles.line} />
        <line x1="50%" y1="50%" x2="20%" y2="90%" className={styles.line} />
        <line x1="50%" y1="50%" x2="80%" y2="90%" className={styles.line} />
        
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(200, 152, 40, 0.8)" />
            <stop offset="100%" stopColor="rgba(244, 213, 110, 0.3)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Partículas flotantes */}
      <div className={styles.particles}>
        {[...Array(10)].map((_, i) => (
          <div 
            key={i} 
            className={styles.particle}
            style={{
              left: `${20 + i * 8}%`,
              top: `${20 + (i % 4) * 20}%`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>

    </div>
  );
}
