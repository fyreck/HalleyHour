/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calendar,
  MapPin,
  Clock,
  Info,
  User,
  Menu,
  ChevronDown,
  CheckCircle,
  ArrowRight,
  UtensilsCrossed,
  GlassWater,
  Plus,
  Minus
} from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  icon: JSX.Element;
}

const PRODUCTS: Product[] = [
  { id: 'aperitivo', name: 'Aperitivo', price: 5, icon: <GlassWater className="w-4 h-4" /> },
  { id: 'cibo', name: 'Hot Dog o Piadina', price: 5, icon: <UtensilsCrossed className="w-4 h-4" /> },
  { id: 'patatine', name: 'Patatine', price: 3, icon: <UtensilsCrossed className="w-4 h-4" /> },
  { id: 'bibita', name: 'Bibita', price: 2.5, icon: <GlassWater className="w-4 h-4" /> },
  { id: 'acqua', name: 'Acqua', price: 1, icon: <GlassWater className="w-4 h-4" /> },
];

export default function App() {
  const [people, setPeople] = useState(1);
  const [quantities, setQuantities] = useState<Record<string, number>>({
    aperitivo: 0,
    cibo: 0,
    patatine: 0,
    bibita: 0,
    acqua: 0
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    arrivalTime: '',
    freestyle: false,
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleQtyChange = (id: string, val: number) => {
    setQuantities(prev => ({ ...prev, [id]: val }));
  };

  const totalPrice = useMemo(() => {
    let total = 0;
    PRODUCTS.forEach(p => {
      total += quantities[p.id] * p.price;
    });
    return total;
  }, [quantities]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Mock submission
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text selection:bg-brand-primary selection:text-black pb-12">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-brand-bg/80 backdrop-blur-md border-b border-brand-outline px-6 py-4 flex justify-center items-center h-16">
        <h1 className="font-display font-extrabold text-2xl tracking-[0.2em] text-brand-primary uppercase">
          HALLEY HOUR
        </h1>
      </header>

      {/* Main Content */}
      <main className="pt-24 px-4 max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-brand-surface rounded-xl border border-brand-outline shadow-2xl overflow-hidden glow-shadow"
        >
          {/* Hero Image */}
          <div className="relative h-56 w-full">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDB7i40AMbGNuKPZnoD0lfSw8QM_fb-qADoWUi0C-pNQClZ2hIiBg0bWnRZbJsEVPcQVSv4P_--_4UGXtiez4xRM5CJjGQV2T1I_5LmHvQ7L6UUpE7rxbdhKMI0Kxl-2RlFsl9zaKnquG5HUcCNEYko6pfPUb6cAQ2lMHjV9bltQH6nVz7gCIXvtg0Gt8AsPNfnZRctEjTK1gZqATNc3N2OHvK9yolDMB7eADR6XhPCy9rec1Mxi-uf6-daAr2DmC8-rScLKHYPapI"
              alt="Halley Hour Event"
              className="w-full h-full object-cover opacity-60 mix-blend-overlay"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h2 className="font-display font-extrabold text-3xl text-brand-primary-fixed mb-0 drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                HALLEY HOUR
              </h2>
            </div>
          </div>

          <div className="p-6 space-y-10">
            {/* Event Info Grid */}
            <section className="space-y-6">
              <div className="grid grid-cols-3 gap-3">
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center space-y-1 hover:bg-white/10 transition-colors">
                  <Calendar className="w-5 h-5 text-brand-primary mx-auto mb-1" />
                  <p className="text-[10px] text-brand-text-muted uppercase font-mono tracking-tighter">Quando</p>
                  <p className="font-bold text-sm leading-tight">30 Magg</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center space-y-1 hover:bg-white/10 transition-colors">
                  <MapPin className="w-5 h-5 text-brand-primary mx-auto mb-1" />
                  <p className="text-[10px] text-brand-text-muted uppercase font-mono tracking-tighter">Dove</p>
                  <p className="font-bold text-sm leading-tight truncate">Sarmeola</p>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl text-center space-y-1 hover:bg-white/10 transition-colors">
                  <Clock className="w-5 h-5 text-brand-primary mx-auto mb-1" />
                  <p className="text-[10px] text-brand-text-muted uppercase font-mono tracking-tighter">Orario</p>
                  <p className="font-bold text-sm leading-tight">Ore 17.00</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <Info className="w-5 h-5 text-brand-text-muted shrink-0" />
                <p className="text-sm text-brand-text-muted leading-relaxed">
                  Ingresso a offerta libera. <br />
                  In caso di pioggia l&apos;evento si terrà al coperto.
                </p>
              </div>
            </section>

            {/* Booking Form */}
            <section className="space-y-8">
              <h3 className="font-bold text-2xl border-l-4 border-brand-primary pl-4 uppercase tracking-tighter">
                Prenota il tuo posto
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Number of People */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-brand-text-muted uppercase tracking-widest block" htmlFor="persone">
                    Numero di persone
                  </label>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setPeople(Math.max(1, people - 1))}
                      className="p-3 bg-brand-bg border border-brand-outline rounded-lg text-brand-primary hover:bg-white/5 transition-colors"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <input
                      id="persone"
                      type="number"
                      min="1"
                      value={people}
                      onChange={(e) => setPeople(parseInt(e.target.value) || 1)}
                      className="flex-1 min-w-0 bg-brand-bg border border-brand-outline rounded-lg px-4 py-3 text-brand-text text-center focus:outline-none input-glow-focus transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setPeople(people + 1)}
                      className="p-3 bg-brand-bg border border-brand-outline rounded-lg text-brand-primary hover:bg-white/5 transition-colors"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Product Selection */}
                <div className="space-y-3">
                  <p className="text-xs font-mono text-brand-text-muted uppercase tracking-widest block">
                    Selezione Prodotti
                  </p>
                  <div className="border border-brand-outline rounded-xl divide-y divide-brand-outline bg-brand-bg/50">
                    {PRODUCTS.map((prod) => (
                      <div key={prod.id} className="flex items-center justify-between p-4 group">
                        <div className="flex items-center gap-3">
                          <div className="p-1.5 bg-white/5 rounded-md text-brand-primary/60 group-hover:text-brand-primary transition-colors">
                            {prod.icon}
                          </div>
                          <div>
                            <p className="text-sm font-medium">{prod.name}</p>
                            <p className="text-xs text-brand-primary/80 font-bold">{prod.price}€</p>
                          </div>
                        </div>
                        <select
                          value={quantities[prod.id]}
                          onChange={(e) => handleQtyChange(prod.id, parseInt(e.target.value))}
                          className="bg-brand-bg border border-brand-outline rounded-lg px-2 py-1 text-sm focus:outline-none focus:border-brand-primary transition-colors cursor-pointer"
                        >
                          {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                            <option key={n} value={n}>{n}</option>
                          ))}
                        </select>
                      </div>
                    ))}

                    <div className="p-4 bg-brand-primary/5">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-1.5 bg-brand-primary/20 rounded-md text-brand-primary">
                          <UtensilsCrossed className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-bold">Menu Cena</p>
                          <p className="text-xs text-brand-primary font-black">10€</p>
                        </div>
                      </div>
                      <p className="text-[10px] text-brand-text-muted italic flex items-center gap-1">
                        <Info className="w-3 h-3" />
                        Disponibile Menu Cena (Cibo + Patatine + Bibita)
                      </p>
                    </div>
                  </div>
                </div>

                {/* Reservation Name */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-brand-text-muted uppercase tracking-widest block" htmlFor="name">
                    Nome di prenotazione
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Inserisci il nome"
                    value={formData.name}
                    onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                    className="w-full bg-brand-bg border border-brand-outline rounded-lg px-4 py-3 placeholder:text-brand-text/20 focus:outline-none input-glow-focus transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-brand-text-muted uppercase tracking-widest block" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Il tuo recapito"
                    value={formData.email}
                    onChange={(e) => setFormData(p => ({ ...p, email: e.target.value }))}
                    className="w-full bg-brand-bg border border-brand-outline rounded-lg px-4 py-3 placeholder:text-brand-text/20 focus:outline-none input-glow-focus transition-all"
                  />
                </div>

                {/* Arrival Time */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-brand-text-muted uppercase tracking-widest block" htmlFor="time">
                    Orario di arrivo
                  </label>
                  <div className="relative">
                    <select
                      id="time"
                      value={formData.arrivalTime}
                      onChange={(e) => setFormData(p => ({ ...p, arrivalTime: e.target.value }))}
                      className="w-full appearance-none bg-brand-bg border border-brand-outline rounded-lg px-4 py-3 text-brand-text focus:outline-none input-glow-focus transition-all cursor-pointer"
                    >
                      <option value="">Seleziona</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-text-muted pointer-events-none" />
                  </div>
                </div>

                {/* Freestyle Checkbox */}
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10 group cursor-pointer hover:bg-white/10 transition-colors"
                  onClick={() => setFormData(p => ({ ...p, freestyle: !p.freestyle }))}>
                  <p className="text-sm font-medium group-hover:text-brand-primary transition-colors">
                    Parteciperai alla battaglia di freestyle?
                  </p>
                  <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all ${formData.freestyle ? 'bg-brand-primary border-brand-primary' : 'border-brand-outline bg-brand-bg'}`}>
                    {formData.freestyle && <CheckCircle className="w-4 h-4 text-black" />}
                  </div>
                </div>

                {/* Notes */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-brand-text-muted uppercase tracking-widest block" htmlFor="notes">
                    Eventuali Note
                  </label>
                  <textarea
                    id="notes"
                    rows={2}
                    placeholder="Eventuali richieste..."
                    value={formData.notes}
                    onChange={(e) => setFormData(p => ({ ...p, notes: e.target.value }))}
                    className="w-full bg-brand-bg border border-brand-outline rounded-lg px-4 py-3 placeholder:text-brand-text/20 focus:outline-none input-glow-focus transition-all resize-none"
                  />
                </div>

                {/* Submission Footer */}
                <div className="pt-6 space-y-6">
                  <div className="text-center space-y-2 px-2">
                    <p className="text-xs font-mono text-rose-400 uppercase tracking-[0.2em]">
                      Prenotazioni aperte fino al 27 maggio
                    </p>
                    <p className="text-[11px] text-brand-text-muted leading-relaxed">
                      Si specifica che questa non è una prenotazione esclusiva e non vincola all&apos;acquisto; la prenotazione serve per agevolare l&apos;organizzazione dell&apos;evento.
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitted || !formData.name || !formData.email}
                    className="w-full py-4 bg-brand-primary text-black font-bold uppercase tracking-widest rounded-full hover:scale-[0.98] active:scale-95 transition-all shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:grayscale"
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5 animate-pulse" />
                        PRENOTAZIONE INVIATA
                      </>
                    ) : (
                      <>
                        CONFERMA PRENOTAZIONE
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </section>
          </div>
        </motion.div>

        {/* Branding Footer */}
        <footer className="mt-12 text-center pb-8 border-t border-brand-outline pt-8">
          <p className="font-display font-black text-brand-text/20 text-4xl tracking-tighter mb-4 opacity-50">
            HALLEY HOUR
          </p>
          <div className="flex justify-center gap-4 text-brand-text-muted text-xs font-mono opacity-50">
            <span>© 2026</span>
            <span>•</span>
            <span>SARMEOLA</span>
            <span>•</span>
            <span>CELESTIAL TECH</span>
          </div>
        </footer>
      </main>

      {/* Visual background details */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-brand-primary/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] left-[5%] w-[400px] h-[400px] bg-brand-primary/5 blur-[100px] rounded-full" />
        {/* Stars */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-brand-primary/40 rounded-full animate-pulse"
            style={{
              width: Math.random() * 2 + 1 + 'px',
              height: Math.random() * 2 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: Math.random() * 3 + 2 + 's'
            }}
          />
        ))}
      </div>

      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-xl"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="bg-brand-surface border border-brand-primary/50 p-10 rounded-2xl text-center max-w-sm"
            >
              <div className="w-20 h-20 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-brand-primary" />
              </div>
              <h2 className="text-2xl font-bold text-brand-primary mb-2 uppercase tracking-tighter">Grazie {formData.name.split(' ')[0]}!</h2>
              <p className="text-brand-text-muted mb-8 italic">Abbiamo ricevuto la tua prenotazione per l&apos;evento. Ti aspettiamo il 30 Maggio alle 17:00.</p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="w-full py-3 bg-brand-bg border border-brand-primary/30 text-brand-primary text-sm font-bold uppercase tracking-widest rounded-lg"
              >
                Chiudi
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
