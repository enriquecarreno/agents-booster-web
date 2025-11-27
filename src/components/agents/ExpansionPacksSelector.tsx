import { useState } from 'react';
import type { AgentLevel, Addon } from '../../lib/agents-data';

interface ExpansionPackDetail {
  id: string;
  name: string;
  price: number;
  setup: number;
  shortDesc: string;
  fullDesc: string;
  whatItDoes: string[];
  bestFor: string;
  icon: string;
}

interface Props {
  levels: AgentLevel[];
  addons: Addon[];
  expansionDetails: Record<string, ExpansionPackDetail>;
}

export default function ExpansionPacksSelector({ levels, addons, expansionDetails }: Props) {
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null);
  const [selectedPack, setSelectedPack] = useState<string | null>(null);

  const availablePacks = selectedLevel
    ? addons.filter(addon => addon.availableFor.includes(selectedLevel))
    : [];

  const handleLevelSelect = (levelId: string) => {
    setSelectedLevel(levelId);
    setSelectedPack(null);
  };

  const handlePackSelect = (packId: string) => {
    setSelectedPack(selectedPack === packId ? null : packId);
  };

  const selectedPackDetails = selectedPack ? expansionDetails[selectedPack] : null;

  return (
    <div className="expansion-packs-system">
      {/* Header */}
      <div className="expansion-header">
        <h3 className="expansion-title">Expansion Packs Disponibles</h3>
        <p className="expansion-subtitle">
          Selecciona tu plan para ver qué puedes agregarle para potenciarlo
        </p>
      </div>

      {/* Level Selector */}
      <div className="level-selector">
        <p className="selector-label">1. Selecciona tu plan:</p>
        <div className="level-buttons">
          {levels.map((level) => (
            <button
              key={level.id}
              onClick={() => handleLevelSelect(level.id)}
              className={`level-btn ${selectedLevel === level.id ? 'level-btn-active' : ''}`}
            >
              {level.name}
              {level.popular && <span className="level-badge">⭐</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Expansion Packs Grid */}
      {selectedLevel && (
        <div className="packs-container">
          <p className="selector-label">
            2. Expande tu plan {levels.find(l => l.id === selectedLevel)?.name}:
          </p>
          
          {availablePacks.length > 0 ? (
            <div className="packs-grid">
              {availablePacks.map((pack) => {
                const details = expansionDetails[pack.id];
                if (!details) return null;

                return (
                  <button
                    key={pack.id}
                    onClick={() => handlePackSelect(pack.id)}
                    className={`pack-card ${selectedPack === pack.id ? 'pack-card-active' : ''}`}
                  >
                    <div className="pack-icon">{details.icon}</div>
                    <div className="pack-header">
                      <h4 className="pack-name">{details.name}</h4>
                      <div className="pack-price">${details.price}/mes</div>
                    </div>
                    <p className="pack-short-desc">{details.shortDesc}</p>
                    {pack.setup > 0 && (
                      <p className="pack-setup">Setup: ${pack.setup}</p>
                    )}
                    <div className="pack-cta">
                      {selectedPack === pack.id ? 'Ver menos ▲' : 'Ver detalles ▼'}
                    </div>
                  </button>
                );
              })}
            </div>
          ) : (
            <div className="packs-empty">
              <p>
                {selectedLevel === 'custom' 
                  ? '✨ El plan Custom incluye expansión ilimitada. Cuéntanos qué necesitas y lo construimos.'
                  : '🎯 Este plan incluye todo lo esencial. Los Expansion Packs están disponibles en otros niveles.'}
              </p>
            </div>
          )}
        </div>
      )}

      {!selectedLevel && (
        <div className="packs-placeholder">
          <div className="placeholder-icon">👆</div>
          <p>Selecciona un plan arriba para ver sus Expansion Packs disponibles</p>
        </div>
      )}

      {/* Pack Details Modal */}
      {selectedPackDetails && (
        <div className="pack-details">
          <div className="details-header">
            <div className="details-icon">{selectedPackDetails.icon}</div>
            <div>
              <h4 className="details-name">{selectedPackDetails.name}</h4>
              <p className="details-full-desc">{selectedPackDetails.fullDesc}</p>
            </div>
          </div>

          <div className="details-section">
            <h5 className="details-section-title">¿Qué hace exactamente?</h5>
            <ul className="details-list">
              {selectedPackDetails.whatItDoes.map((item, index) => (
                <li key={index}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M7 10L9 12L13 8" stroke="#00FF88" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="10" cy="10" r="8" stroke="#00FF88" strokeWidth="1.5"/>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="details-section">
            <h5 className="details-section-title">Ideal para:</h5>
            <p className="details-best-for">{selectedPackDetails.bestFor}</p>
          </div>

          <div className="details-pricing">
            <div className="pricing-row">
              <span>Precio mensual:</span>
              <span className="pricing-value">${selectedPackDetails.price}/mes</span>
            </div>
            {selectedPackDetails.setup > 0 && (
              <div className="pricing-row">
                <span>Setup una vez:</span>
                <span className="pricing-value">${selectedPackDetails.setup}</span>
              </div>
            )}
            <div className="pricing-total">
              <span>Total primer mes:</span>
              <span className="pricing-total-value">
                ${selectedPackDetails.price + selectedPackDetails.setup}
              </span>
            </div>
          </div>

          <button 
            onClick={() => setSelectedPack(null)}
            className="details-close"
          >
            Cerrar detalles
          </button>
        </div>
      )}
    </div>
  );
}
