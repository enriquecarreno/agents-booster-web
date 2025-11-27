/**
 * DASHBOARD ANIMATION V2 - SIMPLIFICADO
 * Versión más simple y funcional
 */

import { useEffect, useRef } from 'react';
import styles from './DashboardAnimation.module.css';

export default function DashboardAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Activar animaciones progresivamente
    const cards = container.querySelectorAll('[data-card]');
    cards.forEach((card, i) => {
      setTimeout(() => {
        (card as HTMLElement).style.opacity = '1';
        (card as HTMLElement).style.transform = 'translateY(0)';
      }, i * 150);
    });
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      
      {/* Isotipo de fondo */}
      <div className={styles.backdrop}>
        <img src="/isotipo-gold.png" alt="" className={styles.isotipoImg} />
      </div>

      {/* Grid decorativo */}
      <div className={styles.gridOverlay} />

      {/* Cards Grid */}
      <div className={styles.cardsGrid}>
        
        {/* Card 1: Métricas */}
        <div className={styles.card} data-card="1">
          <div className={styles.cardHeader}>
            <span className={styles.cardIcon}>📊</span>
            <span className={styles.cardLabel}>Conversiones</span>
          </div>
          <div className={styles.metricValue}>
            <span className={styles.number}>156</span>
            <span className={styles.badge}>+24%</span>
          </div>
          <div className={styles.miniChart}>
            <div className={styles.bar} style={{ height: '40%' }}></div>
            <div className={styles.bar} style={{ height: '65%' }}></div>
            <div className={styles.bar} style={{ height: '50%' }}></div>
            <div className={styles.bar} style={{ height: '80%' }}></div>
            <div className={styles.bar} style={{ height: '100%' }}></div>
          </div>
        </div>

        {/* Card 2: Actividad */}
        <div className={styles.card} data-card="2">
          <div className={styles.cardHeader}>
            <span className={styles.cardIcon}>⚡</span>
            <span className={styles.cardLabel}>Actividad</span>
          </div>
          <div className={styles.activityList}>
            <div className={styles.activityItem}>
              <span className={styles.dot}></span>
              <span className={styles.activityText}>Lead calificado</span>
            </div>
            <div className={styles.activityItem}>
              <span className={styles.dot}></span>
              <span className={styles.activityText}>Email enviado</span>
            </div>
            <div className={styles.activityItem}>
              <span className={styles.dot}></span>
              <span className={styles.activityText}>Tarea completada</span>
            </div>
          </div>
        </div>

        {/* Card 3: Objetivos */}
        <div className={styles.card} data-card="3">
          <div className={styles.cardHeader}>
            <span className={styles.cardIcon}>🎯</span>
            <span className={styles.cardLabel}>Objetivos</span>
          </div>
          <div className={styles.progressList}>
            <div className={styles.progressItem}>
              <div className={styles.progressHeader}>
                <span>Ventas</span>
                <span className={styles.progressPercent}>87%</span>
              </div>
              <div className={styles.progressTrack}>
                <div className={styles.progressFill} style={{ width: '87%' }}></div>
              </div>
            </div>
            <div className={styles.progressItem}>
              <div className={styles.progressHeader}>
                <span>Leads</span>
                <span className={styles.progressPercent}>92%</span>
              </div>
              <div className={styles.progressTrack}>
                <div className={styles.progressFill} style={{ width: '92%' }}></div>
              </div>
            </div>
            <div className={styles.progressItem}>
              <div className={styles.progressHeader}>
                <span>Respuestas</span>
                <span className={styles.progressPercent}>78%</span>
              </div>
              <div className={styles.progressTrack}>
                <div className={styles.progressFill} style={{ width: '78%' }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Agentes */}
        <div className={styles.card} data-card="4">
          <div className={styles.cardHeader}>
            <span className={styles.cardIcon}>🤖</span>
            <span className={styles.cardLabel}>Agentes</span>
          </div>
          <div className={styles.agentsGrid}>
            <div className={styles.agentItem}>
              <span className={styles.agentDot}></span>
              <span>Ventas</span>
            </div>
            <div className={styles.agentItem}>
              <span className={styles.agentDot}></span>
              <span>Soporte</span>
            </div>
            <div className={styles.agentItem}>
              <span className={styles.agentDot}></span>
              <span>Marketing</span>
            </div>
            <div className={styles.agentItem}>
              <span className={styles.agentDot} style={{ background: '#FFB800' }}></span>
              <span>Operaciones</span>
            </div>
          </div>
        </div>

      </div>

      {/* Elementos flotantes decorativos */}
      <div className={styles.particles}>
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className={styles.particle}
            style={{
              left: `${15 + i * 12}%`,
              top: `${25 + (i % 3) * 20}%`,
              animationDelay: `${i * 0.4}s`
            }}
          />
        ))}
      </div>

    </div>
  );
}
