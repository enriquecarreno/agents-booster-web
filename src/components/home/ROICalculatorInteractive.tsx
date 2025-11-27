/**
 * ROI CALCULATOR V2 - SPRINT 1
 * Emojis → Lucide Icons ✅
 * Solo para agentes activos: Ventas y Operaciones
 * Inputs numéricos en vez de sliders largos
 */

import { useState } from 'react';
import { DollarSign, Settings } from 'lucide-react';

type AgentType = 'ventas' | 'operaciones';

export default function ROICalculatorInteractive() {
  const [activeAgent, setActiveAgent] = useState<AgentType>('ventas');
  
  // Ventas
  const [leads, setLeads] = useState(100);
  const [conversion, setConversion] = useState(3);
  const [ticket, setTicket] = useState(2000);
  
  // Operaciones
  const [teamSize, setTeamSize] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(15);
  const [tasksPerDay, setTasksPerDay] = useState(50);

  // Cálculos Ventas
  const missedLeads = Math.round(leads * 0.30);
  const recoveredLeads = Math.round(missedLeads * 0.70);
  const newSales = (recoveredLeads * (conversion / 100)).toFixed(1);
  const additionalRevenue = Math.round(recoveredLeads * (conversion / 100) * ticket);
  const salesROI = Math.round(((additionalRevenue - 699) / 699) * 100);

  // Cálculos Operaciones
  const tasksPerMonth = tasksPerDay * 22;
  const hoursFreed = Math.round((tasksPerMonth * 5) / 60); // 5 min promedio
  const costSaved = hoursFreed * hourlyRate * teamSize;
  const opsROI = Math.round(((costSaved - 699) / 699) * 100);

  return (
    <div className="roi-calc-compact">
      
      {/* Agent Selector */}
      <div className="calc-tabs">
        <button
          onClick={() => setActiveAgent('ventas')}
          className={`calc-tab ${activeAgent === 'ventas' ? 'active' : ''}`}
        >
          <DollarSign size={20} strokeWidth={2.5} className="tab-icon-lucide" />
          <span className="tab-label">Agente de Ventas</span>
        </button>
        <button
          onClick={() => setActiveAgent('operaciones')}
          className={`calc-tab ${activeAgent === 'operaciones' ? 'active' : ''}`}
        >
          <Settings size={20} strokeWidth={2.5} className="tab-icon-lucide" />
          <span className="tab-label">Agente de Operaciones</span>
        </button>
      </div>

      {/* Calculator Content */}
      <div className="calc-body">
        
        {/* VENTAS */}
        {activeAgent === 'ventas' && (
          <div className="calc-content">
            <div className="calc-inputs">
              <h4>Ingresa tus datos</h4>
              
              <div className="input-row">
                <label>Leads al mes</label>
                <input
                  type="number"
                  value={leads}
                  onChange={(e) => setLeads(Number(e.target.value))}
                  min={20}
                  max={1000}
                  className="number-input"
                />
              </div>

              <div className="input-row">
                <label>Conversión actual (%)</label>
                <input
                  type="number"
                  value={conversion}
                  onChange={(e) => setConversion(Number(e.target.value))}
                  min={1}
                  max={25}
                  step={0.5}
                  className="number-input"
                />
              </div>

              <div className="input-row">
                <label>Ticket promedio ($)</label>
                <input
                  type="number"
                  value={ticket}
                  onChange={(e) => setTicket(Number(e.target.value))}
                  min={100}
                  max={50000}
                  step={100}
                  className="number-input"
                />
              </div>
            </div>

            <div className="calc-results-compact">
              <h4>Tu impacto estimado</h4>
              
              <div className="result-row">
                <span className="result-label">Leads recuperados/mes</span>
                <span className="result-value">{recoveredLeads}</span>
              </div>

              <div className="result-row">
                <span className="result-label">Ventas adicionales/mes</span>
                <span className="result-value">{newSales}</span>
              </div>

              <div className="result-row highlight">
                <span className="result-label">Ingresos adicionales/mes</span>
                <span className="result-value">${additionalRevenue.toLocaleString()}</span>
              </div>

              <div className="result-row highlight">
                <span className="result-label">ROI del agente</span>
                <span className="result-value">{salesROI}%</span>
              </div>

              <div className="calc-note">
                Costo del agente: <strong>$699/mes</strong> (Plan Grow)
              </div>
            </div>
          </div>
        )}

        {/* OPERACIONES */}
        {activeAgent === 'operaciones' && (
          <div className="calc-content">
            <div className="calc-inputs">
              <h4>Ingresa tus datos</h4>
              
              <div className="input-row">
                <label>Personas en el equipo</label>
                <input
                  type="number"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  min={2}
                  max={50}
                  className="number-input"
                />
              </div>

              <div className="input-row">
                <label>Costo por hora ($/hora)</label>
                <input
                  type="number"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  min={5}
                  max={100}
                  step={5}
                  className="number-input"
                />
              </div>

              <div className="input-row">
                <label>Tareas repetitivas/día</label>
                <input
                  type="number"
                  value={tasksPerDay}
                  onChange={(e) => setTasksPerDay(Number(e.target.value))}
                  min={10}
                  max={200}
                  step={10}
                  className="number-input"
                />
              </div>
            </div>

            <div className="calc-results-compact">
              <h4>Tu impacto estimado</h4>
              
              <div className="result-row">
                <span className="result-label">Tareas automatizadas/mes</span>
                <span className="result-value">{tasksPerMonth.toLocaleString()}</span>
              </div>

              <div className="result-row">
                <span className="result-label">Horas liberadas/mes</span>
                <span className="result-value">{hoursFreed} hrs</span>
              </div>

              <div className="result-row highlight">
                <span className="result-label">Valor del tiempo recuperado</span>
                <span className="result-value">${costSaved.toLocaleString()}/mes</span>
              </div>

              <div className="result-row highlight">
                <span className="result-label">ROI del agente</span>
                <span className="result-value">{opsROI}%</span>
              </div>

              <div className="calc-note">
                Costo del agente: <strong>$699/mes</strong> (Plan Grow)
              </div>
            </div>
          </div>
        )}

      </div>

      {/* CTA */}
      <div className="calc-cta">
        <a href="/demo" className="btn-demo">
          Ver demo del Agente de {activeAgent === 'ventas' ? 'Ventas' : 'Operaciones'} →
        </a>
      </div>

      {/* Disclaimer Compacto */}
      <p className="calc-disclaimer">
        Estimaciones basadas en datos de nuestro piloto. Resultados reales varían según implementación.
      </p>

    </div>
  );
}
