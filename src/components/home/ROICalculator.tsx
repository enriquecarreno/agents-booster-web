/**
 * ROI CALCULATOR - PREMIUM REDESIGN
 * Calculadora interactiva con animaciones
 */

import { useState, useEffect } from 'react';

export default function ROICalculator() {
  const [sales, setSales] = useState(50000); // $50K default
  const [teamSize, setTeamSize] = useState(5);
  const [hours, setHours] = useState(8);

  const [results, setResults] = useState({
    recoveredSales: 0,
    timeSaved: 0,
    roi: 0,
    months: 0
  });

  useEffect(() => {
    // Cálculos simplificados pero realistas
    const offHoursLeads = hours < 24 ? (sales * 0.4) : 0; // 40% leads fuera de horario
    const conversionRate = 0.15; // 15% conversión típica
    const recoveredSales = Math.round(offHoursLeads * conversionRate);

    const tasksPerPerson = 20; // horas/semana en tareas repetitivas
    const timeSaved = Math.round(teamSize * tasksPerPerson * 0.6); // 60% automatizable

    const monthlyCost = 699; // Plan Grow
    const monthlyBenefit = recoveredSales + (timeSaved * 40); // $40/hora valor tiempo
    const roi = monthlyCost > 0 ? Math.round((monthlyBenefit / monthlyCost) * 100) : 0;
    const months = monthlyBenefit > monthlyCost ? Math.round(monthlyCost / (monthlyBenefit - monthlyCost)) : 0;

    setResults({
      recoveredSales,
      timeSaved,
      roi,
      months: Math.max(1, Math.min(months, 12))
    });
  }, [sales, teamSize, hours]);

  return (
    <div className="roi-calculator">
      <div className="calculator-grid">
        {/* Inputs Section */}
        <div className="inputs-section">
          <h3 className="inputs-title">Tu operación actual</h3>

          <div className="input-group">
            <label htmlFor="sales" className="input-label">
              <span>Ventas mensuales</span>
              <span className="input-value">${sales.toLocaleString()}</span>
            </label>
            <input
              id="sales"
              type="range"
              min="10000"
              max="500000"
              step="10000"
              value={sales}
              onChange={(e) => setSales(Number(e.target.value))}
              className="slider"
            />
            <div className="slider-labels">
              <span>$10K</span>
              <span>$500K</span>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="team" className="input-label">
              <span>Tamaño del equipo</span>
              <span className="input-value">{teamSize} personas</span>
            </label>
            <input
              id="team"
              type="range"
              min="1"
              max="50"
              step="1"
              value={teamSize}
              onChange={(e) => setTeamSize(Number(e.target.value))}
              className="slider"
            />
            <div className="slider-labels">
              <span>1</span>
              <span>50</span>
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="hours" className="input-label">
              <span>Horario actual</span>
              <span className="input-value">{hours}h/día</span>
            </label>
            <input
              id="hours"
              type="range"
              min="8"
              max="24"
              step="1"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className="slider"
            />
            <div className="slider-labels">
              <span>8h</span>
              <span>24h</span>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="results-section">
          <h3 className="results-title">Tu potencial con IA</h3>

          <div className="result-card result-primary">
            <div className="result-icon">💰</div>
            <div className="result-content">
              <div className="result-value">
                ${results.recoveredSales.toLocaleString()}
              </div>
              <div className="result-label">ventas recuperadas/mes</div>
              <div className="result-description">
                Leads que llegan fuera de horario ahora se atienden 24/7
              </div>
            </div>
          </div>

          <div className="result-card">
            <div className="result-icon">⏱️</div>
            <div className="result-content">
              <div className="result-value">{results.timeSaved}h</div>
              <div className="result-label">ahorradas/semana</div>
              <div className="result-description">
                Tu equipo se enfoca en lo que requiere humanos
              </div>
            </div>
          </div>

          <div className="result-card result-highlight">
            <div className="result-icon">📈</div>
            <div className="result-content">
              <div className="result-value">{results.roi}%</div>
              <div className="result-label">ROI proyectado</div>
              <div className="result-description">
                Recuperas inversión en ~{results.months} {results.months === 1 ? 'mes' : 'meses'}
              </div>
            </div>
          </div>

          <a href="/demo" className="cta-button">
            <span>Ver agente en acción</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
