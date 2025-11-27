/**
 * AGENT ICON COMPONENT
 * Renderiza iconos de agentes con Lucide React
 * Reemplaza emojis con iconos profesionales
 */

import React from 'react';
import { 
  DollarSign, 
  Package, 
  Megaphone, 
  Users, 
  Target, 
  Settings 
} from 'lucide-react';

interface AgentIconProps {
  agentId: string;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

export const AgentIcon: React.FC<AgentIconProps> = ({ 
  agentId, 
  size = 64, 
  className = '', 
  strokeWidth = 2 
}) => {
  const iconMap: Record<string, React.ReactNode> = {
    'ventas': <DollarSign size={size} strokeWidth={strokeWidth} className={className} />,
    'operaciones': <Package size={size} strokeWidth={strokeWidth} className={className} />,
    'marketing': <Megaphone size={size} strokeWidth={strokeWidth} className={className} />,
    'rrhh': <Users size={size} strokeWidth={strokeWidth} className={className} />,
    'asistente': <Target size={size} strokeWidth={strokeWidth} className={className} />,
    'personalizado': <Settings size={size} strokeWidth={strokeWidth} className={className} />,
  };

  return <>{iconMap[agentId] || <DollarSign size={size} strokeWidth={strokeWidth} className={className} />}</>;
};

export default AgentIcon;
