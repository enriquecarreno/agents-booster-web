/**
 * ICON COMPONENT
 * Wrapper para Lucide Icons con estilos consistentes
 */

import React from 'react';
import * as Icons from 'lucide-react';

export type IconName = keyof typeof Icons;

interface IconProps {
  name: IconName;
  size?: number;
  className?: string;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({ 
  name, 
  size = 24, 
  className = '', 
  color = 'currentColor' 
}) => {
  const LucideIcon = Icons[name] as React.ComponentType<any>;
  
  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found in lucide-react`);
    return null;
  }

  return <LucideIcon size={size} className={className} color={color} />;
};

export default Icon;
