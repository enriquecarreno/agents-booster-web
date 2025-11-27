/**
 * STATS COUNTER - Animated Stats for Hero
 * Count-up animation con números impactantes
 */

import { useEffect, useState } from 'react';
import { TrendingUp, Clock, Zap } from 'lucide-react';

export default function StatsCounter() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    {
      icon: TrendingUp,
      value: 40,
      suffix: '%',
      label: 'Aumento en conversión',
      color: '#00FF88',
    },
    {
      icon: Zap,
      value: 3,
      suffix: 'x',
      label: 'Más rápido que humanos',
      color: '#C89828',
    },
    {
      icon: Clock,
      value: 15,
      suffix: '+',
      label: 'Horas ahorradas/semana',
      color: '#4A9EFF',
    },
  ];

  return (
    <div className="stats-counter-hero">
      {stats.map((stat, index) => (
        <StatItem
          key={index}
          {...stat}
          delay={index * 150}
          isVisible={isVisible}
        />
      ))}
    </div>
  );
}

interface StatItemProps {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
  value: number;
  suffix: string;
  label: string;
  color: string;
  delay: number;
  isVisible: boolean;
}

function StatItem({ icon: Icon, value, suffix, label, color, delay, isVisible }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 segundos
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        currentStep++;
        setCount(Math.min(Math.round(increment * currentStep), value));
        
        if (currentStep >= steps) {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, value, delay]);

  return (
    <div 
      className="stat-item-hero"
      style={{
        animationDelay: `${delay}ms`,
        '--stat-color': color,
      } as React.CSSProperties}
    >
      <div className="stat-icon-hero">
        <Icon size={28} strokeWidth={2.5} />
      </div>
      <div className="stat-content-hero">
        <div className="stat-value-hero">
          {count}{suffix}
        </div>
        <div className="stat-label-hero">{label}</div>
      </div>
    </div>
  );
}
