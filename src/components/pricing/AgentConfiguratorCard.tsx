/**
 * AGENT CONFIGURATOR CARD
 * Card de agente con expansion packs y sistema de agregar al carrito
 */

import { useState } from 'react';
import { Agent } from '../../lib/agents-data';
import { useCartStore } from '../../lib/cart-store';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

interface AgentConfiguratorCardProps {
  agent: Agent;
  billingCycle: 'monthly' | 'annual';
}

export function AgentConfiguratorCard({ agent, billingCycle }: AgentConfiguratorCardProps) {
  const [showExpansionPacks, setShowExpansionPacks] = useState(false);
  const { items, addAgent, removeAgent, toggleExpansionPack } = useCartStore();
  
  // Verificar si este agente está en el carrito
  const cartItem = items.find(item => item.agentId === agent.id);
  const isInCart = !!cartItem;
  
  // Para agentes beta o próximamente
  const isBeta = !agent.available;
  const isCustom = agent.id === 'personalizado';
  
  // Obtener el nivel base (primer nivel o el popular)
  const baseLevel = agent.levels?.find(l => l.popular) || agent.levels?.[0];
  
  if (!baseLevel) return null;
  
  const basePrice = baseLevel.price || 0;
  const displayPrice = billingCycle === 'annual' && basePrice ? basePrice * 0.8 : basePrice;
  
  const handleToggleAgent = () => {
    if (isInCart) {
      removeAgent(agent.id);
    } else {
      addAgent({
        agentId: agent.id,
        agentName: agent.name,
        agentIcon: agent.icon,
        levelId: baseLevel.id,
        levelName: baseLevel.name,
        basePrice: baseLevel.price || 0,
        setup: baseLevel.setup || 0,
        expansionPacks: []
      });
    }
  };
  
  const handleToggleExpansionPack = (packId: string) => {
    if (isInCart) {
      toggleExpansionPack(agent.id, packId);
    }
  };
  
  const hasExpansionPacks = agent.levels && agent.levels.length > 1;
  
  return (
    <div 
      className={`agent-card ${isInCart ? 'agent-card-selected' : ''} ${isBeta ? 'agent-card-beta' : ''}`}
      data-agent-id={agent.id}
    >
      {/* Badge de status */}
      <div className="agent-badges">
        {isBeta && <span className="agent-badge agent-badge-beta">BETA</span>}
        {baseLevel.popular && <span className="agent-badge agent-badge-popular">MÁS POPULAR</span>}
        {!isBeta && !isCustom && <span className="agent-badge agent-badge-available">DISPONIBLE</span>}
      </div>
      
      {/* Header */}
      <div className="agent-card-header">
        <div className="agent-icon">{agent.icon}</div>
        <div className="agent-header-text">
          <h3 className="agent-name">{agent.name}</h3>
          <p className="agent-tagline">{agent.tagline}</p>
        </div>
      </div>
      
      {/* Pricing */}
      <div className="agent-pricing">
        {isCustom && baseLevel.isCustom ? (
          <div className="agent-price-custom">
            <span className="price-label">Bajo cotización</span>
          </div>
        ) : (
          <>
            <div className="agent-price">
              <span className="price-currency">$</span>
              <span className="price-amount">{Math.round(displayPrice)}</span>
              <span className="price-period">USD/mes</span>
            </div>
            {billingCycle === 'annual' && basePrice && (
              <div className="price-savings">
                Ahorras ${Math.round(basePrice * 0.2 * 12)}/año
              </div>
            )}
          </>
        )}
        
        {baseLevel.interactions && (
          <div className="agent-interactions">
            {typeof baseLevel.interactions === 'number' 
              ? `${baseLevel.interactions.toLocaleString()} interacciones incluidas`
              : baseLevel.interactions
            }
          </div>
        )}
      </div>
      
      {/* Features principales */}
      <div className="agent-features">
        {baseLevel.features.slice(0, 4).map((feature, idx) => (
          <div key={idx} className="agent-feature">
            <Check size={16} className="feature-check" />
            <span>{feature}</span>
          </div>
        ))}
        {baseLevel.features.length > 4 && (
          <div className="agent-feature-more">
            +{baseLevel.features.length - 4} características más
          </div>
        )}
      </div>
      
      {/* CTA Principal */}
      <button
        onClick={handleToggleAgent}
        className={`agent-add-btn ${isInCart ? 'agent-add-btn-added' : ''}`}
        disabled={isBeta && agent.id !== 'personalizado'}
      >
        {isBeta && agent.id !== 'personalizado' ? (
          <>
            <span>Próximamente</span>
          </>
        ) : isInCart ? (
          <>
            <Check size={18} />
            <span>Agregado al carrito</span>
          </>
        ) : (
          <>
            <span>Agregar al carrito</span>
          </>
        )}
      </button>
      
      {/* Expansion Packs */}
      {hasExpansionPacks && !isCustom && (
        <div className="expansion-packs-section">
          <button
            onClick={() => setShowExpansionPacks(!showExpansionPacks)}
            className="expansion-packs-toggle"
            disabled={!isInCart}
          >
            <span>Niveles disponibles ({agent.levels!.length})</span>
            {showExpansionPacks ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          
          {showExpansionPacks && isInCart && (
            <div className="expansion-packs-list">
              {agent.levels!.map((level) => {
                const isSelected = cartItem?.levelId === level.id;
                const levelPrice = billingCycle === 'annual' && level.price 
                  ? level.price * 0.8 
                  : level.price;
                
                return (
                  <label key={level.id} className="expansion-pack-item">
                    <input
                      type="radio"
                      name={`level-${agent.id}`}
                      checked={isSelected}
                      onChange={() => {
                        // Cambiar de nivel
                        removeAgent(agent.id);
                        addAgent({
                          agentId: agent.id,
                          agentName: agent.name,
                          agentIcon: agent.icon,
                          levelId: level.id,
                          levelName: level.name,
                          basePrice: level.price || 0,
                          setup: level.setup || 0,
                          expansionPacks: []
                        });
                      }}
                    />
                    <div className="pack-content">
                      <div className="pack-header">
                        <span className="pack-name">{level.name}</span>
                        {levelPrice ? (
                          <span className="pack-price">+${Math.round(levelPrice - displayPrice)}/mes</span>
                        ) : (
                          <span className="pack-price">Cotización</span>
                        )}
                      </div>
                      <p className="pack-description">{level.tagline}</p>
                    </div>
                  </label>
                );
              })}
            </div>
          )}
        </div>
      )}
      
      {/* Link a página individual del agente */}
      {!isCustom && (
        <a href={`/agentes/${agent.id}`} className="agent-learn-more">
          Ver detalles completos →
        </a>
      )}
      
      {/* CTA para hablar con Diego */}
      <div className="agent-help">
        <p>
          ¿Tienes dudas sobre este agente?{' '}
          <a href="/demo" className="diego-link">
            Pregúntale a Diego
          </a>
        </p>
      </div>
    </div>
  );
}
