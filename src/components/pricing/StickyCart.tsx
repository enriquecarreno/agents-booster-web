/**
 * STICKY CART V3 - PREMIUM COLLAPSIBLE
 * Carrito colapsable que no interfiere con el contenido
 */

import { useState, useEffect } from 'react';
import { useCartStore } from '../../lib/cart-store';
import { X, ShoppingCart, ArrowRight, ChevronRight, ChevronLeft } from 'lucide-react';
import { CheckoutModal } from './CheckoutModal';
import { baseUrl } from '../../lib/base-url';
import styles from './StickyCart.module.css';

interface StickyCartProps {
  billingCycle?: 'monthly' | 'annual';
}

export function StickyCart({ billingCycle: initialBillingCycle = 'monthly' }: StickyCartProps) {
  const { items, removeAgent, getSubtotal } = useCartStore();
  const [showCheckout, setShowCheckout] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>(initialBillingCycle);
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // Listen to billing cycle changes from parent page
  useEffect(() => {
    const handleBillingChange = (e: CustomEvent) => {
      setBillingCycle(e.detail.cycle);
    };
    
    window.addEventListener('billingCycleChange', handleBillingChange as EventListener);
    
    return () => {
      window.removeEventListener('billingCycleChange', handleBillingChange as EventListener);
    };
  }, []);
  
  // Listen to add to cart events
  useEffect(() => {
    const handleAddToCart = (e: CustomEvent) => {
      const { addAgent } = useCartStore.getState();
      addAgent(e.detail);
      // Expand cart cuando se agrega algo
      setIsCollapsed(false);
    };
    
    window.addEventListener('addToCart', handleAddToCart as EventListener);
    
    return () => {
      window.removeEventListener('addToCart', handleAddToCart as EventListener);
    };
  }, []);
  
  const subtotal = getSubtotal();
  const setupTotal = items.reduce((sum, item) => sum + item.setup, 0);
  
  // Calcular total según billing cycle
  const monthlyTotal = subtotal;
  const annualMonthly = Math.round(subtotal * 0.8);
  const annualTotal = annualMonthly * 12;
  const savings = billingCycle === 'annual' ? Math.round(subtotal * 0.2 * 12) : 0;
  
  const isEmpty = items.length === 0;
  
  return (
    <>
      <div 
        className={`${styles['sticky-cart-wrapper']} ${isCollapsed ? styles.collapsed : ''} ${!isEmpty && isCollapsed ? styles['has-items'] : ''}`}
      >
        {/* Toggle Button (solo visible en desktop) */}
        <button
          className={styles['cart-toggle']}
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? 'Expandir carrito' : 'Colapsar carrito'}
        >
          {isCollapsed ? (
            <>
              <ShoppingCart size={24} />
              {!isEmpty && (
                <span className={styles['cart-badge']}>{items.length}</span>
              )}
            </>
          ) : (
            <ChevronRight size={24} />
          )}
        </button>
        
        {/* Cart Container */}
        <div className={styles['cart-container']}>
          <div className={styles['cart-header']}>
            <div className={styles['cart-title']}>
              <ShoppingCart size={20} />
              <span>Tu Configuración</span>
            </div>
            {!isEmpty && (
              <span className={styles['cart-count']}>{items.length}</span>
            )}
          </div>
          
          <div className={styles['cart-body']}>
            {isEmpty ? (
              <div className={styles['cart-empty']}>
                <div className={styles['empty-icon']}>🛒</div>
                <p className={styles['empty-text']}>
                  Tu carrito está vacío
                </p>
                <p className={styles['empty-hint']}>
                  Selecciona un agente y haz clic en "Agregar al Carrito"
                </p>
              </div>
            ) : (
              <div className={styles['cart-items']}>
                {items.map((item) => {
                  const itemMonthlyPrice = billingCycle === 'annual' 
                    ? Math.round(item.basePrice * 0.8)
                    : item.basePrice;
                  
                  const addonsTotal = item.expansionPacks.reduce((sum, pack) => {
                    const packPrice = billingCycle === 'annual' ? Math.round(pack.price * 0.8) : pack.price;
                    return sum + packPrice;
                  }, 0);
                  
                  const itemTotal = itemMonthlyPrice + addonsTotal;
                  
                  return (
                    <div key={item.agentId} className={styles['cart-item']}>
                      <div className={styles['cart-item-header']}>
                        <div className={styles['cart-item-info']}>
                          <span className={styles['cart-item-icon']}>{item.agentIcon}</span>
                          <div className={styles['cart-item-text']}>
                            <span className={styles['cart-item-name']}>{item.agentName}</span>
                            <span className={styles['cart-item-level']}>{item.levelName}</span>
                          </div>
                        </div>
                        <button
                          onClick={() => removeAgent(item.agentId)}
                          className={styles['cart-item-remove']}
                          aria-label="Remover agente"
                        >
                          <X size={16} />
                        </button>
                      </div>
                      
                      <div className={styles['cart-item-pricing']}>
                        <div className={styles['cart-item-base']}>
                          <span>Plan base:</span>
                          <span className={styles.price}>${itemMonthlyPrice}/mes</span>
                        </div>
                        
                        {item.expansionPacks.length > 0 && (
                          <div className={styles['cart-item-addons']}>
                            {item.expansionPacks.map((pack) => {
                              const packPrice = billingCycle === 'annual' ? Math.round(pack.price * 0.8) : pack.price;
                              return (
                                <div key={pack.packId} className={styles['cart-addon']}>
                                  <span>+ {pack.packName}</span>
                                  <span className={styles.price}>+${packPrice}/mes</span>
                                </div>
                              );
                            })}
                          </div>
                        )}
                        
                        <div className={styles['cart-item-total']}>
                          <span>Subtotal:</span>
                          <span className={styles['price-total']}>${itemTotal}/mes</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
          
          {!isEmpty && (
            <div className={styles['cart-footer']}>
              <div className={styles['cart-totals']}>
                <div className={styles['cart-total-row']}>
                  <span>Subtotal mensual:</span>
                  <span className={styles.value}>
                    ${billingCycle === 'annual' ? annualMonthly : monthlyTotal}/mes
                  </span>
                </div>
                
                <div className={`${styles['cart-total-row']} ${styles['setup-row']}`}>
                  <span>Setup total:</span>
                  <span className={styles['setup-value']}>
                    <span className={styles.crossed}>${setupTotal}</span>
                    <span className={styles.free}>GRATIS</span>
                  </span>
                </div>
                
                {billingCycle === 'annual' && (
                  <>
                    <div className={styles['cart-savings-badge']}>
                      💰 Ahorras ${savings}/año con plan anual
                    </div>
                    <div className={`${styles['cart-total-row']} ${styles['annual-row']}`}>
                      <span>Total anual:</span>
                      <span className={styles['value-annual']}>${annualTotal}/año</span>
                    </div>
                  </>
                )}
                
                <div className={`${styles['cart-total-row']} ${styles['final-row']}`}>
                  <span>TOTAL {billingCycle === 'annual' ? 'ANUAL' : 'MENSUAL'}:</span>
                  <span className={styles['value-final']}>
                    ${billingCycle === 'annual' ? annualTotal : monthlyTotal}
                    {billingCycle === 'annual' ? '/año' : '/mes'}
                  </span>
                </div>
              </div>
              
              <button
                onClick={() => setShowCheckout(true)}
                className={styles['cart-cta-btn']}
              >
                <span>Solicitar Cotización</span>
                <ArrowRight size={18} />
              </button>
              
              <div className={styles['cart-help-text']}>
                <p>
                  ¿Necesitas ayuda?{' '}
                  <a href={`${baseUrl}/demo`}>Habla con Diego</a>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Modal de Checkout */}
      {showCheckout && (
        <CheckoutModal
          items={items}
          subtotal={billingCycle === 'annual' ? annualMonthly : monthlyTotal}
          total={billingCycle === 'annual' ? annualTotal : monthlyTotal}
          billingCycle={billingCycle}
          setupTotal={setupTotal}
          savings={savings}
          onClose={() => setShowCheckout(false)}
        />
      )}
    </>
  );
}
